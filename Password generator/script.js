// script.js

document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");
    const copyButton = document.getElementById("copy-button");
    const passwordField = document.getElementById("password");
    const lengthField = document.getElementById("length");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=<>?";

    generateButton.addEventListener("click", function () {
        const length = parseInt(lengthField.value);
        const useUppercase = uppercaseCheckbox.checked;
        const useLowercase = lowercaseCheckbox.checked;
        const useNumbers = numbersCheckbox.checked;
        const useSymbols = symbolsCheckbox.checked;

        if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
            alert("Please select at least one option.");
            return;
        }

        let availableChars = "";
        if (useUppercase) availableChars += uppercaseChars;
        if (useLowercase) availableChars += lowercaseChars;
        if (useNumbers) availableChars += numberChars;
        if (useSymbols) availableChars += symbolChars;

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            password += availableChars.charAt(randomIndex);
        }

        passwordField.value = password;

        // Show the copy button
        copyButton.classList.remove("visually-hidden-button");
    });

    copyButton.addEventListener("click", function () {
        // Copy the generated password to the clipboard
        passwordField.select();
        document.execCommand("copy");

        // Prevent the default copy behavior (no announcement)
        return false;
    });
});
