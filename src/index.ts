// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
import data from './utils/textDictionary.json';
import contactData from './utils/linkTextDictionary.json';
import { stylesLoaded } from "./styles/index";
import TemplateComponent from './components';
import AvatarComponent from './components';
import {
    // createListComponent,
    createParagraphElement,
    createHeaderElement,
    splitParagraphElement
} from "./components";



window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    stylesLoaded();

    const navElement = document.querySelector('nav');
    const mainElement = document.querySelector('main');
    const footerElement = document.querySelector('footer'); 
    // const list = createListComponent(data.sections); 

    const p: Node = createParagraphElement(data.home.collabSlug);
    const h1Left = createHeaderElement({
        data: data.home.lp,
        el: 'header1-element'
    });
    const h1Right = createHeaderElement({
        data: data.home.ch, 
        el: 'header1-element'
    });

    const contact = splitParagraphElement(contactData.homepage);

    const navComponent = TemplateComponent('nav-element');
    navComponent.content.appendChild(p);

    navElement!.appendChild(navComponent.content);
    const AvatarElement: Node = new AvatarComponent;

    // mainElement!.appendChild(list);
    mainElement!.appendChild(h1Left).appendChild(h1Right);
    mainElement!.appendChild(p);
    mainElement!.appendChild(contact);
    mainElement!.appendChild(AvatarElement)

});


