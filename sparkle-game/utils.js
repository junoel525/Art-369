/**
 * Converts an HTML string into a DOM element.
 * @param {string} htmlString - The HTML string to convert
 * @returns {HTMLElement} - The resulting DOM element.
 */
function htmlStringToElement(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    return template.content.firstElementChild;
}