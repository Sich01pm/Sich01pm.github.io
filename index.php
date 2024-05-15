<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<meta http-equiv="content-type" content="text/html; charset=windows-1251" />
    <link href="reset.css" rel="stylesheet" type="text/css" />
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link href="trackbar/trackbar.css" rel="stylesheet" type="text/css" />
   <script type="text/javascript" src="js/jquery-1.8.2.min.js"></script> 
    <script type="text/javascript" src="js/jcarousellite_1.0.1.js"></script> 
    <script type="text/javascript" src="js/shop-script.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.min.js"></script>
    <script type="text/javascript" src="trackbar/jquery.trackbar.js"></script>
    <script type="text/javascript" src="js/TextChange.js"></script>
    
	<title>Интернет-Магазин Цифровой Техники</title>
</head>
<body>
<div id="block-body">

<?php	
    include("include/block-header.php");    
?>

<div id="block-right">
<?php	
        include("include/block-category.php");  
        include("include/block-parameter.php");  
        include("include/block-news.php"); 
?>
</div>
<?php
        include("include/block-content.php");
        ?>

 <?php
	include("include/block-footer.php");
?>
</div>

</body>
</html>