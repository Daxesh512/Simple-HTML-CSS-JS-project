const messageInput = document.querySelector(".message");
const sendBtn = document.querySelector(".send");
const show = document.querySelector(".show-parent");
//------------

sendBtn.addEventListener("click", function () {
  const html = `<p>${messageInput.value}</p>`;
  show.insertAdjacentHTML("afterbegin", html);
});
