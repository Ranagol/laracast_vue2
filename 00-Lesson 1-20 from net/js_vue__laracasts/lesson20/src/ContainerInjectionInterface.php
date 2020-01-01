<?php

namespace Lesson20;

use Pimple\Psr11\Container;

interface ContainerInjectionInterface {
  public static function instantiate(Container $container);
}
