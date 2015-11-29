<?php
/**
 * @author: Sohel Rana
 * @URI: http://sohelrana.me
 */

require "bootstrap.php";

$app->get(
    '/'
    ,
    function () use ($app) {
        $app->render('layout.html');
    }
);

require "routers/users.php";
$app->run();
