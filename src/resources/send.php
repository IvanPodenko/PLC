<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['username'];
$phone = $_POST['userphone'];
// $email = $_POST['user_email'];
$token = "6334142224:AAE8WigRiLE8HR2LgyJRHK5a-gebU27sbA4";
$chat_id = "-1002134499339";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  // 'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>



