$(function(){
	var p = 630;
	var p1 = -630;
	
	var time = setInterval(hello,1000);
	$(".f").hover(function(){
		clearInterval(time);
	},function(){
		time = setInterval(hello,1000);
	});
	
	$(".left").click(function(){
//		alert(1);
		helloo();
	});
	$(".right").click(function(){
		hello();
	});

	$(".li1").hover(function(){
		$(".c1").css("left", "630px");
		$(".c2").css("left", "1260px");
		$(".c3").css("left", "1890px");
		$(".c4").css("left", "-1890px");
		$(".c5").css("left", "-1260px");
		$(".c6").css("left", "-630px");
		$(".c7").css("left", "0px");
		$(".c7").css("display", "block");
		$(".li1").css("background-color", "red");
		$(".yuan li:not(.li1)").css("background-color", "rgb(187,187,187)");
	});
	$(".li2").hover(function(){
		$(".c1").css("left", "0px");
		$(".c1").css("display", "block");
		$(".c2").css("left", "630px");
		$(".c3").css("left", "1260px");
		$(".c4").css("left", "1890px");
		$(".c5").css("left", "-1890px");
		$(".c6").css("left", "-1260px");
		$(".c7").css("left", "-630px");
		$(".li2").css("background-color", "red");
		$(".yuan li:not(.li2)").css("background-color", "rgb(187,187,187)");
	});
	$(".li3").hover(function(){
		$(".c1").css("left", "-630px");
		$(".c2").css("left", "0px");
		$(".c2").css("display", "block");
		$(".c3").css("left", "630px");
		$(".c4").css("left", "1260px");
		$(".c5").css("left", "1890px");
		$(".c6").css("left", "-1890px");
		$(".c7").css("left", "-1260px");
		$(".li3").css("background-color", "red");
		$(".yuan li:not(.li3)").css("background-color", "rgb(187,187,187)");
	});
	$(".li4").hover(function(){
		$(".c1").css("left", "-1260px");
		$(".c2").css("left", "-630px");
		$(".c3").css("left", "0px");
		$(".c3").css("display", "block");
		$(".c4").css("left", "630px");
		$(".c5").css("left", "1260px");
		$(".c6").css("left", "1890px");
		$(".c7").css("left", "-1890px");
		$(".li4").css("background-color", "red");
		$(".yuan li:not(.li4)").css("background-color", "rgb(187,187,187)");
	});
	//百度的只写了5行代码
	$(".li5").hover(function(){
		$(".c1").css("left", "-1890px");
		$(".c2").css("left", "-1260px");
		$(".c3").css("left", "-630px");
		$(".c4").css("left", "0px");
		$(".c4").css("display", "block");
		$(".c5").css("left", "630px");
		$(".c6").css("left", "1260px");
		$(".c7").css("left", "1890px");
		$(".li5").css("background-color", "red");
		$(".yuan li:not(.li5)").css("background-color", "rgb(187,187,187)");
	});
	$(".li6").hover(function(){
		$(".c1").css("left", "1890px");
		$(".c2").css("left", "-1890px");
		$(".c3").css("left", "-1260px");
		$(".c4").css("left", "-630px");
		$(".c5").css("left", "0px");
		$(".c5").css("display", "block");
		$(".c6").css("left", "630px");
		$(".c7").css("left", "1260px");
		$(".li6").css("background-color", "red");
		$(".yuan li:not(.li6)").css("background-color", "rgb(187,187,187)");
	});
	$(".li7").hover(function(){
		$(".c1").css("left", "1260px");
		$(".c2").css("left", "1890px");
		$(".c3").css("left", "-1890px");
		$(".c4").css("left", "-1260px");
		$(".c5").css("left", "-630px");
		$(".c6").css("left", "0px");
		$(".c6").css("display", "block");
		$(".c7").css("left", "630px");
		$(".li7").css("background-color", "red");
		$(".yuan li:not(.li7)").css("background-color", "rgb(187,187,187)");
	});
	function hello(){
		var le1 = parseInt($(".c1").css("left"));
		var le2 = parseInt($(".c2").css("left"));
		var le3 = parseInt($(".c3").css("left"));
		var le4 = parseInt($(".c4").css("left"));
		var le5 = parseInt($(".c5").css("left"));
		var le6 = parseInt($(".c6").css("left"));
		var le7 = parseInt($(".c7").css("left"));
		if(le1==1890){
			$(".c1").css("display", "none");
			$(".li4").css("background-color", "red");
			$(".yuan li:not(.li4)").css("background-color", "rgb(187,187,187)");
			$(".c1").animate({
			"left": "-1890px"
		});
		}else{
			$(".c1").css("display", "block");
			$(".c1").animate({
			"left": (le1+p)+"px"
		});
		}
		
		if(le2==1890){
			$(".li5").css("background-color", "red");
			$(".yuan li:not(.li5)").css("background-color", "rgb(187,187,187)");
			$(".c2").css("display", "none");
			$(".c2").animate({
			"left": "-1890px"
		});
		}else{
			$(".c2").css("display", "block");
			$(".c2").animate({
			"left": (le2+p)+"px"
		});
		}
		
		if(le3==1890){
			$(".li6").css("background-color", "red");
			$(".yuan li:not(.li6)").css("background-color", "rgb(187,187,187)");
			$(".c3").css("display", "none");
			$(".c3").animate({
			"left": "-1890px"
		});
		}else{
			$(".c3").css("display", "block");
			$(".c3").animate({
			"left": (le3+p)+"px"
		});
		}
		
		if(le4==1890){
			$(".li7").css("background-color", "red");
			$(".yuan li:not(.li7)").css("background-color", "rgb(187,187,187)");
			$(".c4").css("display", "none");
			$(".c4").animate({
			"left": "-1890px"
		});
		}else{
			$(".c4").css("display", "block");
			$(".c4").animate({
			"left": (le4+p)+"px"
		});
		}
		
		if(le5==1890){
			$(".li1").css("background-color", "red");
			$(".yuan li:not(.li1)").css("background-color", "rgb(187,187,187)");
			$(".c5").css("display", "none");
			$(".c5").animate({
			"left": "-1890px"
		});
		}else{
			$(".c5").css("display", "block");
			$(".c5").animate({
			"left": (le5+p)+"px"
		});
		}
		
		if(le6==1890){
			$(".li2").css("background-color", "red");
			$(".yuan li:not(.li2)").css("background-color", "rgb(187,187,187)");
			$(".c6").css("display", "none");
			$(".c6").animate({
			"left": "-1890px"
		});
		}else{
			$(".c6").css("display", "block");
			$(".c6").animate({
			"left": (le6+p)+"px"
		});
		}
		
		if(le7==1890){	
			$(".li3").css("background-color", "red");
			$(".yuan li:not(.li3)").css("background-color", "rgb(187,187,187)");
			$(".c7").css("display", "none");
			$(".c7").animate({
			"left": "-1890px"
		});
		}else{
			$(".c7").css("display", "block");
			$(".c7").animate({
			"left": (le7+p)+"px"
		});
		}
	};
	
	function helloo(){
		var le1 = parseInt($(".c1").css("left"));
		var le2 = parseInt($(".c2").css("left"));
		var le3 = parseInt($(".c3").css("left"));
		var le4 = parseInt($(".c4").css("left"));
		var le5 = parseInt($(".c5").css("left"));
		var le6 = parseInt($(".c6").css("left"));
		var le7 = parseInt($(".c7").css("left"));
		if(le1==-1890){
			$(".li4").css("background-color", "red");
			$(".yuan li:not(.li4)").css("background-color", "rgb(187,187,187)");
			$(".c1").css("display", "none");
			$(".c1").animate({
			"left": "1890px"
		});
		}else{
			$(".c1").css("display", "block");
			$(".c1").animate({
			"left": (le1+p1)+"px"
		});
		}
		
		if(le2==-1890){
			$(".li5").css("background-color", "red");
			$(".yuan li:not(.li5)").css("background-color", "rgb(187,187,187)");
			$(".c2").css("display", "none");
			$(".c2").animate({
			"left": "1890px"
		});
		}else{
			$(".c2").css("display", "block");
			$(".c2").animate({
			"left": (le2+p1)+"px"
		});
		}
		
		if(le3==-1890){
			$(".li6").css("background-color", "red");
			$(".yuan li:not(.li6)").css("background-color", "rgb(187,187,187)");
			$(".c3").css("display", "none");
			$(".c3").animate({
			"left": "1890px"
		});
		}else{
			$(".c3").css("display", "block");
			$(".c3").animate({
			"left": (le3+p1)+"px"
		});
		}
		
		if(le4==-1890){
			$(".li7").css("background-color", "red");
			$(".yuan li:not(.li7)").css("background-color", "rgb(187,187,187)");
			$(".c4").css("display", "none");
			$(".c4").animate({
			"left": "1890px"
		});
		}else{
			$(".c4").css("display", "block");
			$(".c4").animate({
			"left": (le4+p1)+"px"
		});
		}
		
		if(le5==-1890){
			$(".li1").css("background-color", "red");
			$(".yuan li:not(.li1)").css("background-color", "rgb(187,187,187)");
			$(".c5").css("display", "none");
			$(".c5").animate({
			"left": "1890px"
		});
		}else{
			$(".c5").css("display", "block");
			$(".c5").animate({
			"left": (le5+p1)+"px"
		});
		}
		
		if(le6==-1890){
			$(".li2").css("background-color", "red");
			$(".yuan li:not(.li2)").css("background-color", "rgb(187,187,187)");
			$(".c6").css("display", "none");
			$(".c6").animate({
			"left": "1890px"
		});
		}else{
			$(".c6").css("display", "block");
			$(".c6").animate({
			"left": (le6+p1)+"px"
		});
		}
		
		if(le7==-1890){	
			$(".li3").css("background-color", "red");
			$(".yuan li:not(.li3)").css("background-color", "rgb(187,187,187)");
			$(".c7").css("display", "none");
			$(".c7").animate({
			"left": "1890px"
		});
		}else{
			$(".c7").css("display", "block");
			$(".c7").animate({
			"left": (le7+p1)+"px"
		});
		}
	};
})
