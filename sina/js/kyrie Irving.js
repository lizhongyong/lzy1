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
	
	
	
	
	$(".glyphicon-chevron-up").click(function(){
		$(".ki-xinxi").animate({
			"height": "40px"
			},2000);
		$(".glyphicon-chevron-up").css("display","none");
		$(".glyphicon-chevron-down").css("display","block");
	})
	
	$(".glyphicon-chevron-down").click(function(){
		$(".ki-xinxi").animate({
			"height": "480px"
			},2000);
		$(".glyphicon-chevron-down").css("display","none");
		$(".glyphicon-chevron-up").css("display","block");
	})
	
	
	$(".qt-1").hover(function(){
		$(".qt-1 .qt-img").css("display", "block");
	},function(){
		$(".qt-1 .qt-img").css("display", "none");
	})
	
	$(".qt-2").hover(function(){
		$(".qt-2 .qt-img").css("display", "block");
	},function(){
		$(".qt-2 .qt-img").css("display", "none");
	})
	
	$(".qt-3").hover(function(){
		$(".qt-3 .qt-img").css("display", "block");
	},function(){
		$(".qt-3 .qt-img").css("display", "none");
	})
	
	$(".qt-4").hover(function(){
		$(".qt-4 .qt-img").css("display", "block");
	},function(){
		$(".qt-4 .qt-img").css("display", "none");
	})
	
	$(".qt-5").hover(function(){
		$(".qt-5 .qt-img").css("display", "block");
	},function(){
		$(".qt-5 .qt-img").css("display", "none");
	})
	
})