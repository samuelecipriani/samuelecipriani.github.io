<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h3>
	<?php

	

$dir = realpath(dirname(__FILE__).'').'/images/';
   
if(!empty($_FILES)){
  
    foreach ($_FILES as $file){
        
        $fileName = basename($file['name']);
        if(is_uploaded_file($file['tmp_name']) && $file['error'] === UPLOAD_ERR_OK){
            $res = move_uploaded_file($file['tmp_name'], $dir.$fileName);
            if($res){
                echo "File $fileName caricato correttamente<br>
                		in $dir<br>";
            } else {
                   echo "File $fileName non è caricato correttamente<br>
                		in $dir<br>";
            }
        }
    }
}
?>


	?>
</h2>
<script>
	setTimeout(function(){ window.history.back(); }, 3000);
</script>
</body>
</html>