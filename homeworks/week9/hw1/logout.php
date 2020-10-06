<?php 
  session_start();
  session_destroy();
  // require_once('conn.php');

  // // 刪除 token
  // $token = $_COOKIE['token'];
  // $sql = sprintf(
  //   "DELETE FROM tokens WHERE token = '%s'",
  //   $token
  // );
  // $conn->query($sql);

  // setcookie("token", "", time() - 3600);
  header('Location: index.php');
?>
