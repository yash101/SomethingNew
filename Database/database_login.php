//Function from StackOverflow
//http://stackoverflow.com/questions/7548667/xor-encryption-in-php
//Primarily will be used to encrypt the database authentication
//username and password
function xor_encode($msg, $key)
{
	if(empty($key)) return $msg;
	return $msg ^ str_pad('', strlen($msg), $key);
}

