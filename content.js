function checkAndClickButton() {
  const button = document.querySelector(".ytp-ad-skip-button:nth-child(1)"); // Replace with the appropriate selector for your button

  if (button) {
    if (window.getComputedStyle(button).display !== "none") {
      button.click();
    }
  }
}

// Set an interval to continuously check for the button
const checkInterval = setInterval(checkAndClickButton, 100); // Check every 100 milisecond