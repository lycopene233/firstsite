$(function(){
    //JSONのGETメソッドを試してみよう！
    $.getJSON("/assets/json/roppongi/holiday.json")
    .done(function(json){
        showHoliday(json);
    })
    .fail(function(jqxhr, textStatus, error){
        document.write("Request Failed: " + textStatus + ", " + error);
    });

    function showHoliday(holidayArr) {
        var now = new Date().getTime();
        var msg = holidayArr.reduce(function(msg, holiday){
            var date = getHolidayDate(holiday.date, now);
            if(!date) return msg;
            var rest = Math.ceil((date.getTime() - now) / (3600 * 24 * 1000));
            return (msg + holiday.date + " (" + ("日月火水木金土")[date.getDay()] + ") " + holiday.name + " ...あと「" + rest + "」日<br>");
        }, "");
        
        var msgWrap = document.createElement("p");
        msgWrap.innerHTML = "次の休日はいつですか？_(:3｣ ∠)_<br>- - - - - - - - - - - - - - - - - -<br>" + msg;
        msgWrap.setAttribute("class", "msg_wrap");
        document.body.appendChild(msgWrap);
    }

    function getHolidayDate(dateStr, now){
        var dateArr = dateStr.split("/");
        if(dateArr.length != 3) return false;
        var date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
        if(now - date.getTime() >= 0) return false;
        if([0,6].indexOf(date.getDay()) != -1) return false;
        return date;
    }
});