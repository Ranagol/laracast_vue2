<?php

namespace Lesson20;

use Pimple\Psr11\Container;

/**
 * Class ProjectStore
 *
 * Yay race conditions :-)
 *
 * @package Lesson20
 */
class ProjectStore implements ContainerInjectionInterface  {
  const NAME = 'project_store';
  const STORE = __DIR__ . '/../project.json';

  protected $data = [];

  public function __construct() {
    if (!file_exists(self::STORE)) {
      $this->save();
    }
    $this->load();
  }

  public function __destruct() {
    $this->save();
  }

  protected function load() {
    $raw = file_get_contents(self::STORE);
    $this->data = json_decode($raw, TRUE);
  }

  protected function save() {
    $raw = json_encode($this->data, JSON_PRETTY_PRINT);
    file_put_contents(self::STORE, $raw);
    $this->load();
  }

  public static function instantiate(Container $container) {
    return new static();
  }

  public function all() {
    return array_map(function ($item) {
      return new Project($item['name'], $item['description']);
    }, $this->data);
  }

  public function create(Project $project) {
    $name = $project->name;
    if (isset($this->data[$name])) {
      throw new \InvalidArgumentException("Project {$name} already exists.");
    }
    if (empty($project->name)) {
      throw new \InvalidArgumentException("Cannot create project without a name.");
    }

    $this->data[$name] = $project;
    $this->save();
  }

  public function retrieve(string $name): Project {
    if (!isset($this->data[$name])) {
      throw new \InvalidArgumentException("Trying to retrieve non-existent project $name");
    }
    return $this->data[$name];
  }

  public function update(string $name, Project $new) {
    // Will throw if project does not exist.
    $existing = $this->retrieve($name);

    $this->delete($existing);
    $this->create($new);
    $this->save();
  }

  public function delete(Project $project) {
    unset($this->data[$project->name]);
  }
}
