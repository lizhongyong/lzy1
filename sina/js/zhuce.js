$(function(){
	
	function yanZhengMa(){
		var yzm = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
		var ind1 = parseInt(Math.random() * 62);
		var ind2 = parseInt(Math.random() * 62);
		var ind3 = parseInt(Math.random() * 62);
		var ind4 = parseInt(Math.random() * 62);
		var s1 = yzm.charAt(ind1);
		var s2 = yzm.charAt(ind2);
		var s3 = yzm.charAt(ind3);
		var s4 = yzm.charAt(ind4);
		$("#yanZhengMa").html(s1+s2+s3+s4);		
	}
	
	yanZhengMa();
	
	$(".a-right").click(function(){
		yanZhengMa();
	})
	
	$(".div2").hover(function(){
			$(".div2").css("background-color","gray");
			$(".div2 a").css("color","white");
		},function(){
			$(".div2").css("background-color","white");
			$(".div2 a").css("color","black");
		})
	
	$(".div1").click(function(){
		$(".hr2").css("display","none");
		$(".hr4").css("display","block");
		$(".div1").css("background-color","white");
		$(".div1 a").css("color","black");
		$(".tab-youXiang").css("display","none");
		$(".tab-shouJi").css("display","block");
		
		$(".div2").hover(function(){
			$(".div2").css("background-color","gray");
			$(".div2 a").css("color","white");
		},function(){
			$(".div2").css("background-color","white");
			$(".div2 a").css("color","black");
		})
		
		$(".div1").hover(function(){
			$(".div1").css("background-color","white");
			$(".div1 a").css("color","black");
		},function(){
			$(".div1").css("background-color","white");
			$(".div1 a").css("color","black");
		})
	})
	
	$(".div2").click(function(){
		$(".hr2").css("display","block");
		$(".hr4").css("display","none");
		$(".div2").css("background-color","white");
		$(".div2 a").css("color","black");
		$(".tab-shouJi").css("display","none");
		$(".tab-youXiang").css("display","block");
		
		$(".div1").hover(function(){
			$(".div1").css("background-color","gray");
			$(".div1 a").css("color","white");
		},function(){
			$(".div1").css("background-color","white");
			$(".div1 a").css("color","black");
		})
		
		$(".div2").hover(function(){
			$(".div2").css("background-color","white");
			$(".div2 a").css("color","black");
		},function(){
			$(".div2").css("background-color","white");
			$(".div2 a").css("color","black");
		})
	})
})