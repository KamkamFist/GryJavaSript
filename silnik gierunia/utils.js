function carFirst(){
    root.innerHTML = mleko;
}

function startTheGame(){
    root.innerHTML = startGame;
}

function openBackpack(){
    const plecak = document.querySelector(".kwadrat3");
    plecak.addEventListener("click", function(){
        const kwadrat = document.querySelector(".dolny");
        kwadrat.innerHTML = " ";
        for(let i=0; i<4;i++){
            const div = document.createElement("div");
            div.className = "plecakItem";
            kwadrat.appendChild(div)
            console.log("dziala");
        }
    })
    }
    





function oknaDialogowe(){
    console.log("dziala")
    let dialogelse = document.querySelector(".dialogelse");
    dialogelse.addEventListener("click", function() {
    console.log("Jaszkiewicz jeden");
    const options = this.getAttribute("data-options");
    const kwadrat = document.querySelector(".dolny");
    console.log(kwadrat);
    kwadrat.innerHTML = "";
    console.log(options);
    if(options){
        const optionList = options.split(',');
        console.log(optionList);
        optionList.forEach(option => {
            const div = document.createElement("div");
            div.className = "dialogelse2";
            div.setAttribute("data-options", option);
            div.innerHTML = option;
            kwadrat.appendChild(div);
        })
    }
});
}

function mrugnij(id) {
    const div = document.getElementById(id);
    let height = div.offsetHeight;
    let topMargin = 0;
    let bottomMargin = 0;
    const interval = setInterval(() => {
        height -= 10;
        topMargin += 5;
        botomMargin += 5;
        div.style.height = height + "px";
        div.style.marginTop = marginTop + "px";
        div.style.marginBottom = marginBottom + "px";
        if (height <= 0) {
            clearInterval(interval);
        }
    },10)
    otworzzOko("#container")
}


function ruszanieTlem(){
    const container = document.getElementById('container');
  const background = document.getElementById('background');
  let isMouseDown = false;
  let startX;
  let scrollLeft;
  const container2 = document.getElementById('container2');
  const background2 = document.getElementById('background2');
  let isMouseDown2 = false;
  let startX2;
  let scrollLeft2;

  container2.addEventListener('mousedown', (e) => {
    isMouseDown2 = true;
    startX2 = e.pageX - container2.offsetLeft;
    scrollLeft2 = container2.scrollLeft;
    container.scrollLeft = container2.scrollLeft;
  });

  container2.addEventListener('mouseleave', () => {
    isMouseDown2 = false;
  });

  container2.addEventListener('mouseup', () => {
    isMouseDown2 = false;
  });

  container2.addEventListener('mousemove', (e) => {
    if (!isMouseDown2) return;
    e.preventDefault();
    const x = e.pageX - container2.offsetLeft;
    const walk = (x - startX2) * 3;
  //RESPONSYWNOŚĆ DO ZROBIENIA!!!
    let newScrollLeft2 = Math.max(0, Math.min(scrollLeft2 - walk, 840));
  //RESPONSYWNOŚĆ DO ZROBIENIA!!!
    container2.scrollLeft = newScrollLeft2;
    container.scrollLeft = container2.scrollLeft;
   
  });

  container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  container.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3;
    let newScrollLeft = Math.min(scrollLeft - walk, background2.offsetWidth);
    if (newScrollLeft > 840) {
      newScrollLeft = 840;
    }
    container.scrollLeft = newScrollLeft;
    container2.scrollLeft = container.scrollLeft;
  });

}