function yesAnswer() {
  console.log("Button clicked");

  fetch("http://localhost:3000/response", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      answer: "YES ❤️",
      time: new Date().toLocaleString()
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Response sent:", data);
    alert("I got your answer ❤️");
  })
  .catch(err => {
    console.error("Error:", err);
    alert("Something went wrong 😢");
  });
}