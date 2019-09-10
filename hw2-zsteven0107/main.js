var number = 0;
var url1 = null;
var url2 = null;
var url3 = null;
var timeOut1 = null;
var timeOut2 = null;
var timeOut3 = null;
var image1 = new Array(3);
for(var i=0;i<image1.length;i++){
  image1[i] = new Image();
}
var image2 = new Array(3);
for(var i=0;i<image2.length;i++){
  image2[i] = new Image();
}
var image3 = new Array(3);
for(var i=0;i<image3.length;i++){
  image3[i] = new Image();
}
image1[0] = "http://static.nfl.com/static/content/public/photo/2019/09/08/0ap3000001052347.jpg";
image1[1] = "https://wagnerathletics.com/images/2019/9/7/Quinlan_act.jpg?width=1920&height=1080&mode=crop";
image1[2] = "https://usathss.files.wordpress.com/2018/12/usatsi_11767827-e1567623037807.jpg?w=1000&h=600&crop=1";
image2[0] = "https://i.ytimg.com/vi/qKsaQB0_yPo/maxresdefault.jpg";
image2[1] = "http://www.fiba.basketball/images.fiba.com/Graphic/E/D/5/4/LhzMXX5-nUWtMRWEBp27IQ.jpg?v=20190909105937534";
image2[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOc-pZwilcWl4Z0v8YTkFYLz0HdgbsMIpah0pWuTwRXbBqZ1Z";
image3[0] = "https://img.bleacherreport.net/img/images/photos/003/827/177/hi-res-93447c84b839d3cabbb349a5a50af0e5_crop_exact.jpg?w=900&h=600&q=75";
image3[1] = "https://timedotcom.files.wordpress.com/2019/08/serena-williams-us-open-2019.jpg?quality=85&w=1024&h=628&crop=1";
image3[2] = "https://i.eurosport.com/2019/09/02/2668455-55191410-2560-1440.jpg?w=1050";

var START = "Start";
var STOP = "Stop";

function startImage1(){
  document.getElementById("pic1").src = url1;
  url1 = image1[number];
  number = (number+1)%3;
  timeOut1 = setTimeout("startImage1()",Math.floor(Math.random() * 5001));
}

function startImage2(){
  document.getElementById("pic2").src = url2;
  url2 = image2[number];
  number = (number+1)%3;
  timeOut2 = setTimeout("startImage2()",Math.floor(Math.random() * 5001));
}

function startImage3(){
  document.getElementById("pic3").src = url3;
  url3 = image3[number];
  number = (number+1)%3;
  timeOut3 = setTimeout("startImage3()",Math.floor(Math.random() * 5001));
}

function SS1(){
  ssBtn1 = document.getElementById("SS1");
  if(ssBtn1.value==STOP){stopImage(ssBtn1,timeOut1);}
  else{restartImage1();}
}

function SS2(){
  ssBtn2 = document.getElementById("SS2");
  if(ssBtn2.value==STOP){stopImage(ssBtn2,timeOut2);}
  else{restartImage2();}
}

function SS3(){
  ssBtn3 = document.getElementById("SS3");
  if(ssBtn3.value==STOP){stopImage(ssBtn3,timeOut3);}
  else{restartImage3();}
}

function stopImage(ssBtn,timeOut){
  ssBtn.value = START;
  if (timeOut!=null) {
      clearTimeout(timeOut);
      timeOut = null;
    }
  }

function restartImage1(){
  ssBtn1.value = STOP;
  startImage1();
}

function restartImage2(){
  ssBtn2.value = STOP;
  startImage2();
}

function restartImage3(){
  ssBtn3.value = STOP;
  startImage3();
}
