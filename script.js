//your JS code here. If required.
// Function to load form data from localStorage
function loadFormData() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');

    if (name) document.getElementById('name').value = name;
    if (email) document.getElementById('email').value = email;
    if (phone) document.getElementById('phone').value = phone;
}

// Function to save form data to localStorage
function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
}

// Function to clear localStorage and form
function clearStorage() {
    localStorage.clear();
    document.getElementById('user-form').reset();
}

// Load form data when the page is loaded
window.addEventListener('load', loadFormData);

// Save form data on form submission
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    saveFormData();
    alert('Form data saved to local storage!');
});

// Clear storage when the "Clear Storage" button is clicked
document.getElementById('clear-storage').addEventListener('click', clearStorage);
