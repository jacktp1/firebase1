import { db } from "./firebase.js";
import { ref, push, onChildAdded } from "firebase/database";

const msgForm = document.getElementById("msgForm");
const msgInput = document.getElementById("message");
const msgList = document.getElementById("messages");

// Send new message
msgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = msgInput.value;
  if (!text) return;

  push(ref(db, "messages"), {
    text,
    timestamp: Date.now()
  });

  msgInput.value = "";
});

// Display messages in real time
onChildAdded(ref(db, "messages"), (snapshot) => {
  const msg = snapshot.val();
  const li = document.createElement("li");
  li.textContent = msg.text;
  msgList.appendChild(li);
});
