//              INITIALIZATION              //

const inputEl = document.getElementById("input-box")
const printArea = document.getElementById("print-area")
const printBOX = document.getElementById("print-box")
const commandDivEl = document.getElementById("command-div")
const userName = document.getElementById("user")

var txt = '<p><span style="color: var(--blue);">>></span> Type <a href="../home.html" target="_self" style=" color: var(--red);">norm</a> for Normal Website</p>'
var admin = false

userName.innerHTML = admin === true ? "admin" : "guest"
addLine(txt, '', 0)
loopLines(banner, "", 100);
inputEl.focus()

document.addEventListener('keypress', (event) => {
    inputEl.focus()
    if (event.key === "Enter" && inputEl.value !== "") {

        let cmdValue = inputEl.value.toLowerCase().trim();

        addLine(`<span style="color: var(--blue);">>></span> <span style="color: var(--yellow);">${cmdValue}</span>`, "commands", 0)


        switch (cmdValue) {
            case "banner":
            case "-b":
                loopLines(banner, "", 100);
                break;
            case "help":
            case "-h":
                admin === true ? loopLines(admin_commands, "", 100) : loopLines(commands, "", 100);
                break;
            case "about":
            case "-a":
                loopLines(about, "", 100);
                break;
            case "projects":
            case "-p":
                loopLines(projects, "", 100);
                break;
            case "contact":
            case "-c":
                loopLines(contact, "", 100);
                break;
            case "norm":
            case "-n":
                loopLines(norm, "", 100);
                window.open("../home.html", "_self");
                break;
            case "github":
            case "-g":
                loopLines(github, "", 100);
                setTimeout(() => {
                    window.open(
                        "https://github.com/anas-yunus", "_blank");
                }, 1000);
                break;
            case "instagram":
            case "-i":
                loopLines(instagram, "", 100);
                setTimeout(() => {
                    window.open(
                        "https://www.instagram.com/anasyunus_", "_blank");
                }, 1000);
                break;
            case "twitter":
            case "-t":
                loopLines(twitter, "", 100);
                setTimeout(() => {
                    window.open(
                        "https://www.twitter.com/anasyunus_", "_blank");
                }, 1000);
                break;
            case "email":
            case "-e":
                loopLines(email, "", 100);
                setTimeout(() => {
                    window.open(
                        "mailto:anasyunusind@gmail.com", "_blank");
                }, 1000);
                break;
            case "sudo%admin":
                loopLines(sudo, "", 100);
                admin = true
                admin_func()
                break;
            case "hidden":
                admin === true ? hidden() : loopLines(invalid, "", 100);
                break;
            default:
                loopLines(invalid, "", 100);
                break;
        }

        inputEl.value = ""
        inputEl.style.width = "0ch"
        inputEl.focus()
    }
})

//          THE FUNCTIONLAND        //

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("pre");
        next.innerHTML = t;
        next.className = style;

        commandDivEl.parentNode.insertBefore(next, commandDivEl);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}

inputEl.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(inputEl); // immediately call the function

function resizeInput() {
    this.style.width = this.value.length + "ch";
}

function hidden() {
    loopLines(hidden_files, "", 100);
    setTimeout(() => {
        window.open(
            "https://youtu.be/dQw4w9WgXcQ", "_blank");
    }, 1500);

    setTimeout(() => {
        addLine("   <span style='background-color: var(--greenHigh); color: var(--blackHigh);'> Jokes aside, you just qualified to be my friend.       </span>","", 100)
        addLine("   <span style='background-color: var(--greenHigh); color: var(--blackHigh);'> Send the secret command thru any of the contact methods</span>","", 100)
        addLine("   <span style='background-color: var(--greenHigh); color: var(--blackHigh);'> Waiting for your message partner !                     </span>","", 100)
        addLine("   ","", 100)
    }, 3000);
}

function admin_func(){
    userName.innerHTML = "admin"
    userName.style.color = "var(--black)"
    userName.style.backgroundColor = "var(--red)"
}
