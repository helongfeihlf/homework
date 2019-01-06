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

///////背景图轮播
var box = document.getElementById('ban');
var slider = document.getElementById('slider');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;

//轮播下一张的函数
function next(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index++;
	navChange();
	animate(slider,{left:-800*index},function(){
		if(index>6){
			slider.style.left="-800px";
			index=1;
		}
		isMoving=false;
	});
}
var timer=setInterval(next,2000);////////////
//鼠标划入清定时器
box.onmouseover = function(){ 
	animate(left,{opacity:60}) 
	animate(right,{opacity:60})
	clearInterval(timer)
}
//鼠标划出开定时器
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 2000);
}


function prev(){     /////???????
	if(isMoving){
		return;
	}
	isMoving=true;
	index--;
	navChange();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left="-4800px";
			index=6;
			// navChange();
		}
		isMoving=false;
	});
}
right.onclick=next;
left.onclick=prev;
//小按钮点击事件 
for(var i=0;i<oNavlist.length;i++){
	oNavlist[i].idx=i;
	oNavlist[i].onclick=function(){
		index=this.idx+1;
		navChange();
		animate(slider,{left:-800*index})
	}
}
//小按钮背景色切换
function navChange(){
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].className="";
	}
	if(index>6){
		oNavlist[0].className="active";
	}else if(index===0){
		oNavlist[5].className="active";
	}else{
		oNavlist[index-1].className="active";
	}
}

///////公告轮播
var boxbang = document.getElementById('boxbang');
var gonggao = document.getElementById('gonggao');
var index2 = 0;
var timer1;
var isMoving1 = false;

function next1(){
	if(isMoving1){
		return;
	}
	isMoving1 = true;
	index2++;
	animate2(gonggao,{top:-30*index2},function(){
		if(index2==13){
			gonggao.style.top = '0px';
			index2 = 0;
		}
		isMoving1 = false;
	});
}

		timer1 = setInterval(next1, 35);

//话费充值

var select=document.getElementById("select");
var follow=document.getElementById("follow");
select.onchange=function(){
	if(this.value!=30){
		follow.innerHTML="￥"+this.value;
	}
}
// select.onchange=function(){
// var value=select.value;
// 	if(value!=30){
// 		follow.innerHTML="￥"+value;
// 	}
// }


/////右侧悬浮
var first=document.getElementById("first");
var second=document.getElementById("second");
var third=document.getElementById("third");
var fourth=document.getElementById("fourth");

first.onmouseover=function(){
	first.style.right=0;
}
second.onmouseover=function(){
	second.style.right=0;
}
third.onmouseover=function(){
	third.style.right=0;
}
fourth.onmouseover=function(){
	fourth.style.right=0;
}
first.onmouseout=function(){
	first.style.right="-80px";
}
second.onmouseout=function(){
	second.style.right="-17px";
}
third.onmouseout=function(){
	third.style.right="-80px";
}
fourth.onmouseout=function(){
	fourth.style.right="-80px";
}













