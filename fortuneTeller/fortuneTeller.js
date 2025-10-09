//Assign variables to HTML elements
const nameInput = document.getElementById('name');
const button = document.querySelector('button.fortune-teller-game');
const speechBubble = document.getElementById('speechBubble');

//Define fortunes that the program will randomly select from
let fortune1 = "Your cat will look very cuddly today.";

let fortune2 = "The weather will be nice tomorrow.";

let fortune3 = "Be cautious of your new neighbors.";

let fortune4 = "You will find a new hobby soon.";

let fortune5 = "It would be wise to avoid the color red today.";

let fortune6 = "A surprise message will brighten your day.";

let fortune7 = "You will soon reconnect with someone from your past.";

let fortune8 = "Today is a great day to try something new.";

let fortune9 = "A small risk you take today may lead to a big reward.";

let fortune10 = "Trust your instincts when making decisions today.";

let fortune11 = "A financial opportunity may present itself soon.";

let fortune12 = "You will find joy in the little things today.";

let fortune13 = "An unexpected event will bring excitement to your day.";

let fortune14 = "You will make a new friend in an unexpected place.";

let fortune15 = "Your creativity will shine in your work today.";

letfortune16 = "A kind gesture will come back to you in a surprising way.";

let fortune17 = "You will discover a hidden talent.";

let fortune18 = "A peaceful moment will bring clarity to your thoughts.";

let fortune19 = "You will receive good news from a distant friend.";

let fortune20 = "Your positive attitude will attract good things.";

let fortune21 = "You will find success in a challenging situation.";

let fortune22 = "A new opportunity will arise in your career.";

let fortune23 = "You will find inspiration in nature.";

let fortune24 = "A thoughtful gift will make someone's day.";

let fortune25 = "You will achieve a personal goal you've been working towards.";

let fortune26 = "A fun adventure is on the horizon.";

let fortune27 = "You will find balance in your life.";

let fortune28 = "A meaningful conversation will lead to a new perspective.";

let fortune29 = "You will make a positive impact on someone's life.";

let fortune30 = "You will find success in a creative project.";

//Defines a function to simulate typing effect in the speech bubble
function typeText(element, text, speed = 40, callback = null){
     element.textContent = ''; //Clear any existing text inside the speech bubble
     element.style.display = 'block'; //Ensures that the element is visible
     let i = 0; //Initalizes a counter to track which character has been typed so far

     //Sets up an interval to add one character at a time (typewriter effect)
     const interval = setInterval(() => {
          //Adds the current character at index i to the speech bubble
          element.textContent += text.charAt(i);

          //Moves the counter forward so the next character will be added
          i++;

          //If all characters have been added, stop the interval from running because typing is complete
          if (i === text.length) {
               clearInterval(interval);

               //If a callback function was provided, call it now that typing is done
               if (callback) callback();
          }
     }, speed); //Speed controls how fast each character is added (in milliseconds)
}

//Initial greeting when the page loads
button.addEventListener('click', () => {
     //Trim whitespace from the input value
     const userName = nameInput.value.trim();

     //If the input is empty, prompt the user to enter their name
     if (!userName){
          typeText(speechBubble, "Please enter your name.", 40); //40 is the milliseconds between each character
          return;
     }

     //If a name was provided, greet the user and then provide a random fortune
     const welcomeMessage = `Welcome, ${userName}! Are you ready for your fortune? Here is what I see:`;

     //Calls the typeText function on the speechBubble element
     typeText(speechBubble, welcomeMessage, 40,() => {
          setTimeout(() => { //Wait 1 second before showing the fortune
          let randomNumber = Math.floor(Math.random() * 30) + 1; //Select a number between 1 and 30
          let selectedFortune; //Store the fortune that corresponds to the random number
     

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

          else if (randomNumber === 10) {
          selectedFortune = fortune10;
          }

          else if (randomNumber === 11) {
          selectedFortune = fortune11;
          }

          else if (randomNumber === 12) {
          selectedFortune = fortune12;
          }

          else if (randomNumber === 13) {
          selectedFortune = fortune13;
          }

          else if (randomNumber === 14) {
          selectedFortune = fortune14;
          }

          else if (randomNumber === 15) {
          selectedFortune = fortune16;
          }

          else if (randomNumber === 16) {
          selectedFortune = fortune16;
          }

          else if (randomNumber === 17) {
          selectedFortune = fortune17;
          }

          else if (randomNumber === 18) {
          selectedFortune = fortune18;
          }

          else if (randomNumber === 19) {
          selectedFortune = fortune19;
          }

          else if (randomNumber === 20) {
          selectedFortune = fortune20;
          }

          else if (randomNumber === 21) {
          selectedFortune = fortune21;
          }

          else if (randomNumber === 22) {
          selectedFortune = fortune22;
          }

          else if (randomNumber === 23) {
          selectedFortune = fortune23;
          }

          else if (randomNumber === 24) {
          selectedFortune = fortune24;
          }

          else if (randomNumber === 25) {
          selectedFortune = fortune25;
          }

          else if (randomNumber === 26) {
          selectedFortune = fortune26;
          }

          else if (randomNumber === 27) {
          selectedFortune = fortune27;
          }

          else if (randomNumber === 28) {
          selectedFortune = fortune28;
          }

          else if (randomNumber === 29) {
          selectedFortune = fortune29;
          }

          else if (randomNumber === 30) {
          selectedFortune = fortune30;
          }

          typeText(speechBubble, selectedFortune, 40); //Calls typeText to display the selected fortune in the same speech bubble after a 1-second delay
          }, 1000);
     });
});
