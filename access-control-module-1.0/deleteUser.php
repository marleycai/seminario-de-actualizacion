<?php
include_once "./lib/database.php";

header('Access-Control-Allow-Origin: http://localhost:5000');

$input = json_decode(file_get_contents('php://input'));

$password = password_hash($input->password, PASSWORD_DEFAULT);
$username = $input->username;
$delete = $input->delete;

try {
    if ($username == "" || $password == "") {
        $status = array("status" => "error", "description" => "inputs can't be empty!");
    } else {
        $SQLStatement = $connection->prepare("CALL `usp_delete_user`(:username, :password)");
        $SQLStatement->bindParam(':username', $username);
        $SQLStatement->bindParam(':password', $password);

        $SQLStatement->execute();

        $rowCount = $SQLStatement->rowCount();

        if ($rowCount > 0) {
            $status = array("status" => "ok", "description" => "User deleted successfully");
        } else {
            $status = array("status" => "error", "description" => "User not found");
        }
    }
    echo json_encode($status);
} catch (PDOException $connectionException) {
    $status = array("status" => "db-error (deleteUser.php)", "description" => $connectionException->getMessage());
    echo json_encode($status);
    die();
}
?>
