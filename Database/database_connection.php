<?php
$db_address = "";
$db_user = "";
$db_pass = "";
$database = new mysqli($db_address, $db_user, $db_pass);
if(con->connect_error)
{
	die("[ERR0] -> Error! Unable to connect to MySQL Database!");
}
?>