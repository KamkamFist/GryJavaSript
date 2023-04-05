const logowanie = `
</head>
<body>
    <div id="okno">
        <img width=40% height=30% src="logowanie2.svg">
        <input  size="30" type="search" id="query" name="q" placeholder="numer seryjny życia">
            <form id="form"> <br>
                <input  size="30" type="password" id="query" name="q" placeholder="numer identyfikacyjny w kraju"><br>
                <br>
                <div class="klik" onClick="klik()">sprzedaj</div>
    </div>
</body>
</html>`
const startGame = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="proba.css"/>
    <link rel="stylesheet" href="style/style.css"/>
    <script defer src="proba.js"></script>
</head>
<body>
    <div id="container">
        <div id="background">
          
        </div>
        <div id="content">
          <!-- zawartość diva -->
          <div id="clickable-elementChinol" onclick="chinolek()"></div>
          <div id="clickable-elementLeftCar" onclick="carFirst()"></div>
        </div>
    </div>
    <div id="container2">
        <div id="background2"></div>
        <div id="content2">
          <!-- zawartość diva 2 -->
          <div id="clickable-elementRightCar" onclick="carFirst()"></div>
          <div id="clickable-elementRightPetrol" onClick="stacyjka()"></div>
        </div>
    </div>
</body>
</html>
`

const mleko = `
      <div id="glowny1">
        <div class="dialogelse" onClick="oknaDialogowe()" data-options="Wsiądź, Gdzie ja jestem?">
        Co tak stoisz? Wsiadaj.
      </div>
      <div style="clear: both;"></div>
    </div> 
      <div id="glowny2">
        <div class="pionowy1">
            <div class="kwadrat1"><img width=100% height=100% src="static/glock.png"></div>
            <div class="kwadrat2"><img width=100% height=100% src="static/pueblo.png"></div>
        </div>
        <div class="pionowy2"><img3 width=100% height=100% src="static/cj2.png"></div>
        <div class="pionowy3">
            <div class="kwadrat3" onClick="openBackpack()s"><img width=100% height=100% src="static/plecak.png"></div>
            <div class="kwadrat4"><img width=100% height=100% src="static/zapalniczka.png"></div>
        </div>
        <div class="dolny"> <div class="dialog">
  
      </div>
      <div class="dialogelse2" onclick="intro()" >
        &lt;Wsiądź&gt;
     </div>
      <div class="dialogelse2" onClick="gdzieJestem()">
          Gdzie ja jestem?
      </div>
      <div class="dialogelse2" onClick="mrugnij(id)">
          mruk mruk
      </div>
      <div class="dialogelse2" onClick="powrot()">
      &lt;Wyjście do ekranu głównego&gt;
      </div>
      </div>
`
const chinol = `<div id="glowny3">
<div class="dialogelse">Restauracja u chinola</div>
</div>
<div id="glowny4">
<div class="dialogelse">Chcesz robic zakupy?</div>
</div>
<div style="clear: both;"></div>
<div id="dolny">
<div class="dialogLong">--Rób zakupy</div>
<div class="dialogLong" onclick="powrot()">--wywalaj do menu głównego</div>

</div>`

const stacja = `<div id="glowny5">
<div class="dialogelse">Stacja Petrol</div>
</div>
<div id="glowny6">
<div class="dialogelse">Chcesz zatankowac swego rumaka?</div>
</div>
<div style="clear: both;"></div>
<div id="dolny">
<div class="dialogLong">--Tankuj fure</div>
<div class="dialogLong" onclick="powrot()">--wywalaj do menu głównego</div>

</div>`


const generateLewy = (onclick,dataOption,content) => {
let lewyContent = `<div id ="lewy">
<div
    class="dialogelse"
     onclick="${onclick}"
     data-options="${dataOption}"
>
     ${content}
     </div>
     </div>`

     return lewyContent;
}
const generatePrawy = (onclick,divContent) => {
  let prawyDol = ``;
  let prawyContent = `<div id="glowny2">
        <div class="pionowy1">
            <div class="kwadrat1"><img width=100% height=100% src="static/glock.png"></div>
            <div class="kwadrat2"><img width=100% height=100% src="static/pueblo.png"></div>
        </div>
        <div class="pionowy2"><img3 width=100% height=100% src="static/cj2.png"></div>
        <div class="pionowy3">
            <div class="kwadrat3" onClick="openBackpack()s"><img width=100% height=100% src="static/plecak.png"></div>
            <div class="kwadrat4"><img width=100% height=100% src="static/zapalniczka.png"></div>
        </div>
        <div class="dolny"> <div class="dialog">`
  
      for(let i=0;i<divContent.lenght; i++){
        prawyDol += `<div class="dialogelse2" onclick="${onclick[1]}()">
        ${divContent[i]}
        </div>`
      }
      prawyContent = prawyContent + prawyDol + `</div></div>`
      return prawyContent;
  }

 let probaScene = generateLewy(
  "OpenDialogWindow()",
  "&lt;Wsiądź&gt;,Gdzie Ja Jestem?",
  "siema",
 ) + generatePrawy(
  ["intro",
   "gdzieJestem",
  "startScene(), ruszanieTlem"],
  ["siema",
  "Margas",
  "Jeden"]
 )

 const generateLewyChinol = (content) => {
  let lewyContent = `<div id ="lewy">
  <div
  >
       ${content}
       </div>
       </div>`
  
       return lewyContent;
  }
  const generatePrawyChinol = (content) => {
    let lewyContent = `<div id ="prawy">
    <div
    >
         ${content}
         </div>
         </div>`
    
         return prawyContent;
    }
const genereteDolnyChinol = (onclick, content) => {
  let Dol = ``;
  let dolnyContent = `<div class="dialogLong">--Rób zakupy</div>
  <div class="dialogLong" onclick="powrot()">--wywalaj do menu głównego</div></div>`
  
      for(let i=0;i<divContent.lenght; i++){
        Dol += `<div class="dialogLong" onclick="${onclick[1]}()">
        ${divContent[i]}
        </div>`
      }
      dolnyContent = dolnyContent + Dol + `</div></div>`
      return dolnyContent;
}