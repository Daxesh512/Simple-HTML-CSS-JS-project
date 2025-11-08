function sendmsg() {

   console.log('sucess');
   // geting form data 
   var name = document.querySelector('#user-name').value;
   var email = document.querySelector('#user-email').value;
   var user_message = document.querySelector('#user-message').value;

      // Create a new XMLHttpRequest object
      var xhr = new XMLHttpRequest();

      // Configure the request
      var send_message = 'New Message' + '%0A' + 'Name : ' + name + '%0A' + 'Email : ' + email + '%0A'+ 'Message : ' + user_message;
      // get chat id : send random message to your bot from telegtam app and then hit this link "https://api.telegram.org/bot<tocken>/getUpdates" and copy the id.   
      var telegram_chat_id = '5227924065';
      var telegram_bot_token = '6732022305:AAGsx6ugieoa_0vYyCgOfXvIgRm6AFYk7aw';
      var URL = 'https://api.telegram.org/bot' + telegram_bot_token + '/sendMessage?chat_id=' + telegram_chat_id + '&text=' + send_message;
      xhr.open('GET', URL, true); // Replace the URL with the API endpoint you want to request

      // Set up a callback for when the request is completed
      xhr.onload = function () {
         if (xhr.status >= 200 && xhr.status < 300) {
            // Request was successful
            var responseData = JSON.parse(xhr.responseText);
            console.log(responseData);
            alert('Message Send Sucessful');
         } else {
            // Request failed with an error status
            console.error('Request failed with status:', xhr.status);
            alert('something went wrong');
         }
      };

      // Set up a callback for handling network errors
      xhr.onerror = function () {
         console.error('Network error occurred');
      };

      // Send the request
      xhr.send();
      var btn_submit = document.getElementById("submit");
      btn_submit.innerText="Send Sucessful";
      btn_submit.disabled = true;

   }
