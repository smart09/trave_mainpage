//搜索框交互
$(function(){
	$(".search-Tab li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	})
})

//导航条交互
$(function(){
	$(".nav-main li").hover(function(){
		$(this).addClass("lihover");
	},function(){
		$(this).removeClass("lihover");
	})
})

//焦点图轮播交互实现
$(function(){
	var timer=null;     //焦点图定时器
	var num=1;          //焦点图移动控制变量
	var size=$("#focus li").size();
	for(var i=0;i<size;i++){
		$("#focus-point").append("<span></span>");
	}
	$("#focus-point span").eq(0).addClass("active");
	$("#focus ul").css("width",size*$("#focus li")[0].offsetWidth);
	$("#focus-point span").click(function(){
		num=$(this).index();
		autoplay();
	});
	//开定时器
	timer=setInterval(autoplay,8000);
	function autoplay(){
		$("#focus ul").stop().animate({left:-num*$("#focus li")[0].offsetWidth},1000,function(){
			num++;
			if(num>=size){
				num=0;
			}
		})
		$("#focus-point span").removeClass("active");
		$("#focus-point span").eq(num).addClass("active");
	}
	$("#focus").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(autoplay,8000);
	})
})

//侧边栏导航交互
$(function(){
	$(".tab li span").hover(function(){
		$(this).addClass("cur");
	},function(){
		$(this).removeClass("cur")
	})
})

//精选推荐中间内容交互
$(function(){
	$(".hcon-mid li:first").addClass("cur");
	$(".hcon-mid li").mouseenter(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	})
})

//精选推荐右侧交互
$(function(){
	$(".hc-R-tit li").mouseenter(function(){
		var num=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".hc-R-item").eq(num).addClass("active").siblings().removeClass("active");
	})
})

//团购推荐交互
$(function(){
	$(".hot-tab li").mouseenter(function(){
		var num=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".hg-con-tab").eq(num).addClass("jswitch").siblings().removeClass("jswitch");
	})
})
//团购推荐滑过图片时放大
$(function(){
	$(".Photobox").hover(function(){		
		$(this).find("img").stop().animate({width:"300px",height:"177",top:"-20px",left:"-20px"},800)
	},function(){
		$(this).find("img").stop().animate({width:"280px",height:"157",top:"0px",left:"0px"},800)
	})
})

//论坛版块交互
$(function(){
	$(".hc-pic-L .picBox").hover(function(){
		$(this).find(".picBoxBg .picBoxHoverBg").stop().animate({width:"100%"});
	},function(){
		$(this).find(".picBoxBg .picBoxHoverBg").stop().animate({width:"0"});
	})
})
$(function(){
	$(".hc-pic-R li").hover(function(){
		$(this).find(".picBoxBg .picBoxHoverBg").stop().animate({width:"100%"});
	},function(){
		$(this).find(".picBoxBg .picBoxHoverBg").stop().animate({width:"0"});
	})
})

//美图赏析
$(function(){
	$(".meitu li:first").addClass("active");
	$(".meitu li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
})

