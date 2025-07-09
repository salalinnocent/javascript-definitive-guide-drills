//EVENTS

//Device-dependent input events => mouseup, mousedown, 

//Registering Event Handlers
//1. to set a propery on the object or document element that is the event target.
//2. to pass the handler to the addEventListener() method of an object or element.

//EVENT-HANDLER-ARGS: type, target, currentTarget, timeStamp, isTrusted[webBrowser: true, JScode: false]

//EVENT-PROPOGATION: 1. The target handlers are invoked called capturing, 2. The invoc. of event handlers of the target event object
//                   3. Event bubling is the 3rd phase.

//CAPTURING: is bubling in reverse, its important in debugging and event cancelation.

//DOM-API: organizes a document into tree of node objects, where node can be doc,text,element


window.onload = function () {
    let form = document.querySelector("form#shipping");

    form.onsubmit = function (event) {
        if (!isFormValid(this)) {
            event.preventDefault();
        }
    }
}

//Event Handler as Attribute 

//Triggering an event telling the UI we are busy
document.dispatchEvent(new CustomEvent("busy", {
    detail: true
}));

fetch(url)
    .then(handleNetworkResponse)
    .catch(handleNetworkError)
    .finally(() => {
        //Dispatching another event to let the UI know, we are not busy 
        document.dispatchEvent(new CustomEvent("busy", {
            detail: false
        }))
    });
//Else you can also register a handler for "busy" events
// and use it to show or hide spinner and let the user know that it "busy"
document.addEventListener("busy", (e) => {
    if (e.detail) {
        showSpinner();
    } else {
        hideSpinner();
    }
});

//querySelectorAll(): is a array-like-object known as NodeList.

//NodeList: Nodelist has a length property and can be indexed like arrays & Iterable.

//Difference btw querySelector   &   closest: Both starts with an element & look for a match BUT 
//               below in tree     above in tree    
let spinner = document.querySelector("#spinner")
let titles = document.querySelectorAll("h1, h2, h3")
console.log(titles.length);


//Find the closet enclosing <a> tag that has a href attribute
let hyperlink = event.target.closest("a[href]")

function isSideListed(e) {
    return e.closest("ul,ol,dl") !== null; w
}

function isHeading(e) {
    return e.matches("h1,h2,h3,h4,h5")
}

//Recursively traverse the Document or Element e, invoking the function
function traverse(e, f) {
    f(e);
    for (let child of e.childern) {
        traverse(child, f)
    }
}
function traverse2(e, f) {
    f(e)
    let child = e.firstElementChild;
    while (child !== null) {
        traverse2(child, f);
        child = child.nextElementSibling;
    }
}

//append(); adds the args to the element at the end of the child list
//prepend(); adds the args at the start of the child list
let paragraph = document.createElement("p")
let emphasis = document.createElement("em")
emphasis.append("world")
paragraph.append("Hello ", emphasis, "!")


//This function switches btw the "light" & "dark" themes
function toggleTheme() {
    let lightTheme = document.querySelector("#light-theme")
    let darkTheme = document.querySelector("dark theme")

    if (darkTheme.disabled) { //currently light, switch to dark

        lightTheme.disabled = true;
        darkTheme.disabled = false
    } else {

        //Currently dark, switch to Light
        lightTheme.disabled = false;
        darkTheme.disabled = true;
    }
}

// Another way to switch themes to script stylesheets insert new ones; using DOM Manipulation technique

function setTheme() {
    let link = document.createElement("link");
    link.id = "theme";
    link.rel = "stylesheet"
    link.href = `themes/${name}.css`;


    //look for an existing link with id "theme"
    let currentTheme = document.querySelector("#theme")
    if (currentTheme) {
        //if there is an existing theme, replace it with the new one
        currentTheme.replaceWith(link)
    } else {
        //Otherwise, just insert the link to the theme stylesheet
        document.head.append(link)
    }
}

//NOTE: If you define animation properties on a CSS Class, then you can add JS to trigger
//        animation simply by adding class to the element that is to be animated

//PTO => scripting.css


//HTML WEB COMPONENETS
// html name tags must contain a hyphen[-]
// html <template> act as a web component to dublicate same components make them reuseable.



let tav = []