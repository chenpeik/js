


(function(){
	var tops = [];
	var isScroll = true;
	// 菜单滚动
	var top = 0;
	for(var i=0,len=$("#menu .detail-food").length;i<len;i++){
		tops.push(top);
		top+=$("#menu .detail-food").eq(i).height();
	}
	$("#menu").bind('scroll',function(){
		// console.log(isScroll);
		var currentIndex = tops.findIndex(function(top,index){
			var curScrolTop = $("#menu").scrollTop();
			return  curScrolTop>= top && curScrolTop < tops[index + 1];
		});
		if(currentIndex==-1){
			currentIndex = $(".dish-menu > li").length;
		}
		if(isScroll==true){
			$(".dish-menu > li").eq(currentIndex).addClass("menu-current").siblings().removeClass("menu-current");
		}else{
			isScroll = true;
		}
	});
	//菜单点击
	$(".dish-menu > li").click(function(){
		isScroll = false;
		$("#menu").scrollTop(tops[$(this).index()]);
		$(this).addClass("menu-current").siblings().removeClass("menu-current");
	});
})();