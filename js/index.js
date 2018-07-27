window.onload = function () {
    // 关闭弹窗
    var offBtn1 = document.getElementById('offBtn1');
    var offBtn2 = document.getElementById('offBtn2');
    var oFiveBtn1 = document.getElementById('fiveOneBtn');
    var oFivePopup = new MyPopup('fivePopup', {
        param: {
            bgcolor: 'rgb(0,0,0)',
            opacity: 0.2,
            time: 200,
            type: 'opacity'
        },
        showFn: function () {
            oFivePopup.content(0);
        }
    })
    oFiveBtn1.onclick = function () {
        oFivePopup.content(1);
    }
    offBtn1.onclick = function () {
        oFivePopup.close()
    }
    offBtn2.onclick = function () {
        oFivePopup.close()
    }
}