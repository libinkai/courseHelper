// 学评教
var selectBtns = document.getElementsByClassName("xpjBtn");
var i = 0;
var worker = setInterval(function () {
    if (i > selectBtns.length) {
        clearInterval(worker);
        return;
    }
    selectBtns[i].click();
    setTimeout(function () {
        var optionBtn = document.getElementsByClassName("choose");
        for (var j = 0; j < optionBtn.length; j += 5) {
            optionBtn[j].click();
        }
        var textareaOption = document.querySelectorAll("input[type='text']");
        textareaOption[0].value = "风趣幽默";
        textareaOption[1].value = "已经做得非常好了";
        var saveBtn = document.getElementsByClassName("saveBtn");
        saveBtn[0].click();
        var confirm = function () {
            return 1
        }
        i++;
    }, 3 * 1000);
}, 8 * 1000);