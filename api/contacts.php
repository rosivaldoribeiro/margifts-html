<?php
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "user_app"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];

// $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
//$input = json_decode(file_get_contents('php://input'),true);


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

if (isset($_REQUEST['id'])) {
  $id = (int)$_REQUEST['id'];
}

switch ($method) {
      case 'GET':
         $sql = "select * from contacts".($id?" where id=$id":''); 
      break;

    case 'POST':

      switch ($_POST['action']) {

        case 'create':
          $name = mysqli_real_escape_string($con, $_POST["name"]);
          $email = mysqli_real_escape_string($con, $_POST["email"]);
          $country = mysqli_real_escape_string($con, $_POST["country"]);
          $city = mysqli_real_escape_string($con, $_POST["city"]);
          $job = mysqli_real_escape_string($con, $_POST["job"]);
    
          $sql = "insert into contacts (name, email, city, country, job) values ('$name', '$email', '$city', '$country', '$job')"; 
        break;

        case 'delete':
         $sql = "DELETE FROM contacts WHERE id = '$id';";
        break;

      }
      
      break;
}

// run SQL statement
$result = mysqli_query($con,$sql) or die(mysqli_error);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();