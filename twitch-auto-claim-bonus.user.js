// ==UserScript==
// @name Twitch Auto Claim Bonus
// @icon  https://i.imgur.com/bgeDZWC.png
// @version 1.0
// @author SHUTDOWN
// @description Automatically claim twitch channel points.
// @match https://www.twitch.tv/*
// @match https://dashboard.twitch.tv/*
// @license MIT
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