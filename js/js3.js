// 美食页 js

var numTimer;

function startScroll() {
	var num = Math.floor(Math.random() * 300 + 1);
	document.getElementById("mytext").value = num;
	clearTimeout(numTimer);
	numTimer = setTimeout("startScroll", 60)
}


// 7. 点击显示大图
var list = document.querySelectorAll(".food_box .info")
// 循环遍历图片信息
for (let i = 0; i < list.length; i++) {
	// 绑定点击事件
	list[i].children[0].addEventListener("click", function (e) {
		// 跳转打开图片链接
		window.open(e.target.src)
	})

}

// 8.获取时间日期
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