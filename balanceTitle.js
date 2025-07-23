/*
 * Automatically splits a title into two visually balanced lines by inserting a <br> tag
 * at the most even word boundary based on character count.
 *
 * Usage:
 * - Add an element with the selector (class="balanced-title") to your HTML.
 * 
 * Example:
 * <h1 class="balanced-title">This is a great title</h1>
 * 
 * Note:
 * - Best used when loaded at the end of the <body>.
*/

function balanceTitle(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  // Split the text into words
  const words = el.textContent.trim().split(" ");
  if (words.length < 2) return;

  // Find the split point with the most balanced character count
  let bestSplit = 1;
  let smallestDiff = Infinity;

  for (let i = 1; i < words.length; i++) {
    const firstPart = words.slice(0, i).join(" ");
    const secondPart = words.slice(i).join(" ");
    const diff = Math.abs(firstPart.length - secondPart.length);

    if (diff < smallestDiff) {
      smallestDiff = diff;
      bestSplit = i;
    }
  }

  // Create DOM elements
  const firstText = document.createTextNode(words.slice(0, bestSplit).join(" "));
  const br = document.createElement("br");
  const secondText = document.createTextNode(words.slice(bestSplit).join(" "));

  // Clear and replace the element's content
  el.replaceChildren(firstText, br, secondText);
}

document.addEventListener("DOMContentLoaded", () => {
  balanceTitle(".balanced-title");
});
