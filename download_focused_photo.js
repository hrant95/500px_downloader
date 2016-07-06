/**
 * Created by hrant95 on 7/6/16.
 */

window.addEventListener('load', function () {


    var img_src = document.getElementsByClassName("photo-focus__photo")[0].src;
    var buttonsDiv = document.getElementsByClassName("curator-actions");
    var likeDiv = document.getElementsByClassName("desktop curator_actions--with-gallery");

    var w = likeDiv.width;

    var tagString = "<a style='padding-top: 20px;position: absolute;padding-bottom: 20px;' class='extra-actions' href='" + img_src + "' download><p align='center' style='background-color: #34bf49; width: 236px; height: 30px; display: table-cell;vertical-align: middle;color: #ffffff; border-radius: 3px;'>Download image</p></a>";
    buttonsDiv[0].innerHTML += tagString;

    /*
     * set description style
     * */
    document.getElementsByClassName("description_region")[0].style = "padding-top: 22px";
});


/*
 var downloadBtn = document.createElement('img');
 downloadBtn.src = "img/ic_download.png";
 downloadBtn.width = 30;
 downloadBtn.height = 30;

 downloadBtn.addEventListener('click', function () {

 });
 */

