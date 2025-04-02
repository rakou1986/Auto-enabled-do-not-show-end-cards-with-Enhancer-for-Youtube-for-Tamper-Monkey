// ==UserScript==
// @name         set enabled efyt-cards-end-screens automatically
// @namespace    http://tampermonkey.net/
// @version      2025-03-28
// @description  Automatically set "do not show end screen cards" when using "Enhancer for Youtube".
// @author       rakou
// @match        https://www.youtube.com/*
// ==/UserScript==

(function() {
    'use strict';

    let intervalId = null;
    function checkAndClick() {
        const targetElement = document.querySelector('#efyt-cards-end-screens');
        if (targetElement) {
            targetElement.click();
            clearInterval(intervalId);
        }
    }

    intervalId = setInterval(checkAndClick, 5000);
})();
