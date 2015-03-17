$(document).ready(function()
{
	document.querySelectorAll("#topnav #login")[0].onclick = function()
	{
		ajax.get("/snippets/login.html", function(x)
		{
			document.querySelectorAll("#page")[0].innerHTML = x;
			document.querySelectorAll("#page #LoginPageMain #overlay")[0].onclick = function()
			{
				document.querySelectorAll("#page")[0].innerHTML = "";
			};
		});
	};
});