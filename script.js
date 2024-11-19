let intervalId = null;                                                                      // Variable to store the clock interval

// Function to update the clock
function updateClock() {
  const now = new Date();                                                                   // Get the current time
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;          // Display the time in the clock element
}

// Function to start or stop the clock
function toggleClock() {                                        // Defined toggleClock function to be called when the button is clicked
  const button = document.getElementById('toggleButton');       // Finds button w/ ID 'toggleButton' & stores it in the variable 'button'
  if (intervalId === null) {                                    // Checks if the clock is not currently running (intervalId is null)
    intervalId = setInterval(updateClock, 1000);                // Starts the clock by calling 'updateClock' every 1000ms (1 second)
    button.textContent = "Stop Clock";                          // Changes the button's text to "Stop Clock", indicating that clicking it will stop the clock
  } else {                                                      // If the clock is already running (intervalId is not null)
    clearInterval(intervalId);                                  // Stops the clock by clearing the interval with the current intervalId
    intervalId = null;                                          // Resets intervalId to null, indicating the clock is no longer running

    // Extract the stopped time and convert it
    const stoppedTime = document.getElementById('clock').textContent;                       // Get the stopped time
    const militaryTime = timeConversion(stoppedTime + " AM");                               // Convert to military time (append AM/PM if needed)

    console.log(`Stopped time in military format: ${militaryTime}`);                        // Log the converted time
    button.textContent = "Start Clock";

    // Dynamically display the military time on the webpage
    const militaryTimeDisplay = document.createElement('p');                                // Create a new paragraph element
    militaryTimeDisplay.id = "militaryTime";                                                // Assign an ID to the new element
    document.querySelector('.container').appendChild(militaryTimeDisplay);                  // Add it to the container
    document.getElementById('militaryTime').textContent = `Military Time: ${militaryTime}`; // Update its content
    }
}

document.getElementById('toggleButton').addEventListener('click', toggleClock);             // Add event listener to the button

// Function to convert regular time to military time
function timeConversion(time) {
    let hours = parseInt(time.slice(0, 2));                 // Extract the first two characters of the time string using slice(0, 2)
    if (time.endsWith('PM') && hours !== 12) {              // if the string ends with 'PM' using time.endsWith('PM') and ...
                                                            // it's not already 12 PM (hours !== 12).
        hours += 12;                                        // Add 12 to the hours variable. (To convert it to a 24hr format).
        time = hours.toString() + time.slice(2, -3);        // Replace original hr in string w/ new hr using hours.toString().
                                                            // Remove 'PM' by slicing off last 3 characters using slice(2, -3).
    } else if (time.endsWith('AM') && hours === 12) {       // if the string ends with 'AM' using time.endsWith('AM') and ...
                                                            // Ensuring it's specifically 12 AM (hours === 12)
        time = "00" + time.slice(2, -3);                    // Replace the hr w/ "00" (midnight in 24-hour format) and ... 
                                                            // Remove 'AM' part by slicing off last 3 characters using slice(2, -3).
    } else {                                                // else...
        time = time.slice(0, -3);                           // For other times (AM not 12 or PM 12), just remove AM/PM
    }
    return time;                                            // Return the converted time
}

