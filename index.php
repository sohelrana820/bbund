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

$app->run();
