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
	
	
	
	
})