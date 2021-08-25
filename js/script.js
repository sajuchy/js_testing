
// Dark Mode and Light Mode

function darkMode(){
    document.body.style.backgroundColor='black';
}

function lightMode(){
    document.body.style.backgroundColor='white';
}


// change text

function textChange(){

    document.getElementById('h1').innerHTML = 'welcome to shikhbe sobai';
    document.getElementById('head').innerHTML='Text Changed on click. click refresh to return'
    
}

function back(){
    document.getElementById('h1').innerHTML = 'Hello world';
    document.getElementById('head').innerHTML='Change Text ';
}

// change color

function changeColor(){
    document.getElementById('h2').style.color='red';
    document.getElementById('p-1').style.color='blue';
    document.getElementById('c-head').style.color='white'
    document.getElementById('c-head').innerHTML='Click Refresh to retrun';
  

   

}

function previous(){
    document.getElementById('h2').style.color='#212529';
    document.getElementById('p-1').style.color='#212529';
    document.getElementById('c-head').style.color='#212529';
    document.getElementById('c-head').innerHTML='change text color';
    
}

// column count

function changeCol(){
    document.getElementById('col').style.columnCount='5'
    document.getElementById("col").style.columnGap = "50px";
    document.getElementById('c-count').innerHTML='Click Refresh to retrun';
}

function noCol(){
    document.getElementById('col').style.columnCount='1'
    document.getElementById("col").style.columnGap = "none";
    document.getElementById('c-count').innerHTML='Column Count';
}


// turn on off light 

function changeImg(){
    var image = document.getElementById('myImage');

    if(image.src.match('bulbon')){
        image.src='images/pic_bulboff.gif';
       
    }
    else{
        image.src='images/pic_bulbon.gif';  
    }
}


// show date
function displayDate(){
   document.getElementById('hello').innerHTML= Date();
}
function resetDate(){
   document.getElementById('hello').innerHTML= 'Hello World';
}

// elements change by class name

function textChange2(){
    document.getElementsByClassName('head-2')[0].innerHTML='Welcome to js club';
    document.getElementsByClassName('head-2')[0].style.color='red'
    document.getElementsByClassName('head-2')[0].style.fontSize='50px'


   
}


function reset1(){
    document.getElementsByClassName('head-2')[0].innerHTML='Hello Bangladesh';
    document.getElementsByClassName('head-2')[0].style.color='#212529';
    document.getElementsByClassName('head-2')[0].style.fontSize='33px'
    
}


// to set border

function setBorder(){
    document.getElementById('hh').style.border=' 5px solid red';
    document.getElementById('hh').style.backgroundColor='green';
    document.getElementById('hh').style.color='white';
}

function reset2(){
    document.getElementById('hh').style.border='none';
    document.getElementById('hh').style.backgroundColor='white'
    document.getElementById('hh').style.color='#212529';
}


// changing img by click
function imgOne(){
    document.getElementById('img').src='images/image-plane.jpg'
}


function imgTwo(){
    document.getElementById('img').src='images/image-restaurant.jpg'
}

// mouseevent
function imOne(){
    document.getElementById('img1').src='images/image-plane.jpg'
}


function imTwo(){
    document.getElementById('img1').src='images/image-restaurant.jpg'
}
function imThree(){
    document.getElementById('img2').src='images/image-plane.jpg'
}


function imFour(){
    document.getElementById('img2').src='images/image-restaurant.jpg'
}
// alert event

function checkAlert(){
    window.alert('Your Registration Complete')
}


// outputs

// document.write

var a = 300;
var b =200;
var c = a+b;




// jquery start
// click to get alert
$(document).ready(function(){
   $('#btx').click(function(){
       alert('You have successfully done it');
   })
});

// click to text change

$(document).ready(function(){
    $('#bty').click(function(){
        $('#hh1').html('welcome to jquery');
    });
    $('#btyReset').click(function(){
        $('#hh1').html('Welcome to SSB');
    });
})


// text color change





