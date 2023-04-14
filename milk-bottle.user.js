// ==UserScript==
// @name                Milk Bottle
// @namespace           http://tampermonkey.net/
// @version             0.1.1
// @description         Small improvements to the IDE of some online courses
// @description:ru      Небольшие улучшения для IDE некоторых онлайн-курсов
// @author              v9gel
// @match               https://practicum.yandex.ru/trainer/*/lesson/*
// @match               https://htmlacademy.ru/courses/*/run/*
// @icon                https://raw.githubusercontent.com/v9gel/milk-bottle/main/icon-64.png
// @grant               none
// @updateURL           https://raw.githubusercontent.com/v9gel/milk-bottle/main/milk-bottle.user.js
// @downloadURL         https://raw.githubusercontent.com/v9gel/milk-bottle/main/milk-bottle.user.js
// @supportURL          https://github.com/v9gel/milk-bottle/issues
// @homepageURL         https://github.com/v9gel/milk-bottle
// ==/UserScript==

(function () {
  'use strict';

  switch (location.hostname) {
    case 'practicum.yandex.ru':
      document.addEventListener('keydown', (event) => {
        saveHotKeyHandler(event, '[data-test-id="check-task-button"]');
      });
      break;

    case 'htmlacademy.ru':
      document.addEventListener('keydown', (event) => {
        saveHotKeyHandler(event, '.js--server-check')
      });
      break;
  
    default:
      break;
  }
})();

/**
 * Handler for saving hotkeys
 * @param {KeyboardEvent} event 
 * @param {string} selectorToClick 
 */
function saveHotKeyHandler(event, selectorToClick) {
  if ((event.metaKey || event.ctrlKey) && event.key === 's') {
    event.preventDefault();

    const checkTaskButton = document.querySelector(selectorToClick);

    if (checkTaskButton) {
      checkTaskButton.click();
    }
  }
}