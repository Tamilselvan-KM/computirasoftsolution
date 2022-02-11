<?php

$con = mysqli_connect("localhost", "u335778372_usermessages", "j5E]^$qro", "u335778372_userinfo");

if(!$con){
    echo die($con)."error";
}

if(isset($_POST['send'])){
    $name = $_POST['username'];
    $email = $_POST['useremail'];
    $pnum = $_POST['usermobile'];
    $usermessage = $_POST['usermessage'];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $cemail = $email;
     }
     else{
        echo("<script>
        alert('$email is not  a valid email address');
        </script>
        ");
     }
    $sql = "INSERT INTO  usermessages (username, useremail, usermobile, usermessage) VALUES('$name', '$cemail', '$pnum', '$usermessage')";
    $result = mysqli_query($con, $sql);

    if($result){
       // echo 'insert success';
	        echo "<script>
                alert('THANK YOU FOR VISITING US!!!');
                location.href= './contact.html';
              </script>
        ";
    }else{
        echo 'error'.mysqli_error($con);
    }
    $recevier="$email";
    $subject="Thanks for  giving your info";
    $message="Hi,". "\r\n" . "\r\n" .
    "Hi, there..." ."\r\n"."\r\n".
    "Thanks & Regards,". "\r\n" .
    "Web Admin"."\r\n" ;

    $headers ="From:companyhost345@gmail.com\n";
    $headers.="MIME-Version: 1.0\n";
    $headers.="Content-type: text/html; charset=iso 8859-1";
    if(mail($recevier, $subject, $message,$headers))
    {
        echo "Your Message has been sent." ;
    } else {
        echo "not send";
    }
}
?>