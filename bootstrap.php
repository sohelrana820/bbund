<?php
/**
 * @author: Sohel Rana
 * @URI: http://sohelrana.me
 */

define('APP_DIR', __DIR__ . DIRECTORY_SEPARATOR);

mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');
date_default_timezone_set('Asia/Dhaka');
session_start();

require APP_DIR . 'vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => 'localhost',
    'database'  => 'bbund',
    'username'  => 'root',
    'password'  => 'ltqpsmr7',
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);

use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;
$capsule->setEventDispatcher(new Dispatcher(new Container));
$capsule->setAsGlobal();
$capsule->bootEloquent();



$app = new \Slim\Slim(
    array(
        'templates.path' => APP_DIR . 'templates',
    )
);

$app->view()->setData(
    array(
        'title' => 'Bbund'
    )
);