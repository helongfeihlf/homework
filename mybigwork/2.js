window.onload=function(){
	var box1=document.getElementsByClassName("box1")[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>180){
			box1.style.position="fixed"
		}else{
			box1.style.position="static"
		}
	}
}


//水杯放大
var smallcup=document.getElementById("smallcup");
var bigcup=document.getElementById("bigcup");
var slidercup=document.getElementById("slidercup");
var Bimgcup=document.getElementById("Bimgcup");
// var cupbox=document.getElementById("cupbox");
smallcup.onmouseover=function(){
	slidercup.style.display="block";
	bigcup.style.display="block";
}
smallcup.onmouseout=function(){
	slidercup.style.display="none";
	bigcup.style.display="none";
}



smallcup.onmousemove = function (ev) {
	var ev = ev || window.event;

	var oL = ev.clientX - smallcup.offsetLeft - slidercup.offsetWidth / 2-180;
	var oT = ev.clientY - smallcup.offsetTop - slidercup.offsetHeight / 2-210;

	var oMaxw = smallcup.offsetWidth - slidercup.offsetWidth;
	var oMaxh = smallcup.offsetHeight - slidercup.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	slidercup.style.left = oL + 'px';
	slidercup.style.top = oT + 'px';

	var scale = bigcup.offsetWidth / slidercup.offsetWidth;
	Bimgcup.style.left = -scale * oL + 'px'
	Bimgcup.style.top = -scale * oT + 'px'

}


// 选择商品个数////////////////////////////////////////////////////
var but1=document.getElementById("but1");
var but2=document.getElementById("but2");
var inputbuy=document.getElementById("inputbuy");
// var i=1;
but1.onclick=function(){
	if(inputbuy.value<=1){
		but1.style.cursor="not-allowed";
	}else{
		inputbuy.value--;
	}

}
but2.onclick=function(){
	if(inputbuy.value>=5){
		but2.style.cursor="not-allowed";
	}else{
		inputbuy.value++;
	}
}


but1.onmouseover=function(){
	if(inputbuy.value>=1){
		but1.style.cursor="pointer";
	}
}
but2.onmouseover=function(){
	if(inputbuy.value<=5){
		but2.style.cursor="pointer";
	}
}





//////////150ml/200ml///////////
var back150=document.getElementById("back150");
var back200=document.getElementById("back200");
var xxxml=document.getElementById("xxxml");
var img150=document.getElementById("img150");
var img200=document.getElementById("img200");

back150.onclick=function(){
	back150.style.border="1px solid red";
	img150.style.display="block";	
	back200.style.border="0";
	img200.style.display="none";
	xxxml.innerHTML="150ml";
}
back200.onclick=function(){
	back200.style.border="1px solid red";
	img200.style.display="block";	
	back150.style.border="0";
	img150.style.display="none";
	xxxml.innerHTML="200ml";
}



//////////////加入購物車///////////////////////////
var biggray=document.getElementById("biggray");
var smallwindow=document.getElementById("smallwindow");
var cha=document.getElementById("cha");
var joinCart=document.getElementById("joinCart");
var buynow=document.getElementById("buynow");

joinCart.onclick=function(){
	biggray.style.display="block";
	smallwindow.style.display="block";
}

cha.onclick=function(){
	biggray.style.display="none";
	smallwindow.style.display="none";
}

buynow.onclick=function(){
	biggray.style.display="none";
	smallwindow.style.display="none";
}



// 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
var leftimg=document.getElementById("leftimg");
var rightimg=document.getElementById("rightimg");
var ddd=document.getElementById("ddd");
var Bimgcup=document.getElementById("Bimgcup");

leftimg.onmouseover=function(){
	ddd.src="img/pp0.jpg";
	Bimgcup.src="img/pp0.jpg";
	leftimg.style.border="2px solid #ff9003";
	rightimg.style.border="0";
}

rightimg.onmouseover=function(){
	ddd.src="img/pp1.jpg";
	Bimgcup.src="img/pp1.jpg";
	rightimg.style.border="2px solid #ff9003";
	leftimg.style.border="0";
}



