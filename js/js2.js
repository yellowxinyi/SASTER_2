// 历史

// 8. 获取时间日期
function getNowDate() {
	var date = new Date();
	var year = date.getFullYear() // 年
	var month = date.getMonth() + 1; // 月
	var day = date.getDate(); // 日
	var weekArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	var week = weekArr[date.getDay()];

	const time = year + "年" + month + "月" + day + "日  " + week

	document.querySelector(".time").innerHTML = "今天是：" + time
}

getNowDate()

// 12. 折叠菜单 jquery方法
$(document).ready(function () {
	// 获取点击的元素显示
	$("#firstpane .menu_body:eq(0)").show();
	$("#firstpane h3.menu_head").click(function () {
		// 通过点击获取对应类名，让其子元素及其节点显示
			$(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
			$(this).siblings().removeClass("current");
	});
	$("#secondpane .menu_body:eq(0)").show();
	$("#secondpane h3.menu_head").mouseover(function() {
			$(this).addClass("current").next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp("slow");
			$(this).siblings().removeClass("current");
	});
});