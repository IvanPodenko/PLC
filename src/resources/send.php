<?php
$method = $_SERVER["REQUEST_METHOD"];
if ($method === "POST") {

  $names = array(
    "name" => "Имя пользователя",
    "phone" => "Телефон",
    "text" => "Комментарий"
  );

  // отправка в телеграм
  function send_to_private_bot($names)
  {
    $token = "6334142224:AAE8WigRiLE8HR2LgyJRHK5a-gebU27sbA4";
    $chat_id = "-1002134499339";

    $message = "";
    foreach ($_POST as $key => $value) {
      if ($value != "" && $key != "phone") {
        $message .= "<b>" . (isset($names[$key]) ? $names[$key] : $key) . "</b>: " . $value . "%0A";
      } else if ($key == "phone") {
        $message .= "<b>Телефон</b>: " . "<a href=\"tel:+" . preg_replace('/[^0-9]/', '', $value) . "\">" . "+" . preg_replace('/[^0-9]/', '', $value) . "</a>" . "%0A";
      }
    }

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}", "r");

    if (!$sendToTelegram) {
      $json = [
        "status" => "error",
      ];
      print_r(json_encode($json));
      die();
    }
  }


  // запись в файл
  function write_to_file($names)
  {
    $data = "";
    foreach ($_POST as $key => $value) {
      if ($value != "" && $key != "action" && $key != "phone") {
        $data .= (isset($names[$key]) ? $names[$key] : $key) . ": " . $value . PHP_EOL;
      } else if ($key == "phone") {
        $data .= (isset($names[$key]) ? $names[$key] : "Телефон") . ": +" . preg_replace("/[^0-9]/", "", $value) . PHP_EOL;
      }
    }
    $data .= "Дата: " . date(DATE_RFC822) . PHP_EOL;

    $new_text = "";
    $new_text .= $data . PHP_EOL . "________________________________________________" . PHP_EOL . PHP_EOL . file_get_contents("order_backup.txt");
    file_put_contents("order_backup.txt", $new_text);
  }


  write_to_file($names);
  send_to_private_bot($names);

  $json = [
    "status" => "done",
  ];

  print_r(json_encode($json));

  die();
}
