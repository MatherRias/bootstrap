// Declare const
const keys = document.querySelector("header");
const style = keys.getAttribute("style-type");

if (style == "default") {
    const link_home = "https://matherrias.github.io"
    const link_repository = keys.getAttribute("link-repository");
    // Contents
    const headerContent = document.createElement("div");
    headerContent.innerHTML = `
    <nav>
        <ul>
            <li><a href="${link_home}">Home</a></li>
            <li><a href="${link_repository}">Repository</a></li>
        </ul>
    </nav>
    `;
    keys.appendChild(headerContent);

    // Reset some default styles
    const elementsToReset = ['body', 'h1', 'h2', 'p', 'ul', 'li'];

    elementsToReset.forEach(element => {
        const elements = document.querySelectorAll(element);
        elements.forEach(el => {
            el.style.margin = '0';
            el.style.padding = '0';
        });
    });

    // Style the header
    const header = document.querySelector('header');
    header.style.backgroundColor = '#333';
    header.style.color = '#fff';
    header.style.textAlign = 'center';
    header.style.padding = '20px 0';

    // Style the navigation menu
    const navUl = document.querySelector('nav ul');

    if (navUl) {
        navUl.style.listStyle = 'none';

        const navItems = document.querySelectorAll('nav ul li');
        navItems.forEach(navItem => {
            navItem.style.display = 'inline';
            navItem.style.marginRight = '20px';
        });

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(navLink => {
            navLink.style.textDecoration = 'none';
            navLink.style.color = '#fff';
            navLink.style.fontWeight = 'bold';
        });
    }
}
