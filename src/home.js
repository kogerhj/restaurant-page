export default function createHomePage() {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    header.classList.add(header)
    header.textContent = "Eden's Sweets";
    content.appendChild(content);

    const tabContainer = document.createElement('div');
    tabContainer.classList.add(tab-container);
    content.appendChild(tabContainer);

    const centerPane = document.createElement('div');
    centerPane.classList.add(center-pane);
    content.appendChild(centerPane);

    const description = document.createElement('h3');
    description.classList.add(description);
    description.textContent = "So what is it?"
    centerPane.appendChild(description);

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = "Lorem Ipsum";
    centerPane.appendChild(descriptionParagraph);

}