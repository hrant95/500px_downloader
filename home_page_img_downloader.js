window.addEventListener('load', function () {

    var btnDivs = document.getElementsByClassName("photo_activity_item__details_top_right");
    var imageDivs = document.getElementsByClassName("photo_activity_item__img");
    var img_src = "";
    for (var i = 0; i < btnDivs.length; i++) {
        img_src = imageDivs[i].src;
        
        var downloadBtnTag = "<a style='vertical-align: middle;font-size: 14px;margin-left: 10px;display: inline-block;padding-right: 10px;' class='extra-actions' href='" + img_src + "' download><p align='center' style='background-color: #34bf49; width: 30px; height: 30px; display: table-cell;vertical-align: middle;color: #ffffff; border-radius: 3px;'>D</p></a>";

        var tempHtml = btnDivs[i].innerHTML;
        btnDivs[i].innerHTML = downloadBtnTag + tempHtml;
    }
});

