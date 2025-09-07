const nameInput = document.getElementById('name');
const button = document.querySelector('button.fortune-teller-game');
const speechBubble = document.getElementById('speechBubble');

let fortune1 = "Your cat will look very cuddly today.";

let fortune2 = "The weather will be nice tomorrow.";

let fortune3 = "Be cautious of your new neighbors.";

let fortune4 = "You will find a new hobby soon.";

let fortune5 = "It would be wise to avoid the color red today.";

let fortune6 = "A surprise message will brighten your day.";

let fortune7 = "You will soon reconnect with someone from your past.";

let fortune8 = "Today is a great day to try something new.";

let fortune9 = "A small risk you take today may lead to a big reward.";

function typeText(element, text, speed = 40, callback = null){
     element.textContent = ''; 
     element.style.display = 'block';
     let i = 0;

     const interval = setInterval(() => {
          element.textContent += text.charAt(i);
          i++;
          if (i === text.length) {
               clearInterval(interval);
               if (callback) callback();
          }
     }, speed);
}

button.addEventListener('click', () => {
     const userName = nameInput.value.trim();

     if (!userName){
          typeText(speechBubble, "Please enter your name.", 40);
          return;
     }

     const welcomeMessage = `Welcome, ${userName}! Are you ready for your fortune? Here is what I see:`;
     typeText(speechBubble, welcomeMessage, 40,() => {
          setTimeout(() => {
          let randomNumber = Math.floor(Math.random() * 9) + 1;
          let selectedFortune;
     

          if (randomNumber === 1) {
          selectedFortune = fortune1;
}

          else if (randomNumber === 2) {
          selectedFortune = fortune2;
}

          else if (randomNumber === 3) {
          selectedFortune = fortune3;
          }

          else if (randomNumber === 4) {
          selectedFortune = fortune4;
          }

          else if (randomNumber === 5) {
          selectedFortune = fortune5;
          }

          else if (randomNumber === 6) {
          selectedFortune = fortune6;
          }

          else if (randomNumber === 7) {
          selectedFortune = fortune7;
          }

          else if (randomNumber === 8) {
          selectedFortune = fortune8;
          }    

          else if (randomNumber === 9) {
          selectedFortune = fortune9;
          }
   
          typeText(speechBubble, selectedFortune, 40);
          }, 1000);
     });
});
