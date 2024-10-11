const typingAnimationElement = document.getElementById('typing-animation');

// Create an array of typing text
const typingTexts = ['Cloud Engineer               ', 'Devops Engineer               ', 'Cloud Consultant               '];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
  // Loop through each character and add it to the element
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 100); // Decreased delay to speed up the typing animation
  }

  // Once the animation is complete, reset the text and start over
  setTimeout(() => {
    typingAnimationElement.textContent = '';
    playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
  }, text.length * 100); // Adjusted delay accordingly
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);



function gitClick() {
    window.location.href = 'https://github.com/PrashantShri'
  }
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function showAlert(event) {
      event.preventDefault(); // Prevent the default form submission
      alert("Form submitted successfully!");
  }

  window.onload = function() {
  var hideform = document.getElementById("myForm");
  var openpop = document.getElementById("openpop");

  // Show the form and overlay when the button is clicked
  openpop.onclick = function() {
      hideform.style.display = "block";
  };

  // Detect clicks outside the form to close it
  document.onclick = function(event) {
      if (!hideform.contains(event.target) && event.target.id !== "openpop") {
          hideform.style.display = "none";
      }
  };
};
function gitClick() {
    window.location.href = 'https://github.com/PrashantShri'
  }
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function myFunction() {
var txt;
if (confirm("Press a button!")) {
txt = "You pressed OK!";
} else {
txt = "You pressed Cancel!";
}
document.getElementById("demo").innerHTML = txt;
}
