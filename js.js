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
function jgProtsent()
{
	var jgProtsent=0;
	var theForm = document.forms["calcform"];
	var jgMaa = theForm.elements["Jgmaa"];
	if(jgMaa.checked==true)
	{
		jgProtsent=6;
	}
	return jgProtsent;
}
function jvProtsent()
{
	var jvProtsent=0;
	var theForm = document.forms["calcform"];
	var jvMaa = theForm.elements["Jvmaa"];
	if(jvMaa.checked==true)
	{
		jvProtsent=6;
	}
	return jvProtsent;
}
function lvProtsent()
{
	var lvProtsent=0;
	var theForm = document.forms["calcform"];
	var lvMaa = theForm.elements["LVmaa"];
	if(lvMaa.checked==true)
	{
		lvProtsent=8;
	}
	return lvProtsent;
}
function lProtsent(){
	var lProtsent=0;
	var theForm = document.forms["calcform"];
	var lMaa = theForm.elements["Lmaa"];
	if(lMaa.checked==true)
	{lProtsent=5;}
	return lProtsent;
}
function pProtsent(){
	var pProtsent=0;
	var theForm = document.forms["calcform"];
	var pMaa = theForm.elements["Pmaa"];
	if(pMaa.checked==true)
	{pProtsent=5;}
	return pProtsent;
}
function puProtsent(){
	var puProtsent=0;
	var theForm = document.forms["calcform"];
	var puMaa = theForm.elements["Pumaa"];
	if(puMaa.checked==true)
	{puProtsent=11;}
	return puProtsent;
}
function rProtsent(){
	var rProtsent=0;
	var theForm = document.forms["calcform"];
	var rMaa = theForm.elements["Rmaa"];
	if(rMaa.checked==true)
	{rProtsent=7;}
	return rProtsent;
}
function sProtsent(){
	var sProtsent=0;
	var theForm = document.forms["calcform"];
	var sMaa = theForm.elements["Smaa"];
	if(sMaa.checked==true)
	{sProtsent=7;}
	return sProtsent;
}
function tProtsent(){
	var tProtsent=0;
	var theForm = document.forms["calcform"];
	var tMaa = theForm.elements["Tmaa"];
	if(tMaa.checked==true)
	{tProtsent=7;}
	return tProtsent;
}
function vaProtsent(){
	var vaProtsent=0;
	var theForm = document.forms["calcform"];
	var vaMaa = theForm.elements["Vamaa"];
	if(vaMaa.checked==true)
	{vaProtsent=5;}
	return vaProtsent;
}
function viProtsent(){
	var viProtsent=0;
	var theForm = document.forms["calcform"];
	var viMaa = theForm.elements["Vimaa"];
	if(viMaa.checked==true)
	{viProtsent=8;}
	return viProtsent;
}
function vuProtsent(){
	var vuProtsent=0;
	var theForm = document.forms["calcform"];
	var vuMaa = theForm.elements["Vumaa"];
	if(vuMaa.checked==true)
	{vuProtsent=5;}
	return vuProtsent;
}
	
	
function calculateTotal()
{
	var totalProtsent = 0;
	var notVisited = 100;
	var totalProtsent = harjuProtsent()+ hiiuProtsent()+ idavProtsent()+ jgProtsent()+ jvProtsent()+ lvProtsent()+ lProtsent()+ pProtsent()+ puProtsent()+ rProtsent()+ sProtsent()+ tProtsent()+ vaProtsent()+ viProtsent()+ vuProtsent();
	var notVisited = 100-totalProtsent;
	//document.getElementById("totalPrice").innerHTML = "Oled külastanud kogu Eestist "+totalProtsent+" protsenti!";

	var divobj = document.getElementById('total');
   		divobj.style.display='block';
    	divobj.innerHTML = "Oled viibinud kogu Eestist "+totalProtsent+" protsenti! Avastamata ala on veel "+notVisited+" protsenti";
}
    	

function hideTotal()
{
    var divobj = document.getElementById('total');
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
*/