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
        $app->render('home.html');
    }
);

$app->run();
