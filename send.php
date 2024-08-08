<?php

$email = "no-reply@qwertyx.net";
$to = "qwertyxnet@gmail.com";
$sitename = "Qwertyx";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["phone"]);


$message = "
К вам пришла заявка с сайта qwertyx.net<br>
Имя: $name <br>
Телефон: $phone <br>
";

$headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion() . "\r\n" .
	"Content-type: text/html; charset=\"utf-8\"";

mail($to, $pagetitle, $message, $headers);


