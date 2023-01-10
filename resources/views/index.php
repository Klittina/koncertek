<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="csrf-token" content=<?php $token = csrf_token(); echo $token; ?>>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/CSS/alap.css">
    <script
  src="https://code.jquery.com/jquery-3.6.1.js"
  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
  crossorigin="anonymous"></script>
    <script src="/JS/koncert.js" type="module"></script>
    <title>Milyen koncertek lesznek</title>
</head>
<body>
<nav>
    <ul>
      <li id="nincsmas"><a href="#">Publikus</a></li>
  </ul>
    
  </nav>
    <main></main>
</body>
</html>