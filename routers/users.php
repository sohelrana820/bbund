<?php
$app->post(
    '/users'
    ,
    function () use ($app) {
        $data = json_decode(file_get_contents("php://input"));
        echo json_encode($data);
    }
);
?>