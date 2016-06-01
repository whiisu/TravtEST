<?php
require_once("function.php");
connect_db();
session_start();

$page = "";
if (!empty($_GET['page'])) {
  $page = $_GET['page'];
}
switch ($page) {
	case 'main':
    register();
    break;	
	
  case 'register':
    register();
    break;
    
  case 'login':
    login();
    break;
    
	case 'logout':
    $_SESSION = array();
    session_destroy();
    header("Location: ?");
    break;
    
    case 'update':
    update_userinfo();
    break;
  default:
   	login();
    break;
}
?>
