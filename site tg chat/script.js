
document.querySelector("button").onclick = function() {
  let message = document.querySelector(".input_field").value
  let url = "https://api.telegram.org/bot5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0/sendMessage?chat_id=-1001338764387&text="
  let xhttp = new XMLHttpRequest();
xhttp.open("GET", url + message, true);
xhttp.send()

var iframe = document.getElementById('iframeID');
iframe.src = iframe.src;

}


//#"https://api.telegram.org/bot5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0/sendMessage?chat_id=-1001338764387&text="#
// настоящая група

function fre(){
  let URL = "https://api.telegram.org/bot5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0/getChatMembersCount?chat_id=-1001338764387"
  var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", URL, false);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
      
    }
   let k = fre()["result"]
   document.getElementById("counter_var").innerHTML = k;


Vue.createApp({
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    async getMessages() {
      const { messages } = await fetch('https://chat.rubstudio.ru').then((res) => res.json());
      return messages;
    },
  },
  async mounted() {
    this.messages = await this.getMessages();
  },
}).mount('#telegram-messages');


