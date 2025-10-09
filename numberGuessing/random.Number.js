
          //Assign values to variables
          let currentRandomNumber = null;
          let step = 0;
          let angle = -10;
          let direction = 1;
          
          function generateRandomNumber() {
               // Generate a random number between 1 and 3
               currentRandomNumber = Math.floor(Math.random() * 3) + 1;
          }

          //Create a waving flag function
          function waveFlag() {
               // Select the flag element and assign it to a variable in JavaScript
               const flag = document.querySelector(`.flag`);
               
               //If no flag element is found, exit the function early to avoid errors
               if (!flag) return;

               // Increment the angle by a small amount to create a smooth waving effect
               //Direction is forward with +1, though it can be reversed with -1
               //Multiplying by 0.5 slows down the waving motion
               angle += direction * 0.5;
               
               //If the flag rotates too far in either direction (past 5 degrees clockwise and -10 counter-clockwise),
               //the direction flips
               if (angle > 5 || angle < -10){
                    direction *= -1;
               }

               //Sets the CSS transform on the flag element to rotate it by the current angle (this moves the flag visually)
               flag.style.transform = `rotate(${angle}deg)`;

               //Tells the browser to call waveFlag again on the next animation frame to create a smooth, continuous
               //waving effect instead of just a single rotation
               requestAnimationFrame(waveFlag);
          };

          //Sets a function to run only after the entire page (HTML, CSS, and images have fully loaded
          window.onload = () => {
                    waveFlag(); generateRandomNumber(); //Starts the waveFlag function and generates a random number
               };

          //Creates the checkGuess function to check the user's guess
          function checkGuess() {
               //Gets HTML data and assigns it to a constant
               const userGuess = parseInt(document.getElementById('userGuess').value);
               const guessInput = document.getElementById('userGuess');
               const penguin = document.getElementById('penguin');
               

               // Returns error if the input is not a number or out of range
               if (isNaN(userGuess) || userGuess < 1 || userGuess > 3){
                    document.getElementById('result').innerText = 'Please enter a valid number between 1 and 3.';
                    return;
               }
               
               //Checks if the user's guess equals the random number
               if (userGuess === currentRandomNumber) {

                    //Limit the penguin's movement to a max of 3; Otherwise, allow the penguin to step
                    if (step >= 3) return;
                    step++;

                    //Call a function to move the penguin forward
                    movePenguin(step);

                    //If you guessed correctly 3x, show "You Won" message and disable the guessInput button. Reset the game
                    if (step === 3){
                    document.getElementById('guessButton').disabled = true;
                    document.getElementById('result').innerText = "Congratulations! You've made it across!";
                    guessInput.disabled = true; //disable the input field
                    setTimeout(resetGame, 1500); //reset the game after waiting to make sure the user sees the winning message
                    return;
                    }
               
                    //If correct, show the "Correct" message to the user
                    document.getElementById('result').innerText = `Correct! The penguin hops!`;
               } else {
                    //If incorrect, show the "Incorrect" message to the user and have the penguin fall into the water
                    document.getElementById('result').innerText = `Sorry, the correct number was ${currentRandomNumber}. The penguin falls!`;
                    penguin.classList.add('fall');
                    guessInput.disabled = true; // disable user input
                    document.getElementById('guessButton').disabled = true; //disable the guess button
                    setTimeout(resetGame, 1500); //Reset the game
                    }

               //Calls a function that generates a random number for the next round of the game
               generateRandomNumber();

               //Clears the field where the user types their guess
               guessInput.value = '';

               //Focus the cursor back on the input field
               guessInput.focus(); 
          }    

          //This function moves the penguin
          function movePenguin(step) {

               //This defines an array of pixel values that represent the horizontal positions of the penguin at each step
               const positions = [30, 140, 250, 360];

               //Assign the penguin to a constant
               const penguin = document.getElementById('penguin');

               //Sets the CSS left property of the penguin element to the value corresponding to the current step
               //Moves the penguin horizontally to a new position
               penguin.style.left = positions[step] + 'px';
          }

          //This function is designed to reset the game
          function resetGame() {

               //Assign the HTML elements to variables
               const guessInput = document.getElementById('userGuess');
               const guessButton = document.getElementById('guessButton');

               //Move the penguin back to the starting position
               document.getElementById(`penguin`).style.left = `30px`;

               //Remove the fall class so the penguin is ready for the next round
               document.getElementById(`penguin`).classList.remove(`fall`);

               //Clear any text displayed from the previous round
               document.getElementById(`result`).innerText = '';

               //Reset the game after a period of time
               setTimeout(() => {
                         step = 0; //Reset step counter
                         generateRandomNumber(); //Generate new random number
                         guessInput.disabled = false; //Enable guess input
                         guessButton.disabled = false; //Enable guess button
                         guessInput.focus(); //Focus on the input field
                    }, 500); //Length of time before restarting
          }







