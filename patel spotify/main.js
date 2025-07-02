       // Handle login form submission
       function loginUser(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (email && password) {
            // Switch to main interface
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('spotifyInterface').style.display = 'block';
        } else {
            alert('Please enter both email and password');
        }
    }
    
    // Show logout overlay
    function showLogout() {
        const overlay = document.getElementById('logoutOverlay');
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'block';
        }
    }
    
    // Handle logout
    function logout() {
        document.getElementById('logoutOverlay').style.display = 'none';
        document.getElementById('spotifyInterface').style.display = 'none';
        document.getElementById('loginPage').style.display = 'flex';
        
        // Clear form fields
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
    
    // Close logout overlay when clicking elsewhere
    document.addEventListener('click', function(event) {
        const overlay = document.getElementById('logoutOverlay');
        const profileBtn = document.getElementById('be');
        
        if (overlay.style.display === 'block' && 
            event.target !== overlay && 
            !overlay.contains(event.target) &&
            event.target !== profileBtn &&
            !profileBtn.contains(event.target)) {
            overlay.style.display = 'none';
        }
    });