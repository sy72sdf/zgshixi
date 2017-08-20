$(function(){

    $('#ceshigundong').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
    $('#ceshigundong').mouseover(function () {
        $('#ceshigundong').css("cursor","pointer");
    })
	var tanchu = setTimeout(function(){
		$(".tanchu").show(0);
		clearTimeout(tanchu);
	},5000);
	
	$("#closetanchu").click(function(){
		$(".tanchu").hide(0,function(){
			var tanchu2 = setInterval(function(){
				$(".tanchu").show(0);
				clearInterval(tanchu2);
			},20000)
		});
	})
	
	for(var i=0;i<$("#ul").children().length;i++){
		$('#ul').children().children().eq(i).mouseover(function(){
			$(this).css("color","red");
			$(this).parent().css("border-color","red");
			$(this).parent().css("background","url(img/img-yancao/dian2.jpg) no-repeat 0 24px")
		});
		$('#ul').children().children().eq(i).mouseout(function(){
			$(this).css("color","#333333");
			$(this).parent().css("border-color","#FFFFFF");
			$(this).parent().css("background","url(img/img-yancao/dian1.jpg) no-repeat 0 24px")
		});
	}
	
	$("#close").mouseover(function(){
		$(this).css("cursor","pointer");
	});
	$("#open").mouseover(function(){
		$(this).css("cursor","pointer");
	});
	$("#close").click(function(){
		$(".cebianlan2").fadeOut(500,function(){
			$(".cebianlan1").fadeIn(500);
		});
	});
	$("#open").click(function(){
		$(".cebianlan1").fadeOut(500,function(){
			$(".cebianlan2").fadeIn(500);
		});
	})
	
})
