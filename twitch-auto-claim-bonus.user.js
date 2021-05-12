// ==UserScript==
// @name          Twitch Auto Claim Bonus
// @icon          https://raw.githubusercontent.com/SHUTDOWN45/Twitch-Auto-Claim-Bonus/main/icon.png
// @description   Automatically claim twitch channel points.
// @author        SHUTDOWN
// @copyright     2021, SHUTDOWN
// @version       1.0
// @license       MIT
// @match         https://www.twitch.tv/*
// @match         https://dashboard.twitch.tv/*
// @homepage      https://github.com/SHUTDOWN45/Twitch-Auto-Claim-Bonus
// @supportURL    https://github.com/SHUTDOWN45/Twitch-Auto-Claim-Bonus/issues
// @updateURL     https://raw.githubusercontent.com/SHUTDOWN45/Twitch-Auto-Claim-Bonus/master/twitch-auto-claim-bonus.user.js
// @downloadURL   https://raw.githubusercontent.com/SHUTDOWN45/Twitch-Auto-Claim-Bonus/master/twitch-auto-claim-bonus.user.js
// @grant none
// ==/UserScript==

let chest = setInterval(() => {
  
  var points = document.querySelectorAll(".community-points-summary button");
  
  if (points.length > 1) {
    console.log('+50 Points');
    points[1].click(); 
  }
  
}, Math.random() * 1800 + 7200);

console.log("[ENABLE] Twitch Auto Claim Bonus");
