window.onload = function () {
  // 5. 获取导航栏节点
  var list1 = document.querySelectorAll(".yk_bar .info")

  // 获取内容节点
  var list2 = document.querySelectorAll(".yk_content .content")


  // 循环绑定导航栏节点点击事件
  for (let index = 0; index < list1.length; index++) {
    list1[index].addEventListener("click", function () {
      for (let i = 0; i < list1.length; i++) {
        list1[i].className = "info"
      }

      // 添加类名
      list1[index].className = "info active"

      // 对应的及
      for (let i2 = 0; i2 < list2.length; i2++) {
        if (index == i2) {
          list2[i2].style.display = "block"
        } else {
          list2[i2].style.display = "none"
        }

      }
    })
  }



  // 6. 显示更多
  var more = document.querySelector("#more")
  more.addEventListener("click", function () {
    // 隐藏按钮
    this.style.display = "none"
    // 显示更多内容
    document.querySelector(".text2").style.display = "block"
  })

  // 8. 获取时间
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
}