let userNumberChoices = [];


function addNumber() {
  // Get the user's number choice from the input field
  let numberInput = document.getElementById("numberInput");
  let number = parseInt(numberInput.value);

  // Check that the user entered a number between 1 and 49
  if (isNaN(number) || number < 1 || number > 49) {
    alert("Please enter a number between 1 and 49.");
    return;
  }

  // Check that the user has not already entered this number
  if (userNumberChoices.includes(number)) {
    alert("You have already entered this number. Please choose a different number.");
    return;
  }

  // Check that the user has not already entered 6 numbers
  if (userNumberChoices.length >= 6) {
    alert("You have already entered 6 numbers.");
    return;
  }

  // Add the user's number choice to the array and display it in the list
  userNumberChoices.push(number);
  let numberList = document.getElementById("numberList");
  let numberItem = document.createElement("li");
  numberItem.textContent = number;
  numberList.appendChild(numberItem);

  // Clear the input field for the next number
  numberInput.value = "";


  
}

function playLottery() {
  // Check if the user has entered 6 numbers
  if (userNumberChoices.length != 6) {
    alert("Please enter 6 numbers first.");
    return;
  }

  // Clear the old results
  let resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  // Generate 6 unique random numbers between 1 and 49
  let lotteryNumbers = [];
  while (lotteryNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    if (!lotteryNumbers.includes(randomNumber)) {
      lotteryNumbers.push(randomNumber);
    }
  }

    // Sort the lottery numbers
    lotteryNumbers.sort(function(a, b) {
        return a - b;
      });


      let resultItem = document.createElement("li");
      
      
      let tutanNumaralar=[];
      // Compare the user's numbers to the lottery numbers and count the matches
      let numMatches = 0;
      for (let i = 0; i < userNumberChoices.length; i++) {
        if (lotteryNumbers.includes(userNumberChoices[i])) {
          numMatches++;
          tutanNumaralar.push(userNumberChoices[i]);
          resultItem.classList.add("match");
        }
      }
      resultItem.textContent = "Tutan numaralar: " + tutanNumaralar.join(", ");
      resultsList.appendChild(resultItem);


      // Display the results in the list
      resultItem = document.createElement("li");
      resultItem.textContent = "Lottery numbers: " + lotteryNumbers.join(", ");
      resultsList.appendChild(resultItem);


      resultItem = document.createElement("li");
      resultItem.textContent = "Matches: " + numMatches;
      resultsList.appendChild(resultItem);

  if (numMatches == 6) {
    resultItem = document.createElement("li");
    resultItem.textContent = "Congratulations, you won the lottery!";
    resultsList.appendChild(resultItem);
  }


}