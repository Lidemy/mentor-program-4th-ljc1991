<?php 
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (
    empty($_POST['content'])
  ) {
    header('Location: index.php?errCode=1');
    die('資料不齊全');
  }

  $user = getUserFromUsername($_SESSION['username']);
  $nickname = $user['nickname'];

  $content = $_POST['content'];

  $sql = sprintf(
    "insert into ljc1991_comments(nickname, content) values('%s', '%s')",
    $nickname,
    $content
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>
