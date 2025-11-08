function count() {
   var persentno = document.getElementById('sound-value');
var no = document.getElementById('no');
no.innerHTML= persentno.value;
if(no.innerHTML > 10){
      document.getElementById('icon').src = 'icon/Volume-Min.png';
   }
   if(no.innerHTML == '0'){
      document.getElementById('icon').src = 'icon/Volume-Mute.png';
   }
   else{
      document.getElementById('icon').src = 'icon/Volume-Min.png';
   }
   if(no.innerHTML > 60){
      document.getElementById('icon').src = 'icon/Volume-Max.png';
   }   
}
count();
setInterval(count, 1);
