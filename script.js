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

// Example usage
console.log(timeConversion("02:45:00 PM")); // Output: "14:45:00"
console.log(timeConversion("12:45:00 PM")); // Output: "12:45:00"
console.log(timeConversion("12:45:00 AM")); // Output: "00:45:00"
console.log(timeConversion("02:45:00 AM")); // Output: "02:45:00"
