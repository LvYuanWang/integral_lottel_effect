(function () {
    function $(select) {
        return document.querySelector(select);
    }
    function $$(select) {
        return document.querySelectorAll(select);
    }
    var container_go = $('.container-go'), container_li = $$('.container-li'), container_number = $('.number'), main_container = $('.main-container'), container_text = $('.container-text'), exit_container = $('.exit-container'), container_continue = $('.continue');
    var number = 5, index = -1, containerLiIndex = null, timer = null;
    // 程序入口函数
    var init = function () {
        // 事件入口函数
        initEvent();
    }
    var initEvent = function () {
        container_go.addEventListener('click', onContainergoClick);
        exit_container.addEventListener('click', onExitcontainer);
        container_continue.addEventListener('click', onContainercontinue);
    }
    var onContainergoClick = function () {
        if (number <= 0) {
            return;
        }
        var isContainerli = Math.floor(Math.random() * 6000 + 6000);
        if (timer) {
            return;
        }
        timer = setInterval(() => {
            isContainerli -= 200;
            if (isContainerli <= 200) {
                clearInterval(timer);
                mainContainer(container_li[containerLiIndex], containerLiIndex);
                timer = null;
                return;
            }
            containerLiIndex = ++index % container_li.length;
            container_li.forEach(e => {
                if (e.getAttribute('class') === 'container-li active') {
                    e.setAttribute('class', 'container-li');
                }
            });
            container_li[containerLiIndex].setAttribute('class', 'container-li active');
        }, 50);
        number--;
        container_number.innerHTML = number;
    }
    var mainContainer = function (element, index) {
        if (number === 0) {
            container_continue.innerHTML = '确定';
        }
        main_container.style.display = 'block';
        if (index !== 4) {
            container_text.innerHTML = '恭喜您获得' + element.querySelector('span').innerHTML;
        } else {
            container_text.innerHTML = '谢谢参与,不中奖😊!';
        }
    }
    var onExitcontainer = function () {
        main_container.style.display = 'none';
    }
    var onContainercontinue = function () {
        main_container.style.display = 'none';
        onContainergoClick();
    }
    init();
})()