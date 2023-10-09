// Get the hash part of the window's URL (everything after the '#')
const { hash } = window.location;

// Decode the message from the hash (remove '#' and decode from base64)
const message = atob(hash.replace("#", ""));

// If a message exists in the hash, display it
if (message) {
  // Hide the message input form and show the message display section
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  // Set the message as the content of the h1 element
  document.querySelector("h1").innerHTML = message;
}

// Listen for form submission
document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Hide the message input form and show the share link section
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  // Get the user's input from the message input field
  const input = document.querySelector("#message-input");

  // Encrypt the input message using base64 encoding
  const encrypted = btoa(input.value);

  // Get the input field for displaying the encrypted message link
  const encryptedInput = document.querySelector("#link-input");

  // Set the value of the input field with the encrypted message link
  encryptedInput.value = `${window.location}#${encrypted}`;

  // Select the input field's content for easy copying
  encryptedInput.select();
});
