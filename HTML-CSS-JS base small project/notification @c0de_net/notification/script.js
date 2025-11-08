var box = document.getElementById('box');
var info = document.getElementById('info');

function open_time() {
   box.style.width = '180px';
}
function info_show() {
   info.style.display = 'block';
}
function restart() {
   box.style.display = 'none';
   info.style.display = 'none';
   box.style.marginTop = '30px';
   document.getElementById('btn').style.display = 'block';
}
function go_back() {
   box.style.marginTop = '-100px'
   setTimeout(restart, 100);
}
function start_msg() {
   document.getElementById('btn').style.display = 'none';
   box.style.display = 'block';
   setTimeout(open_time, 900);
   setTimeout(info_show, 1200);
   setTimeout(close_msg, 3000);
   box.style.display = 'flex';
}
function close_msg() {
   info.style.display = 'none';
   box.style.width = '40px';
   setTimeout(go_back, 500);
}
