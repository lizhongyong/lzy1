$(function(){
	$("#gd").hover(function(){
		$(".gengduo,.glyphicon-triangle-bottom").css("display", "block");
	},function(){
		$(".gengduo,.glyphicon-triangle-bottom").css("display", "none");
	})
	
	$(".glyphicon-remove").click(function(){
		$("#dengluzhuce").css("display", "none");
	})
	
	$(".glyphicon-user").click(function(){
		$("#dengluzhuce").css("display", "block");
	})
	
	var b = true;
	$(".glyphicon-search").click(function(){
		if(b){
			$(".dao1").animate({
			"width": "480px"
			},1000);
			
			b = false;
			
//			$("*:not(.glyphicon-search)").click(function(){
//				$(".dao1").animate({
//				"width": "300px"
//				},1000);
//			
//				b = true;
//			})	
			
		}else{
			$(".dao1").animate({
			"width": "300px"
			},1000);
			
			b = true;
		}	
	
	})
	
	
	
	
	
	$(".danmu-fasong").click(function(){
		var str = $(".danmu input").val();
		$(".div-danmu").append("<span>"+str+"</span>");
		$(".danmu input").val("");
	})	
	
			
	var time = setInterval(yiDong,100);
	function yiDong(){ 
		$(".div-danmu span").animate({
			"right": "900px"
		},5000);
	}
	
	var danmuk = true;
	$(".danmu-kaiguan").click(function(){
		if(danmuk){
			$(".div-danmu").css("z-index","-1");
			$(".danmu-kaiguan").css("color","red");
			danmuk = false;
		}else{
			$(".div-danmu").css("z-index","2");
			$(".danmu-kaiguan").css("color","white");
			danmuk = true;
		}
		
	})
	
	
	
	
	
	
	$(".img-weibo").hover(function(){
		$(".div5-wb").css("display","block");
	},function(){
		$(".div5-wb").css("display","none");
	})
	
	$(".img-weixin").hover(function(){
		$(".div6-wx").css("display","block");
	},function(){
		$(".div6-wx").css("display","none");
	})
	
})