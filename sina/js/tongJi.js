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
	
	$(".px-qiuY div").hover(function(){
			$(".px-qiuY div").css("background-color","red");
		},function(){
			$(".px-qiuY div").css("background-color","gray");
		})
	$(".px-qiuY div").click(function(){
		$(".px-qiuY div").css("background-color","rgba(197,31,114,1)");
		$(".px-qiuD div").css("background-color","gray");
		$(".shuJu").css("display","block");
		$(".shuJu2").css("display","none");
		
		$(".px-qiuD div").hover(function(){
			$(".px-qiuD div").css("background-color","red");
		},function(){
			$(".px-qiuD div").css("background-color","gray");
		})
		
		$(".px-qiuY div").hover(function(){
			$(".px-qiuY div").css("background-color","rgba(197,31,114,1)");
		},function(){
			$(".px-qiuY div").css("background-color","rgba(197,31,114,1)");
		})
	})
	
	$(".px-qiuD div").click(function(){
		$(".px-qiuD div").css("background-color","rgba(197,31,114,1)");
		$(".px-qiuY div").css("background-color","gray");
		$(".shuJu2").css("display","block");
		$(".shuJu").css("display","none");
		
		$(".px-qiuY div").hover(function(){
			$(".px-qiuY div").css("background-color","red");
		},function(){
			$(".px-qiuY div").css("background-color","gray");
		})
		
		$(".px-qiuD div").hover(function(){
			$(".px-qiuD div").css("background-color","rgba(197,31,114,1)");
		},function(){
			$(".px-qiuD div").css("background-color","rgba(197,31,114,1)");
		})
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