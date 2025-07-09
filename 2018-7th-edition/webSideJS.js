//Web-Worker: background thread for performing computationally intesive work without freezing the user interface/
//             Only communicates with the main thread and other workers through async message events

//Same-Origin-Policy: sweeping security restrictions on web

//CORS: Cross-Origin-Resource-Sharing, defines a way for client web applications 
//      that are loaded in one domain to interact with resources in a different domain.


//Cross-Site-Scripting: attacker injects HTML tags or scripts => could read cookies, account numbers or personal data

//Best Practice to prevent cors ATTACKS is to initalize the untrusted content in SANDBOX[separate env.]

//Web is mostly event driven, and it contains event(type, target)

function importScript(url) {
    return new Promise((resolve, reject) => {
        let s = document.createElement("script");

        s.onload = () => { resolve(); };
        s.onerror = (e) => { reject(e) };
        s.src = url;

        document.head.append(s);
    });
}
document.addEventListener("click", handleClick, {
    capture: true,
    once: true,
    passive: true
})