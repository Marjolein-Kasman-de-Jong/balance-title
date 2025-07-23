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
 * - This script modifies the innerHTML of the target element.
 * - Best used when loaded at the end of the <body>.
 */

function balanceTitle(selector) {
    const el = document.querySelector(selector);
    if (!el) return;

    const words = el.textContent.trim().split(" ");
    if (words.length < 2) return; // niks te verdelen

    // Try all possible splits and choose the one with the smallest difference in length
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

    // Build the new content using <br>
    const balancedHTML = `
      ${words.slice(0, bestSplit).join(" ")}<br>
      ${words.slice(bestSplit).join(" ")}
    `;
    el.innerHTML = balancedHTML;
}

// Execute after the page has loaded.
document.addEventListener("DOMContentLoaded", () => {
    balanceTitle(".balanced-title");
});
