import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactsPage from "./contacts.js";

createHomePage();

function changeTabs() {
    let tabButtons = document.querySelectorAll('.btn');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', () => console.log("it works"))
    }
}

changeTabs();



