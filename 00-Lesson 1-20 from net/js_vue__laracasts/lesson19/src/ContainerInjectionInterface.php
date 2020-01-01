<?php

namespace Lesson19;

use Pimple\Psr11\Container;

interface ContainerInjectionInterface {
  public static function instantiate(Container $container);
}
