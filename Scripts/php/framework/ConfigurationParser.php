<pre>
<?php
// class ConfigurationParser
// {
// 	private $map;
// 	private $file_data;
// 	public function refresh()
// 	{
// 		$this->map = array();
// 		echo($this->file_data . "\n");
// 		$lines = explode("\n", $this->file_data);
// 		foreach($lines as $line)
// 		{
// 			$line = explode("#", $line);
// 			echo($line . "\n");
// 			if(count($line) > 1)
// 			{
// 				$line = $line[0];
// 				$parts = explode(":", $line);
// 				echo("[" . $parts[0] . "]=>[" . $parts[1] . "]\n");
// 				array_push($this->map, urldecode($parts[0]), urldecode($parts[1]));
// 			}
// 		}
// 	}
// 	public function flush()
// 	{
// 		$fdata = "";
// 		foreach ($this->map as $key => $value)
// 		{
// 			$fdata = $fdata . $key . ":" . $value . "\n";
// 		}
// 		$this->file_data = $fdata;
// 		return $this->file_data;
// 	}
// 	public function put($key, $value)
// 	{
// 		$this->map[$key] = $value;
// 	}
// 	public function get($key)
// 	{
// 		return $this->map[$key];
// 	}
// 	public function setFile($data)
// 	{
// 		$this->file_data = $data;
// 	}
// 	public function getFile()
// 	{
// 		return $this->file_data;
// 	}
// }
?>
<?php
// $cfg = new ConfigurationParser();
// $cfg->setFile("hello:hi\n#hi!\nWhee:WHEEHOWWWW");
// $cfg->refresh();
// echo($cfg->get("hello") . "\n");
// echo($cfg->get("Whee") . "\n");
?>
</pre>