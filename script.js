let speech = new SpeechSynthesisUtterance();

let voices = [];

let voicesselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voicesselect.options[i] = new Option(voice.name, i)));
};

voicesselect.addEventListener("change", () =>{
    speech.voice = voices[voicesselect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
  