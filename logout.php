<?php
session_start();
session_destroy();
header("location: User.php");
exit();
?>
