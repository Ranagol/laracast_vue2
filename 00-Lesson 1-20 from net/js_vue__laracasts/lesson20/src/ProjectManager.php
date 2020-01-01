<?php

namespace Lesson20;

use Pimple\Psr11\Container;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class ProjectManager implements ContainerInjectionInterface {
  const NAME = 'project_manager';

  /**
   * @var \Lesson20\ProjectStore
   */
  protected $store;

  public function __construct(ProjectStore $store) {
    $this->store = $store;
  }

  public static function instantiate(Container $container) {
    $store = $container->get(ProjectStore::NAME);
    return new static($store);
  }

  public function listAll() {
    $projects = $this->store->all();
    return new JsonResponse($projects);
  }

  public function createProject(string $name, string $description) {
    try {
      $this->store->create(new Project($name, $description));
      return new JsonResponse('Created', Response::HTTP_CREATED);
    }
    catch (\InvalidArgumentException $e) {
      return new Response($e->getMessage(), Response::HTTP_UNPROCESSABLE_ENTITY);
    }
  }
}
