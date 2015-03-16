$(document).ready(function()
{
	document.querySelectorAll("#topnav #login")[0].onclick = function()
	{
		ajax.get("/snippets/login.html", function(x)
		{
			document.querySelectorAll("#topnav #login")[0].innerHTML = x;
		});
	};
});