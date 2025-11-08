function myfun() {
   var myDiv = document.getElementById("box");
   while (myDiv.firstChild) {
      myDiv.removeChild(myDiv.firstChild);
  }
}


function getimg() {
   myfun();
   var search_key = document.getElementById('img-search').value;
   var url = "https://googleimage.apinepdev.workers.dev/?search="+search_key;
   var box = document.getElementById("box");

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         const responseData = JSON.parse(xhttp.responseText);
         const answerValue = responseData.imageUrls;
         
         answerValue.forEach(element => {
            const cimg = document.createElement("img");
            cimg.src = element;
            box.appendChild(cimg);
            console.log(element);
         });
      }
   }

   xhttp.open("POST", url, true);
   xhttp.send();

}

