$(document).ready(function()
{
	document.querySelectorAll("#topnav #login")[0].onclick = function()
	{
		AuthenticationPage.login();
	};
});

var AuthenticationPage =
{
	login:function()
	{
		ajax.get("snippets/login.html", function(x)
		{
			document.querySelectorAll("#page")[0].innerHTML = x;
			document.querySelectorAll("#page #LoginPageMain #overlay")[0].onclick = function()
			{
				document.querySelectorAll("#page")[0].innerHTML = "";
			};
			document.querySelectorAll("#page #LoginPageMain #RegisterButton")[0].onclick = function()
			{
				AuthenticationPage.register();
			};
		});
	},
	register:function()
	{
		ajax.get("snippets/register.html", function(x)
		{
			document.querySelectorAll("#page")[0].innerHTML = x;
			document.querySelectorAll("#page #LoginPageMain #overlay")[0].onclick = function()
			{
				document.querySelectorAll("#page")[0].innerHTML = "";
			};
		});
	}
};