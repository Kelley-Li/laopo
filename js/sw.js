var pics=document.getElementById("pics");
/*  设置定时器*/
var n=1;
setInterval(function(){
    pics.innerHTML="<img class=\"sw_img\" src='./img/"+n+".jpg'>";
    //"<img src='C:/Users/TX/Desktop/前端基础学习/image/3 ("+n+").jpg'>" 这里有两个字符串：
    //第一个："<img src='C:/Users/TX/Desktop/前端基础学习/image/3 ("
    //第二个：").jpg'>"
    //n是变量值
    n++;
    if (n==19) {n=1;}
},2000);
