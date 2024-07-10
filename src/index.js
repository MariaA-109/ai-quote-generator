function displayPoem(response) {
  console.log("displaying poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");

  let apiKey = "2tabfa1b3493b3360bob9a9a0c14ec98";
  let prompt = `Generate a daily motivational quote about ${instructionsInput.value}`;
  let context =
    "You are a  positive AI assistant that helps people boost their motivation daily. Please generate a short and friendly quote in HTML about a specific topic. Do NOT include any title or author name. You do not need to use quotes either.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating quote about ${instructionsInput.value} for you...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.getElementById("poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
