document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Student", "Web Developer", "App Developer"], // Words to animate
        typeSpeed: 50, // Speed of typing
        backSpeed: 25, // Speed of backspacing
        backDelay: 1000, // Delay before starting to backspace
        startDelay: 500, // Delay before typing starts
        loop: true, // Loop the animation
        showCursor: true, // Show the cursor
        cursorChar: '|', // Character for the cursor
    };

    var typed = new Typed('#element', options);
})