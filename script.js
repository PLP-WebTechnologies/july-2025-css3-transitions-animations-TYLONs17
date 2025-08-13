/*
 * script.js - The Atomic Activation Sequence (Focused Interactivity)
 * This script controls interactive elements on the "I AM ATOMIC" themed web page.
 * It demonstrates:
 * - Event handling for buttons and form submission.
 * - At least 2 custom interactive features created from scratch (Form Validation, Message Transformer).
 * - CSS3 Transitions triggered by JavaScript.
 * - JavaScript Functions: Scope, Parameters & Return Values.
 * Each part is clearly commented and organized.
 */

// Global Scope Variables (Part 2: Scope)
// These flags control the state of interactive elements across different functions.
let intelPanelVisible = false; // Controls the visibility of the intelligence panel.


// Part 1: Variable Declarations (DOM References)
// -----------------------------------------------------------------------------

// DOM element references for Shadow Garden Application Form
const applicationForm = document.getElementById('applicationForm');
const applicantNameInput = document.getElementById('applicantName');
const applicantEmailInput = document.getElementById('applicantEmail');
const secretCodeInput = document.getElementById('secretCode');
const motivationTextarea = document.getElementById('motivation');

// Error message spans for form validation
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const codeError = document.getElementById('codeError');
const motivationError = document.getElementById('motivationError');

// DOM element references for Atomic Message Transformer
const inputMessageTextarea = document.getElementById('inputMessage');
const transformMessageBtn = document.getElementById('transformMessageBtn');
const transformedOutputSpan = document.getElementById('transformedOutput');

// DOM element references for Shadow Intelligence Panel
const intelPanel = document.getElementById('intelPanel');
const toggleIntelPanelBtn = document.getElementById('toggleIntelPanelBtn');

// Initial display setup for message transformer output
if (transformedOutputSpan) {
    transformedOutputSpan.textContent = "Ready for transformation...";
}


// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// -----------------------------------------------------------------------------

/**
 * @function validateApplicationForm
 * @description Performs custom JavaScript validation for the Shadow Garden application form.
 * This is one of the two custom interactive features.
 * (Part 2: Custom Function Example 1)
 * (Part 2: Demonstrates conditionals and how functions can trigger DOM changes)
 * (Part 3: No CSS animation directly triggered, but error display is a DOM change)
 * @param {Event} event - The form submission event.
 * @returns {boolean} - Returns true if the form is valid, false otherwise.
 */
