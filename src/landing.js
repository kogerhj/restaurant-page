import createHomeTab from "./home";
import createMenuTab from "./menu";
import createContactsTab from "./contacts";

export default function createLandingPage() {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    header.classList.add('header')
    header.textContent = "Eden's Sweets";
    content.appendChild(header);

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    content.appendChild(tabContainer);

    function createTabs() {
        const homeButton = document.createElement('button');
        homeButton.classList.add('btn');
        homeButton.textContent = 'Home';
        homeButton.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return
            setActive(homeButton);
            createHomeTab();
        });
        const menuButton = document.createElement('button');
        menuButton.classList.add('btn');
        menuButton.textContent = 'Menu';
        menuButton.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return
            setActive(menuButton);
            createMenuTab();
        });

        const contactsButton = document.createElement('button');
        contactsButton.classList.add('btn');
        contactsButton.textContent = 'Contacts';
        contactsButton.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return
            setActive(contactsButton);
            createContactsTab();
        });

        tabContainer.appendChild(homeButton);
        tabContainer.appendChild(menuButton);
        tabContainer.appendChild(contactsButton);
    }
    createTabs();

    function setActive(button) {
        const buttons = document.querySelectorAll('.btn')

        buttons.forEach((button) => {
            if (button !== this) {
                button.classList.remove('active')
            }
        })
        button.classList.add('active')
    }

    createHomeTab();
}
