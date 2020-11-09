import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    var node = document.createElement("P");
    // var node1 = document.createElement("H");

    debugger;
    var email = document.createTextNode(data.content.first_name); 
    var message = document.createTextNode(data.content.message); 
    var created_at = document.createTextNode(data.content.created_at); 
    var line_break = document.createElement("br");
    var add_line = document.createElement("hr");

    // var textnode4 = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' )
     
    // document.getElementById("new_message").style.color = "green";
    // debugger;
    node.appendChild(email); 
    node.appendChild(line_break); 
    node.appendChild(line_break); 
 

    node.appendChild(message); 
    node.appendChild(add_line); 

    document.getElementById("new_message").appendChild(node);

    document.getElementById('chat_message').value= ''
    // document.write("\n");

  }
});
