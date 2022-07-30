const navigation = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');

//creat nab bars
const navBars = () => {

    let navUI = '';
    // looping  all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    navigation.innerHTML = navUI;
};

const off = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
// adding  active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: yellow;";
    };
};

// remove  active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};



const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = off(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);

// Scroll by iD

const scrol = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};


navBars();
scrol();
















