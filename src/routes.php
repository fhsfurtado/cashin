<?php

date_default_timezone_set ("America/Fortaleza");

$root_url  = '//' . $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'];
$context_url = '/cashin'; // ex.: exemplo.com.br/system
$base_url  = $root_url . $context_url;

$index = "{$base_url}/";
$site_logos = "{$index}../";
$login = "{$base_url}/login_help.php";
$logout = "{$base_url}/logout.php";

// CSS

$materializecss = "{$base_url}/assets/materialize/css/materialize.min.css";

// JS

$materializejs = "{$base_url}/assets/materialize/js/materialize.min.js";
$jquery        = "{$base_url}/assets/jquery/jquery.min.js";

//  = "{$base_url}/";
// function redirects

function redirect($url){
    if( headers_sent() ) {
      echo("<script>location.href='{$url}'</script>");
    } else {
      header("Location: {$url}");
    }
    exit;
  }
  
  function redirectTime($url){
      //header("Location: {$url}");
      echo "<meta http-equiv='refresh' content='1;url={$url}'>";
    exit;
  }