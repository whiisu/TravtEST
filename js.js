

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='main.html'>Esileht</a></li>" +
"<li><a href='quiz.html'>TravtEST</a></li>" +
"<li><a href='map.html'>Kaart</a></li>" +
"<li><a href='abi.html'>Abiks</a></li>" +
"<li><a href='login.html'>Logi sisse</a></li>" +
"<li><a href='register.html'>Registreeri</a></li>" +
"</ul>"; 

document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " Kaia Ernits. All rights reserved.</p>";

// protsendiarvutus checkboxidega

function harjuProtsent()
{
	var harjuProtsent=0;
	var theForm = document.forms["calcform"];
	var harjuMaa = theForm.elements["Harjumaa"];
	if(harjuMaa.checked==true)
	{
		harjuProtsent=10;
	}
	return harjuProtsent;
}
function hiiuProtsent()
{
	var hiiuProtsent=0;
	var theForm = document.forms["calcform"];
	var hiiuMaa = theForm.elements["Hiiumaa"];
	if(hiiuMaa.checked==true)
	{
		hiiuProtsent=2;
	}
	return hiiuProtsent;
}
function idavProtsent()
{
	var idavProtsent=0;
	var theForm = document.forms["calcform"];
	var idavMaa = theForm.elements["Ida-Virumaa"];
	if(idavMaa.checked==true)
	{
		idavProtsent=8;
	}
	return idavProtsent;
}
function jProtsent()
{
	var jProtsent=0;
	var theForm = document.forms["calcform"];
	var jMaa = theForm.elements["Jõgevamaa"];
	if(jMaa.checked==true)
	{
		jProtsent=6;
	}
	return jProtsent;
}

function calculateTotal()
{
	var totalProtsent = 0;
	var notVisited = 100;
	var totalProtsent = harjuProtsent()+ hiiuProtsent()+ idavProtsent();
	var notVisited = 100-totalProtsent;
	//document.getElementById("totalPrice").innerHTML = "Oled külastanud kogu Eestist "+totalProtsent+" protsenti!";

	var divobj = document.getElementById('totalPrice');
   		divobj.style.display='block';
    	divobj.innerHTML = "Oled viibinud kogu Eestist "+totalProtsent+" protsenti! Avastamata ala on veel "+notVisited+" protsenti";
}
    	

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}



/*
function calculateTotal(){
	var totalProtsent = 0;
	var notVisited = 100;
	var gn, elem;
	for (i=0; i<15; i++){
		gn = 'maa'+i;
		elem=document.getElementById(gn);
		if (elem.checked ==true) {
			sum += Number(elem.value);
		}
	}
	var totalProtsent = sum;	
	//var totalProtsent = harjuProtsent()+ hiiuProtsent()+ idavProtsent();
	var notVisited = 100-sum;
	//document.getElementById("totalPrice").innerHTML = "Oled külastanud kogu Eestist "+totalProtsent+" protsenti!";

	var divobj = document.getElementById('totalPrice');
   		divobj.style.display='block';
    	divobj.innerHTML = "Oled viibinud kogu Eestist "+totalProtsent+" %! Avastamata ala on veel "+notVisited+" %";
}