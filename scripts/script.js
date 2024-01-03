// Rectangle Animation in index.html
const rectangle1 = document.getElementById('rectangle-1');
const rectangle2 = document.getElementById('rectangle-2');

function activateAnimation() {
    rectangle1.style.transform = 'translate(-14px, -14px)';
    rectangle2.style.transform = 'translate(-28px, -28px)';
}

function resetAnimation() {
    rectangle1.style.transform = 'translate(0, 0)';
    rectangle2.style.transform = 'translate(0, 0)';
}

// Responsive Navigation Bar Animation
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinksContainer = document.querySelector('.nav-links-container');

    burgerMenu.addEventListener('click', function () {
        navLinksContainer.classList.toggle('show');
        toggleBurgerMenu();
    });

    function toggleBurgerMenu() {
        burgerMenu.classList.toggle('open');

        if (!burgerMenu.classList.contains('open')) {
            navLinksContainer.classList.remove('show');
        }
    }
});


// Redirection Functions applied to the buttons
function redirectToPreregister() {
    window.location.href = './pages/preregister-page.html';
}

function redirectToRegister() {
    window.location.href = 'register.html';
}

// Read More Button in preregister-page.html
function toggleReadMore() {
    var content = document.getElementById("about-the-event-content");
    var button = document.getElementById("about-read-more-btn");

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        button.textContent = "Read more >";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        button.textContent = "Read less >";
    }
}

// Restricted use of the submission button in register.html
const submitBtn = document.getElementById('submission-btn');
const registrationForm = document.getElementById('form-container');

function areInputsFilled() {
    const firstName = document.getElementById('first-name-input').value;
    const lastName = document.getElementById('last-name-input').value;
    const email = document.getElementById('email-reg-input').value;

    return firstName !== '' && lastName !== '' && email !== '';
}

function handleSubmit() {
    if (areInputsFilled()) {
        window.location.href = 'thanks.html';
    } else {
        alert('Please fill in all the required fields');
    }
}

submitBtn.addEventListener('click', handleSubmit);

// Folding menu in thanks.html
function toggleCalendarMenu() {
    var menu = document.getElementById('calendar-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';

    var menuItems = document.querySelectorAll('.menu-link-item');
    menuItems.forEach(function (item, index) {
        setTimeout(function () {
            item.classList.toggle('menu-link-item-show');
        }, index * 200);
    });
}

// Toggle Sign Up Sections
function toggleSignupSections() {
    var signupOptions = document.getElementById('sign-up-first-form');
    var signupSection = document.getElementById('sign-up-second-form');

    signupOptions.style.display = 'none';
    signupSection.classList.add('reveal');
}

// Toggle Log In Sections
function toggleLoginSections() {
    var loginOptions = document.getElementById('log-in-first-form');
    var loginSection = document.getElementById('log-in-second-form');

    loginOptions.style.display = 'none';
    loginSection.classList.add('reveal');
}