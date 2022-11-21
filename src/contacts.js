export default function createContactsPage() {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    header.classList.add('header')
    header.textContent = "Eden's Sweets";
    content.appendChild(header);

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    content.appendChild(tabContainer);

    function createTabs(num) {
        let tabNames = ['Home', 'Menu', 'Contact'];
        let btnClasses = ['home', 'menu', 'contact'];
        for (let i = 0; i < num; i++) {
            let tab = document.createElement('button');
            tab.classList.add('btn');
            tab.classList.add(btnClasses[i]);
            tab.textContent = tabNames[i];
            tabContainer.appendChild(tab);
        }
    }

    createTabs(3);

    const centerPane = document.createElement('div');
    centerPane.classList.add('center-pane');
    content.appendChild(centerPane);

    const description = document.createElement('h3');
    description.classList.add('description');
    description.textContent = "Contacts"
    centerPane.appendChild(description);

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
        id est laborum.`;
    centerPane.appendChild(descriptionParagraph);
}