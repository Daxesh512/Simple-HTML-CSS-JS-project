var circle = document.getElementById('circle');
var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var icon3 = document.getElementById('icon3');
var icon4 = document.getElementById('icon4');
var icon5 = document.getElementById('icon5');
icon3.style.filter=' invert()';

 function click1(){
   circle.style.marginLeft='8px';
   icon1.style.filter=' invert()';
   icon2.style.filter='none';
   icon3.style.filter='none';
   icon4.style.filter='none';
   icon5.style.filter='none';
}
function click2(){
   circle.style.marginLeft='72px';
   icon1.style.filter='none';
   icon2.style.filter=' invert()';
   icon3.style.filter='none';
   icon4.style.filter='none';
   icon5.style.filter='none';
}
function click3(){
   circle.style.marginLeft='138px';
   icon1.style.filter='none';
   icon2.style.filter='none';
   icon3.style.filter=' invert()';
   icon4.style.filter='none';
   icon5.style.filter='none';
}
function click4(){
   circle.style.marginLeft='205px';
   icon1.style.filter='none';
   icon2.style.filter='none';
   icon3.style.filter='none';
   icon4.style.filter=' invert()';
   icon5.style.filter='none';
}
function click5(){
   circle.style.marginLeft='269px';
   icon1.style.filter='none';
   icon2.style.filter='none';
   icon3.style.filter='none';
   icon4.style.filter='none';
   icon5.style.filter=' invert()';
}


