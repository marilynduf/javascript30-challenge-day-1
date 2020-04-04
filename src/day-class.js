class Day extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // init the component
        let shadowDom = this.attachShadow({ mode: "open" });
        let template = document.getElementById("custom-day");
        let templateHtml = template.content.cloneNode(true);
        shadowDom.appendChild(templateHtml);

        // define the menu, menu body and hide it
        // let menu = shadowDom.getElementById("my-menu");
        // let menuHead = menu.children[1];
        // let menuBody = menu.children[2];
        // menuBody.style.display = "none";
    }
}

// init the element
customElements.define("day-challenge", Day);