function validateApplicationForm(event) {
    event.preventDefault(); // Prevent default HTML form submission to allow custom validation

    let isValid = true; // Local Scope: This variable is only accessible within this function.

    // Reset all error messages before re-validation
    nameError.textContent = '';
    emailError.textContent = '';
    codeError.textContent = '';
    motivationError.textContent = '';

    // Validate Codename (applicantName)
    if (applicantNameInput.value.trim() === '') {
        nameError.textContent = 'Codename is required for vital intelligence.';
        isValid = false;
    } else if (applicantNameInput.value.trim().length < 3) {
        nameError.textContent = 'Codename must be at least 3 characters.';
        isValid = false;
    }

    // Validate Encrypted Email (applicantEmail)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Local Scope: emailPattern is local.
    if (applicantEmailInput.value.trim() === '') {
        emailError.textContent = 'Encrypted email is crucial for secure comms.';
        isValid = false;
    } else if (!emailPattern.test(applicantEmailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid encrypted email format.';
        isValid = false;
    }

    // Validate Secret Activation Code (secretCode)
    if (secretCodeInput.value === '') {
        codeError.textContent = 'Secret activation code is absolutely essential.';
        isValid = false;
    } else if (secretCodeInput.value.length < 8) {
        codeError.textContent = 'Code must be at least 8 characters for atomic security.';
        isValid = false;
    } else if (!/[A-Z]/.test(secretCodeInput.value) || !/[0-9]/.test(secretCodeInput.value)) {
        codeError.textContent = 'Code needs at least one uppercase letter and one number.';
        isValid = false;
    }

    // Validate Motivation (motivation)
    if (motivationTextarea.value.trim() === '') {
        motivationError.textContent = 'Your atomic motivation must be declared.';
        isValid = false;
    } else if (motivationTextarea.value.trim().length < 50) {
        motivationError.textContent = 'Please elaborate more on your atomic ambitions (min 50 chars).';
        isValid = false;
    }

    // If all fields are valid, proceed with form submission (conceptual)
    if (isValid) {
        alert('Application submitted! Your atomic potential has been recognized. Standby for further instructions.');
        applicationForm.reset(); // Clear the form
        // In a real application, you would send this data to a server using fetch() or XMLHttpRequest
    } else {
        alert('Application validation failed. Review your intel and try again.');
    }
    return isValid; // Returns a boolean value
}

/**
 * @function generateAtomicCipher
 * @description Transforms a given message into a simple "atomic cipher" using a substitution method.
 * (Part 2: Demonstrates parameters and return values)
 * (Part 2: How functions can calculate values)
 * @param {string} message - The original message to transform.
 * @returns {string} - The transformed cipher message.
 */
function generateAtomicCipher(message) {
    // Local Scope: `cipherMap` is only accessible within this function.
    const cipherMap = {
        'a': '⚛️', 'b': '💥', 'c': '⚡', 'd': '🌌', 'e': '✨',
        'f': '🔥', 'g': '🌀', 'h': '💫', 'i': '🌠', 'j': '🌟',
        'k': '🌟', 'l': '🔥', 'm': '⚛️', 'n': '💥', 'o': '⚡',
        'p': '🌌', 'q': '✨', 'r': '🔥', 's': '🌀', 't': '💫',
        'u': '🌠', 'v': '🌟', 'w': '🌟', 'x': '🔥', 'y': '⚛️', 'z': '💥',
        ' ': '... ' // Spaces become ellipses for dramatic effect
    };
    let transformedResult = '';

    // Loop example: Iterates through each character of the message
    for (let i = 0; i < message.length; i++) { // Simple for loop
        const char = message[i].toLowerCase();
        transformedResult += cipherMap[char] || char; // Use ciphered char or original if not in map
    }
    return transformedResult; // Returns the transformed string
}

/**
 * @function transformAtomicMessage
 * @description Triggers the transformation of the input message and updates the DOM.
 * This is the second custom interactive feature.
 * (Part 2: Custom Function Example 2)
 */
function transformAtomicMessage() {
    const originalMessage = inputMessageTextarea.value.trim();

    if (originalMessage === '') {
        transformedOutputSpan.textContent = "Enter a message to transform.";
        transformedOutputSpan.style.color = '#f87171'; // Red for warning
        return;
    }

    const transformedCipher = generateAtomicCipher(originalMessage); // Uses generateAtomicCipher function

    transformedOutputSpan.textContent = transformedCipher;
    transformedOutputSpan.style.color = '#38a169'; // Green for success
}


/**
 * @function toggleIntelPanel
 * @description Toggles the visibility of the intelligence panel using CSS transitions.
 * (Part 3: Combining CSS Animations with JavaScript - Toggling visibility with transitions)
 * (Part 2: Custom Function Example)
 */
function toggleIntelPanel() {
    if (intelPanel) {
        intelPanelVisible = !intelPanelVisible; // Toggle global state flag

        if (intelPanelVisible) {
            intelPanel.classList.add('visible'); // Add class to trigger CSS transition
            toggleIntelPanelBtn.textContent = "Hide Intel Panel";
        } else {
            intelPanel.classList.remove('visible'); // Remove class to trigger CSS transition back
            toggleIntelPanelBtn.textContent = "Show Intel Panel";
        }
    }
}


// Part 3: Combining CSS Animations with JavaScript (Event Handling & DOM Interactions)
// -----------------------------------------------------------------------------

// Event handling for Shadow Garden Application Form submission
if (applicationForm) {
    applicationForm.addEventListener('submit', validateApplicationForm);

    // Optional: Live validation feedback as user types (Event handling for inputs)
    // These listeners trigger immediate feedback, demonstrating event handling on inputs.
    applicantNameInput.addEventListener('input', () => {
        if (applicantNameInput.value.trim().length < 3 && applicantNameInput.value.trim() !== '') {
            nameError.textContent = 'Codename must be at least 3 characters.';
        } else {
            nameError.textContent = '';
        }
    });
    applicantEmailInput.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(applicantEmailInput.value.trim()) && applicantEmailInput.value.trim() !== '') {
            emailError.textContent = 'Please enter a valid encrypted email format.';
        } else {
            emailError.textContent = '';
        }
    });
    secretCodeInput.addEventListener('input', () => {
        if (secretCodeInput.value.length < 8 && secretCodeInput.value !== '') {
            codeError.textContent = 'Code must be at least 8 characters.';
        } else if (!/[A-Z]/.test(secretCodeInput.value) || !/[0-9]/.test(secretCodeInput.value)) {
             codeError.textContent = 'Code needs at least one uppercase letter and one number.';
        } else {
            codeError.textContent = '';
        }
    });
    motivationTextarea.addEventListener('input', () => {
        if (motivationTextarea.value.trim().length < 50 && motivationTextarea.value.trim() !== '') {
            motivationError.textContent = 'Please elaborate more (min 50 chars).';
        } else {
            motivationError.textContent = '';
        }
    });
}

// Event handling for Atomic Message Transformer button
if (transformMessageBtn) {
    transformMessageBtn.addEventListener('click', transformAtomicMessage);
}

// Event listener for Shadow Intelligence Panel toggle button
if (toggleIntelPanelBtn) {
    toggleIntelPanelBtn.addEventListener('click', toggleIntelPanel);
}

// Initial calls when the page loads (DOM content loaded)
document.addEventListener('DOMContentLoaded', () => {
    // No initial JavaScript-driven elements from previous projects to set up here.
});
