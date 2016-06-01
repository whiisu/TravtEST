<?php
//ühendamine andmebaasiga
function connect_db() {
  global $conn;
  $host = "localhost";
  $user = "test";
  $pass = "t3st3r123";
  $db = "test";
  $conn = mysqli_connect($host, $user, $pass, $db) or die("Ei saanud andmebaasiga ühendust");
  mysqli_query($conn, "SET CHARACTER SET UTF8") or die("Ei saanud andmebaasi utf-8-sse".mysqli_error($conn));
}

//uue kasutaja registreerimine
function register() {
  global $conn;
  if (!empty($_POST)) {
    //sisestuse kontroll
    $errors = array();
    if (empty($_POST['kasutajanimi'])) {
      $errors[] = "sisesta kasutajanimi!";
    }
    if (empty($_POST['parool'])) {
      $errors[] = "sisesta parool!";
    }
    if (empty($_POST['parool2'])) {
      $errors[] = "sisesta parool veelkord!";
    }
    if (!empty($_POST['parool']) && !empty($_POST['parool2']) && $_POST['parool'] != $_POST['parool2']) {
      $errors[] = "Sisestatud paroolid ei ole ühesugused!";
    }
    //kõik ok
    if (empty($errors)) {
      $uname = mysqli_real_escape_string($conn, $_POST['username']);
      $passw = mysqli_real_escape_string($conn, $_POST['password']);
      $query = mysqli_query($conn, "SELECT count(*) AS count_rows FROM kaernits_travtuser WHERE username='$uname'");
      
      
      $row = mysqli_fetch_assoc($query);
      if ($row['count_rows'] == 1) {
				$errors[] = "Sellise nimega kasutaja on juba olemas.";
			}
      if (empty($errors)) {
        $query = mysqli_query($conn, "INSERT INTO kaernits_travtuser (username, password) VALUES ('$uname', SHA1('$passw'))");
        if ($query) {
          $_SESSION['positive'] = "Registreerumine õnnestus, logi sisse";
          header("Location: ?");
          exit(0);
        } else {
          $errors[] = "Registreerumine ebaõnnestus, proovi uuesti.";
        }
      }
    }
  }
  include_once("head.html");
  include("register.html");
  include_once("foot.html");
}
