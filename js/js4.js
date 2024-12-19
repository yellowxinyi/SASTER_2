        // 效果：鼠标经过，显示下拉表单
        //获取事件源 li,
        var nav = document.getElementById('nav');
        // 获取nav的亲孩子
        var lis = nav.children;
        for (var i = 0; i < lis.length; i++) {
            // onmouseover鼠标移入
            lis[i].onmouseover = function () {
                this.children[1].style.display = 'block';
            }
            // onmouseout鼠标移出
            lis[i].onmouseout = function () {
                this.children[1].style.display = 'none';
            }
        }
