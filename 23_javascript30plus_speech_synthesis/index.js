// Chatbot

function ChatBot() {
    /**
     * respondTo
     *
     * return nothing to skip response
     * return string for one response
     * return array of strings for multiple responses
     *
     * @param input - input chat string
     * @return reply of chat-bot
     */
    this.respondTo = function(input) {

        this.input = input.toLowerCase();

        if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
            return "um... hi?";

        if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
            return "this github thing is pretty cool, huh?";

        if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
            return "what's so funny?";

        if(this.match('^no+(\\s|!|\\.|$)'))
            return "don't be such a negative nancy :(";

        if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
            return ["alright, see you around", "good teamwork!"];

        if(this.match('(dumb|stupid|is that all)'))
            return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];

        if(this.input == 'noop')
            return;

        return input + " what?";
    }

    /**
     * match
     *
     * @param regex - regex string to match
     * @return boolean - whether or not the input string matches the regex
     */
    this.match = function(regex) {

        return new RegExp(regex).test(this.input);
    }
}

const bot = new ChatBot();

console.log(bot.respondTo('hi'));
console.log(bot.respondTo('hi'));

// App

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));

const messageInput = document.getElementById('message-input');

function handleMessage() {
    const message = messageInput.value;
    if(!message) return;
    msg.text = bot.respondTo(message);
    toggle();
}

document.getElementById('message-submit').addEventListener('click', handleMessage);

window.addEventListener('keypress', (e) => {
   if(e.key === 'Enter') handleMessage();
});
