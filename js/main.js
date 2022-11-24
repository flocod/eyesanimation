
let chat_container = document.querySelector('#chat_container');
chat_container.scrollTop = chat_container.scrollHeight - chat_container.clientHeight;




$("#input_message").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn_send").click();
    }
});