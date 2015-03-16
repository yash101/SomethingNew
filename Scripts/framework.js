//This structure contains functions and primitives towards communicating with the web server through AJAX with JavaScript!
var ajax =
{
	timeout:4000,
	asynchronous:true,
	get:function(location, callback)
	{
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4)
			{
				callback(xhr.responseText);
			};
		}
		xhr.timeout = this.timeout;
		xhr.open("GET", location, this.asynchronous);
		xhr.send();
	},
	post:function(location, data, callback)
	{
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4)
			{
				callback(xhr.responseText);
			};
		};
		xhr.open("POST", location, this.asynchronous);
		xhr.timeout = this.timeout;
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}
};

//This class, below, is a Configuration Parser. It's role is to make possible web interface configuration!
var ConfigurationParser = function(data)
{
	this.file = data;
	this.refresh();
}

ConfigurationParser.prototype.setFile = function(data) { this.file = data; };
ConfigurationParser.prototype.getFile = function() { return data; };
ConfigurationParser.prototype.get = function(key) { return this.map.get(key); };
ConfigurationParser.prototype.set = function(key, value) { this.map.set(key, value); return value; };
ConfigurationParser.prototype.refresh = function()
{
	mp = new Map();
	var lines = this.file.split('\n');
	for(var i = 0; i < lines.length; i++)
	{
		lines[i] = lines[i].split('#')[0];
		lines[i].trim();
		var vals = lines[i].split('=');
		if(vals.length == 1)
		{
			mp.set(decodeURI(vals[0]), "");
		}
		else
		{
			mp.set(decodeURI(vals[0]), decodeURI(vals[1]));
		}
	}
	this.map = mp;
};

ConfigurationParser.prototype.flush = function()
{
	var f = "";
	this.map.forEach(function(value, key)
	{
		f += encodeURI(key) + "=" + encodeURI(value) + "\n";
	});
	this.file = f;
};

ConfigurationParser.prototype.getMap = function()
{
	return this.map;
};

$(document).ready(function()
{
});