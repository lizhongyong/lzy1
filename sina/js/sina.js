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
	
	$(".daoh2 .daoh21 ul .l2 a:not(.glyphicon-search)").hover(function(){
		$(".daoh2 .daoh21 ul .l2 a:not(.glyphicon-search)").not($(this)).css("color","gray");
	},function(){
		$(".daoh2 .daoh21 ul .l2 a:not(.glyphicon-search)").css("color","white");
	})
	
	$(".bd .bd-left ul li a:not(.fon-big)").hover(function(){
		$(this).css("color","red");
	},function(){
		$(this).css("color","black");
	})
	
//	function getDaoHang2(){
//		var index = $("html").scrollTop();
//		if(index > 0){
//			
//			$(".daoh2").css("position","fixed");
//			$(".daoh2").css("top","0px");
//		}
//	}
//	var time = setInterval(getDaoHang2,2000);
	
})
