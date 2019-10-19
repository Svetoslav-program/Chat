let field = document.getElememt.ById("field");
chat = document.getElementsById("chat");
let ws = new WebSocket("ws://locahost:591/");
ws.onmessege = function(message) {
  chat.value = message.data + "\n" + chat.value;
};
ws.onpen = function() {
  field.addEventListener("keydown", function(event) {
    if(event.which === 13) {
      ws.send(field.value);
      field.value ="";
    }
  });
});
