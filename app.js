// flip card on click
const flipCard = () => {
  const card = document.querySelector(".card");
  card.classList.toggle("flipcard");
};

// custom message
const addMessage = () => {
  const messageInput = document.getElementById("message-input").value;
  const messageElement = document.getElementById("custom-message");
  const userFeedback = document.getElementById("userFeedback");

  const regex = /^[A-Za-zÄäÖöÜüß\s]+$/;

  // check regex and add user message
  if (regex.test(messageInput)) {
    // add message
    messageElement.textContent =
      messageInput ||
      "Nimm dich in Acht vor Geistern und Kobolden, während du die gruseligste Nacht des Jahres feierst.";
    userFeedback.classList.remove("userInfo--visible");
  } else {
    userFeedback.classList.add("userInfo--visible");
  }
};

// share e-card
const shareCard = () => {
  const message = encodeURIComponent(
    "Hier ist eine kleiner Halloween-Gruß per E-card für dich"
  );
  const subjectMessage = encodeURIComponent("Happy Halloween!");
  const url = `mailto:?subject=${subjectMessage}&body=${message}`;
  // opens link in e-mail programm
  window.location.href = url;
};
