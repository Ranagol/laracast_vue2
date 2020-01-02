<?php

namespace Lesson19;

use Pimple\Container as Pimple;
use Pimple\Psr11\Container;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

require_once __DIR__ . '/vendor/autoload.php';

$app = new Application();
$container = new Container($dic = new Pimple());
$dic[ProjectStore::NAME] = ProjectStore::instantiate($container);
$dic[ProjectManager::NAME] = ProjectManager::instantiate($container);

/** @var \Lesson19\ProjectManager $projectsManager */
$projectsManager = $container->get(ProjectManager::NAME);

$app->get('/projects', function () use($projectsManager) {
  return $projectsManager->listAll();
});
$app->post('/projects', function (Request $req) use($projectsManager) {
  $data = json_decode($req->getContent());
  return $projectsManager->createProject($data->name, $data->description);
});


$app->run();
