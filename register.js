// Placeholder for registration logic
// In a real app, this would send data to a backend or save to user.json via server-side code

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.username.value.trim();
    const email = this.email.value.trim();
    const password = this.password.value;
    
    // For demo: show a success message
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});
