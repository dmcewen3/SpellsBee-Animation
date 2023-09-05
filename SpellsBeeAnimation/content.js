// content.js
(function() {
    'use strict';

    // Add your custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); background-color: transparent; }
        50% { transform: scale(1.2); background-color: rgba(128, 128, 128, 0.5); }
        100% { transform: scale(1); background-color: transparent; }
    }

        @keyframes fastPulse {
            0% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.1); filter: brightness(1.5); }
            100% { transform: scale(1); filter: brightness(1); }
        }

        .pulse-animation {
            animation: pulse 0.5s;
        }

        .fast-pulse-animation {
            animation: fastPulse 0.5s;
        }
    `;

    document.head.appendChild(style);

    // Add keydown event listener to the page
    document.addEventListener('keydown', function(event) {
        const keyPressed = event.key.toLowerCase();
        const hexButtons = document.querySelectorAll('.keys-button.hex, .keys-button.middle.hex');

        hexButtons.forEach(button => {
            const buttonText = button.textContent.trim().toLowerCase();
            
            if (keyPressed === buttonText) {
                if (button.classList.contains('middle')) {
                    button.classList.add('fast-pulse-animation');
                    setTimeout(() => {
                        button.classList.remove('fast-pulse-animation');
                    }, 200);
                } else {
                    button.classList.add('pulse-animation');
                    setTimeout(() => {
                        button.classList.remove('pulse-animation');
                    }, 200);
                }
            }
        });
    });
})();
