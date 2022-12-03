export default function createHomeTab() {
    const centerPane = document.createElement('div');
    centerPane.classList.add('center-pane');
    content.appendChild(centerPane);

    const description = document.createElement('h3');
    description.classList.add('description');
    description.textContent = "This is the home tab"
    centerPane.appendChild(description);

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.`;
    centerPane.appendChild(descriptionParagraph);
}