import { prefersReducedMotion } from "./prefers-reduced-motion";
import { sleep } from "./sleep";

/**
 * <span data-translation="">
 * data-translation-title=""
 * data-translation-alt=""
 */
export async function translationAnimation() {
  for (let element of document.querySelectorAll("[data-translation-title]")) {
    let translation = element.getAttribute("data-translation-title");
    let english = element.getAttribute("title");
    element.setAttribute("data-english-title", english);
    element.setAttribute("title", translation);
  }
  for (let element of document.querySelectorAll("[data-translation-alt]")) {
    let translation = element.getAttribute("data-translation-alt");
    let english = element.getAttribute("alt");
    element.setAttribute("data-english-alt", english);
    element.setAttribute("alt", translation);
  }
  for (let element of document.querySelectorAll(
    "[data-translation-aria-label]"
  )) {
    let translation = element.getAttribute("data-translation-aria-label");
    let english = element.getAttribute("aria-label");
    element.setAttribute("data-english-aria-label", english);
    element.setAttribute("aria-label", translation);
  }
  const promisesToAwait = [];
  for (let element of document.querySelectorAll("[data-translation]")) {
    promisesToAwait.push(translateOneElement(element));
  }
  await Promise.all(promisesToAwait);
}

async function translateOneElement(element, reverse = false) {
  let translation = element.getAttribute(
    reverse ? "data-english" : "data-translation"
  );
  let english = element.innerText;
  element.setAttribute(reverse ? "data-translation" : "data-english", english);
  const maxLen = Math.max(translation.length, english.length) + 1;
  translation = translation.padEnd(maxLen, " ");
  english = english.padEnd(maxLen, " ");
  for (let i = 0; i < maxLen; i++) {
    element.innerText = translation.slice(0, i) + english.slice(i, maxLen);
    if (!prefersReducedMotion()) {
      await sleep(10);
    }
  }
  element.innerText = element.innerText.trim();
}

export async function translationReverseAnimation() {
  for (let element of document.querySelectorAll("[data-english-title]")) {
    let translation = element.getAttribute("data-english-title");
    let english = element.getAttribute("title");
    element.setAttribute("data-translation-title", english);
    element.setAttribute("title", translation);
  }
  for (let element of document.querySelectorAll("[data-english-alt]")) {
    let translation = element.getAttribute("data-english-alt");
    let english = element.getAttribute("alt");
    element.setAttribute("data-translation-alt", english);
    element.setAttribute("alt", translation);
  }
  for (let element of document.querySelectorAll("[data-english-aria-label]")) {
    let translation = element.getAttribute("data-english-aria-label");
    let english = element.getAttribute("aria-label");
    element.setAttribute("data-translation-aria-label", english);
    element.setAttribute("aria-label", translation);
  }
  const promisesToAwait = [];
  for (let element of document.querySelectorAll("[data-english]")) {
    const reverse = true;
    promisesToAwait.push(translateOneElement(element, reverse));
  }
  await Promise.all(promisesToAwait);
}
