<?php
$database = new mysqli($db_address, $db_username, $db_password);
if($database->connect_error)
{
	die("[ERR0] -> Error! Unable to connect to MySQL Database!");
}
?>