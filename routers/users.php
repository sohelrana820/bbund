<?php
use Model\Users;

$app->post(
    '/users'
    ,
    function () use ($app) {
        $data = json_decode(file_get_contents("php://input"));

        $user = new Users();
        $user->uuid = \Lib\App::v4();
        $user->name = $data->name;
        $user->email = $data->email;
        $user->password = password_hash($data->password, PASSWORD_BCRYPT);
        $user->save();
        echo json_encode($data);
    }
);

$app->post(
    '/users/login'
    ,
    function () use ($app) {
        $data = json_decode(file_get_contents("php://input"));
        $user = new Users();
        $result = $user->where('email', $data->email)
            /*->where('password', password_hash($data->password, PASSWORD_BCRYPT))*/
            ->first();
        echo json_encode($result);
    }
);


$app->post(
    '/users/is_email_unique'
    ,
    function () use ($app) {
        $data = json_decode(file_get_contents("php://input"));
        $user = new Users();
        $isExist = $user->whereEmail($data->email)->first();
        echo json_encode($isExist);
    }
);
?>