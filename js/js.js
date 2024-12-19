function animate(obj, length, callback) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var step = (length - obj.offsetLeft) / 10; // 缓动效果，步长=（目标值-当前值）/10
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		if (obj.offsetLeft == length) {
			clearInterval(obj.timer);
			if (callback)
				callback();
			//callback && callback()
		}
		obj.style.left = obj.offsetLeft + step + 'px';
	}, 15);
}
window.addEventListener('load', function () {
    // 1. 获取DOM元素
    const lunbo = document.querySelector(".mylunbo");
    var num = 0; // 左右移动按钮定位图片
    var circle = 0; // 定位小圆点
    var flag = true; // 节流阀
    let timer = null; // 定义定时器变量

    //2、创建小圆点
    const ul = lunbo.querySelector("ul");
    const ol = lunbo.querySelector("ol");
    for (let i = 0; i < ul.children.length; i++) { // 根据图片数量生成小圆点
        let li = document.createElement("li");
        li.setAttribute('index', i); // 添加自定义属性index
        ol.appendChild(li);
        //3、添加小圆圈点击事件
        li.onclick = function () {
            clearInterval(timer); // 清除定时器
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //4、小圆圈动画
            let lunbowidth = lunbo.offsetWidth;
            let index = this.getAttribute('index');
            num = circle = index; // 点击小圆点时，将num和circle的值赋值为index，即将小圆点顺序和左右按钮的num定位到当前图片
            animate(ul, -index * lunbowidth); // 调用动画函数，-index*lunboWidth为终点位置
            timer = setInterval(autoPlay, 3000); // 重新启动定时器
        }
    }

    //5、克隆子元素-->ABCDA，此时最后一张图为第一张图的复制！！
    let child = ul.children[0].cloneNode(true);
    ul.appendChild(child);
    ol.children[0].className = 'current';

    // 设置当前的小圆点样式
    function setCurrent() {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    // 自动播放函数
    function autoPlay() {
        if (flag) {
            flag = false;
            num++;
            if (num == ul.children.length - 1) { // 到达克隆的最后一张图片时
                ul.style.transition = 'none'; // 关闭动画效果
                ul.style.transform = `translateX(-${0}px)`; // 直接跳转到第一张
                setTimeout(() => {
                    ul.style.transition = ''; // 恢复动画效果
                    num = 0; // 将num重置为0，即第一张
                }, 16); // 等待浏览器刷新一帧的时间
            } else {
                animate(ul, -num * lunbo.offsetWidth);
            }
            circle = num % (ol.children.length); // 计算当前的小圆点索引
            setCurrent();
            setTimeout(() => { flag = true; }, 1000); // 节流阀等待1秒后恢复
        }
    }

    // 启动自动播放
    timer = setInterval(autoPlay, 3000);

    // 动画函数
    function animate(element, target) {
        // 这里应该是一个实现动画效果的函数，例如使用requestAnimationFrame或setTimeout来实现平滑滚动。
        // 假设这里有一个简单的CSS transition来完成动画，实际项目中需要根据需求具体实现。
        element.style.transition = 'transform 1s ease-in-out';
        element.style.transform = `translateX(${target}px)`;
    }
});

function check() {
	var name = document.getElementById('name').value
	var phone = document.getElementById('phone').value
	var content = document.getElementById('content').value

	if (!name) {
		alert("姓名不能为空")
		return false
	}
	if (!phone) {
		alert("手机号不能为空")
		return false
	}
	if (!content) {
		alert("反馈内容不能为空")
		return false
	}
	alert("留言成功")
}


// 获取时间
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



window.addEventListener('load', function () {

	// 9. 鼠标放置图片右侧显示大图
	var preview_img = document.querySelector('.preview_img');
	var mask = document.querySelector('.mask');
	var big = document.querySelector('.big');
	// 1.鼠标经过 preview_img  就显示和隐藏 mask 遮挡曾 和 big大盒子
	preview_img.addEventListener('mouseover', function () {
		mask.style.display = 'block';
		big.style.display = 'block';
	})
	preview_img.addEventListener('mouseout', function () {
		mask.style.display = 'none';
		big.style.display = 'none';
	})
	// 2.鼠标移动的时候，黄色的盒子跟着鼠标走
	preview_img.addEventListener('mousemove', function (e) {
		// 1.先计算鼠标在盒子内的坐标
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		// 2.减去盒子高度的一半 300 / 150 就是mask最终的left 和 top值
		// 3.mask的移动距离
		var maskX = x - mask.offsetWidth / 2;
		var maskY = y - mask.offsetHeight / 2;
		var maskMax = preview_img.offsetWidth - mask.offsetWidth;
		// 4.如果x坐标小于0 就让它停在0的位置
		if (maskX <= 0) {
			maskX = 0;
		} else if (maskX >= maskMax) {
			maskX = maskMax;
		}
		if (maskY <= 0) {
			maskY = 0;
		} else if (maskY >= maskMax) {
			maskY = maskMax;
		}
		mask.style.left = maskX + 'px';
		mask.style.top = maskY + 'px';
		// 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
		var bigImg = document.querySelector('.bigImg');
		// 大图片的最大移动距离
		var bigMax = bigImg.offsetWidth - big.offsetWidth;
		// 大图片的移动距离
		var bigX = maskX * bigMax / maskMax;
		var bigY = maskY * bigMax / maskMax;
		bigImg.style.left = -bigX + 'px';
		bigImg.style.top = -bigY + 'px';
	})
})


// 10. 点击切换背景色
var state = true
function qh() {
	if (state) {
		state = false
		// 通过增加临时变量，通过判断变量的布尔值，就行增删类名，达到变色的效果
		document.getElementById("row1").className = " animal animal_active"
	} else {
		state = true
		document.getElementById("row1").className = " animal"

	}
}

var state2 = true

function qh2() {
	if (state2) {
		state2 = false
		document.getElementById("row2").className = " animal animal_active"
	} else {
		state2 = true
		document.getElementById("row2").className = " animal"

	}
}


// 11. 点击返回顶部
var goBack = document.getElementById("top")
goBack.addEventListener('click', function () {
	window.scroll(0,0)
})
