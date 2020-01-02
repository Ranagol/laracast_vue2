<?php

namespace Lesson20;

class Project implements \JsonSerializable {
  /** @var string */
  public $name;

  /** @var string */
  public $description;

  public function __construct(string $name, string $description) {
    $this->name = $name;
    $this->description = $description;
  }

  public function jsonSerialize() {
    return [
      'name' => $this->name,
      'description' => $this->description,
    ];
  }
}
