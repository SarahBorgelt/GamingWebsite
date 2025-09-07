
          let currentRandomNumber = null;
          let step = 0;
          let angle = -10;
          let direction = 1;
          
          function generateRandomNumber() {
               // Generate a random number between 1 and 5
               currentRandomNumber = Math.floor(Math.random() * 5) + 1;
          }

          function waveFlag() {
               const flag = document.querySelector(`.flag`);
               
               if (!flag) return;
               angle += direction * 0.5;
               
               if (angle > 5 || angle < -10){
                    direction *= -1;
               }

               flag.style.transform = `rotate(${angle}deg)`;
               requestAnimationFrame(waveFlag);
          };

          window.onload = () => {
                    waveFlag(); generateRandomNumber();
               };

          function checkGuess() {
               const userGuess = parseInt(document.getElementById('userGuess').value);
               const guessInput = document.getElementById('userGuess');
               const penguin = document.getElementById('penguin');
               

               // Returns error if the input is not a number or out of range
               if (isNaN(userGuess) || userGuess < 1 || userGuess > 5){
                    document.getElementById('result').innerText = 'Please enter a valid number between 1 and 5.';
                    return;
               }
               
               if (userGuess === currentRandomNumber) {
                    if (step >= 3) return;
                    step++;
                    movePenguin(step);

                    if (step === 3){
                    document.getElementById('guessButton').disabled = true;
                    document.getElementById('result').innerText = "Congratulations! You've made it across!";
                    guessInput.disabled = true;
                    setTimeout(resetGame, 1500);
                    return;
                    }
               
                    document.getElementById('result').innerText = `Correct! The penguin hops!`;
               }
                else {
                    document.getElementById('result').innerText = `Sorry, the correct number was ${currentRandomNumber}. The penguin falls!`;
                    penguin.classList.add('fall');
                    guessInput.disabled = true;
                    document.getElementById('guessButton').disabled = true;
                    setTimeout(resetGame, 1500);
                    }

               generateRandomNumber();
               guessInput.value = '';
               guessInput.focus(); 
          }    

          function movePenguin(step) {
               const positions = [30, 140, 250, 360];
               const penguin = document.getElementById('penguin');
               penguin.style.left = positions[step] + 'px';
          }

          function resetGame() {
               const guessInput = document.getElementById('userGuess');
               const guessButton = document.getElementById('guessButton');

          document.getElementById(`penguin`).style.left = `30px`;

          document.getElementById(`penguin`).classList.remove(`fall`);

          document.getElementById(`result`).innerText = '';

          setTimeout(() => {
                    step = 0;
                    generateRandomNumber();
                    guessInput.disabled = false;
                    guessButton.disabled = false;
                    guessInput.focus();
               }, 500);
          }







