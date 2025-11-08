function model() {
   document.getElementById('btn-model').style.display='none';
   document.getElementById('model').style.display='block';
}
function copy() {
   var copyText = document.getElementById('link');
   copyText.select();
   copyText.setSelectionRange(0, 999);
   navigator.clipboard.writeText(copyText.value);
}
function cancel() {
   document.getElementById('model').style.display='none'; 
   document.getElementById('btn-model').style.display='block';
   document.getElementById('btn-model').style.display='flex';
}