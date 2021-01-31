
//加载动画，该死的jquery，去你🐴的

$(".textc,#bibg,.wonder,#jieshao,#down").hide({
                duration: 0,
 
            })


function jz( ){
//以后要改

$(document).ready(function(){
$(".textc").animate({marginTop:110, opacity:'show'},{ duration: 2000 });
});


$(document).ready(function(){
$("#bibg").animate({marginLeft:40, opacity:'show'},{ duration: 2000 });
});

}

//设置rem，以便自适应，去尼玛的IE浏览器
//页面自适应
//通过window.screen.width获取屏幕的宽度
var offWidth = window.screen.width / 40;
//重新定义rem
document.getElementsByTagName("html")[0].style.fontSize = offWidth + 'px'; 
//把rem的值复制给font-size

/*  监听滚动失败品
	$('#navbar').on('activate.bs.scrollspy', function () {
  // 执行一些动作...
  
  var gunid = $("#navbar li.active > a").attr('sd');
  alert(gunid)
			
})

window.onscroll = function(){ 
     var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
     var uptop = document.getElementById( "wrapper" ); //获取div元素
     if( t > 300 ) { //当距离顶部超过300px时
        uptop.style.bottom=30+'px';//使div距离底部30px，也就是向上出现
        alert("sb")
} 
*/



//元素  滚动加载
var j = document.getElementById("yellow");
var left = j.style.left;
var current=j.offsetLeft;
current-=80;
//j=parseInt(j.substr(0,j.length-2));
j.style.left=current+"px";

//浅出淡入，滚动开始
       $(function(){

           $(window).scroll(function(){
                slideIn($(".three"),150);
                
           });
var skuan = window.screen.height;

          function slideIn(obj,left){
              var scrollTop = $(window).scrollTop(); //页面滚动的距离
              var targetHeight = obj.offset().top;   //目标元素到顶部的距离
             
              var targetHeight1 = $(".two").offset().top;  
              
              if(scrollTop>targetHeight-skuan){
        /*    
        轮播图
               $("#three").animate({marginTop:110, opacity:'show'},{ duration: 2000 });

*/
           
               
              }
              
              
              if(scrollTop>targetHeight1-skuan){
           $(".yellow").animate({marginLeft:80, opacity:'show'},{ duration: 1500 });
                  red.setAttribute('style', 'animation: tu 1.5s linear;')
             
                      $("#jieshao").animate({marginLeft:-10, opacity:'show'},{ duration: 1500 });
        //   左上滑出 $("#down").show({ duration: 1500 });
        //显示下载
            setTimeout(function(){    $("#down").animate({marginLeft:0, opacity:'show'},{ duration: 1000 }) ;$(".wonder").animate({opacity:'show'})},1500);
     
                }
              
           };


       });
       
   

//设置文档初始滚动
  window.scrollTo(0,0);

//测试过程代码
/*
  $('div').click(
    function(){
      //this表示当前被点击元素，但是此时我们当做dom对象
      //window.alert(this.innerHTML);
      //$(this) 表示当前被点击元素，但是此时我们当做jquery对象
      window.alert($(this).html());
      //window.alert('ok');
    });
*/



//pc端判断
 
    var userAgentInfo = navigator.userAgent; 
    var Agents = ["Android", "iPhone", 
                "SymbianOS", "Windows Phone", 
                "iPad", "iPod"]; 
    var flag = true; 
    for (var v = 0; v < Agents.length; v++) { 
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false; 
            
            break;
              
        } 
    } 
    if (flag == true)
    {
 
//电脑端适应

//document.getElementsClass("block").style.width = document.documentElement.clientWidth - 20 + 'px';

$(".block").width("430px");

$(".block").height("430px");








        }
     
  // document.getElementByClassName("block").style.width =  '50px';

 
 
     
       
         
           
             
               
                 
                   
                       
     
     //获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<center><div id="loadingDiv1" style="position:absolute;left:0;width:100%;height:100%;top:0;background:#f3f8ff;display: flex;z-index:99999999"><svg t="1601858982746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1158" width="50" height="50"><path d="M119.466667 512H51.2C51.2 267.946667 250.88 68.266667 494.933333 68.266667c175.786667 0 334.506667 104.106667 406.186667 262.826666L837.973333 358.4C778.24 223.573333 643.413333 136.533333 494.933333 136.533333 288.426667 136.533333 119.466667 305.493333 119.466667 512z" fill="#191919" p-id="1159"></path><path d="M938.666667 409.6H699.733333v-68.266667h170.666667V170.666667h68.266667z" fill="#00C97C" p-id="1160"></path><path d="M494.933333 955.733333C319.146667 955.733333 160.426667 851.626667 88.746667 692.906667L151.893333 665.6c59.733333 134.826667 194.56 221.866667 343.04 221.866667 206.506667 0 375.466667-168.96 375.466667-375.466667h68.266667c0 244.053333-199.68 443.733333-443.733334 443.733333z" fill="#191919" p-id="1161"></path><path d="M119.466667 853.333333H51.2V614.4h238.933333v68.266667H119.466667z" fill="#00C97C" p-id="1162"></path></svg></center>';
//呈现loading效果
document.write(_LoadingHtml);

//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv1');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
    
    
    
    function down( ){
    
    
    
 window.open("runtime/aarch32_runtime_20200328.tar.xz");

    //提交表单，实现下载
   

   // https://github.com/AOF-Dev/MCinaBox/releases/download/v0.1.0/aarch32_runtime_20200328.tar.xz
}


