<?php
include_once "./lib/database.php";
header('Access-Control-Allow-Origin: http://localhost:5000');

$input = json_decode(file_get_contents('php://input'));

$password = $input->password;
$username = $input->username;

try {
    if ($username == "" || $password == "") {
        $status = array("status" => "error", "description" => "inputs can't be empty!");
    } else {
        $SQLStatement = $connection->prepare("CALL `usp_authorize_user`(:username)");
        $SQLStatement->bindParam(':username', $username);
        $SQLStatement->execute();

        $rowCount = $SQLStatement->rowCount();

        if ($rowCount > 0) {
            $user = $SQLStatement->fetch(PDO::FETCH_ASSOC);
            if (password_verify($password, $user['password'])) {
                $status = array("status" => "ok", "description" => "Authorization successful");
            } else {
                $status = array("status" => "error", "description" => "Authorization failed");
            }
        } else {
            $status = array("status" => "error", "description" => "User not found");
        }
    }
    echo json_encode($status);
} catch (PDOException $connectionException) {
    $status = array("status" => "db-error (authorizeUser.php)", "description" => $connectionException->getMessage());
    echo json_encode($status);
    die();
}
?>
