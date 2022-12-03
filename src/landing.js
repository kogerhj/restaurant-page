export default function createLandingPage() {
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
            tab.setAttribute('id', btnClasses[i]);
            tab.textContent = tabNames[i];
            tabContainer.appendChild(tab);
        }
    }
    createTabs(3);
}