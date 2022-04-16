// ==UserScript==
// @name        discordblock
// @namespace   https://github.com/Waabajack/discordblock
// @match       https://com.discord/*
// @downloadURL https://github.com/Waabajack/discordblock/blob/main/script.user.js
// @homepageURL https://github.com/Waabajack/discordblock
// @supportURL  https://github.com/Waabajack/discordblock/issues
// @grant       none
// @version     1.0
// @author      Anonymous
// @description 10/28/2020, 1:37:40 PM
// ==/UserScript==

function hideBlocked(){
    const blocked = document.querySelectorAll('[class^="groupStart"]'); // Find all "Blocked Messages"
    blocked.forEach(blokMsg => {
        if(blokMsg.style.display !== "none") blokMsg.style.display = "none"; // Hide the message if it's not already hidden.
    });
};
setInterval(hideBlocked, 500); // Repeat every half second. Recommended to keep at 500, but raise/ lower if you wish.
