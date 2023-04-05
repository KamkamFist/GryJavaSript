function tak(){
const lewy = document.querySelector("#lewy")
const PrawyDol = document.querySelector("#prawydol")
}



function gdzieJestem(){
    console.log("DZIALA");

    const newDialog = document.createElement("div");
    newDialog.classList.add("dialogelse");
    newDialog.setAttribute("data-options","<wsiądź>");
    newDialog.setAttribute("noclick", "oknaDialogowe()");
    newDialog.innerHTML = "siema";
    newDialog.style.fontSize = "40px";
    const lewy = document.querySelector("#glowny1");
    lewy.style.background = "url('static/poczatek.png')";
    const lewydialog = document.querySelector(".dialogelse");
    lewydialog.innerText = "siema";



    lewy.removeChild(lewy.querySelector(".dialogelse"));
    lewy.appendChild(newDialog);

    prawyDol.innerHTML = "";
    const option1 = document.createElement("div");
    option1.classList.add("dialogelse2");
    option1.innerHTML = "Wsiądź";
    option1.setAttribute("onclick", "intro()");
    prawyDol.appendChild(option1);
   
}


function intro(){
    const lewy = document.querySelector("#glowny1");
    const prawy = document.querySelector("#glowny2");
    let music = new Audio("static/drivelow.mp4")
//play music
    music.play();
    lewy.style.width = "96vw";
    prawy.style.width = "0vw";
    lewy.style.backgroundImage = "url('static/intro.png')"
    lewy.innerHTML = "";
    lewy.style.backgroundSize = "96vw";
    prawy.innerHTML = "";

    setTimeout(function() {
        lewy.style.width = "47vw";
        prawy.style.width = "47vw";
        lewy.innerHTML = "";
        prawy.innerHTML = "";
        lewy.style.backgroundImage = "url('static/driveprawy.gif')";
        lewy.style.backgroundSize = "cover";
        lewy.style.backgroundPosition = "left";
        lewy.style.float = "left";
        prawy.style.backgroundImage = "url('static/drivelewy.gif')";
        prawy.style.backgroundSize = "cover";
        prawy.style.backgroundPosition = "right";
        prawy.style.float = "left";

        let cykle = 0;
        lewy.style.marginRight = 0;
        let id = setInterval(function () {
            lewy.style.marginRight = `${cykle / 100}vw`;
            console.log("Jaszkieicz jeden, może usune ")
            cykle++;

            if (cykle === 151) {
                clearInterval(id);
                

            }
        }, 50)
        setTimeout(function () {
            const newDialog = document.createElement("div");
            newDialog.classList.add("dialogelse");
            newDialog.innerText = "stary, rozjechałem babe na pasach";

            lewy.append(newDialog)
        }, 5000)
        
    }, 7800);

}
