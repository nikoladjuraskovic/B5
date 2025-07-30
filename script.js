const zvucnici = document.querySelectorAll(".zvucnik");
const zvuk = document.querySelector("#zvuk");
const saznajVise = document.querySelectorAll(".saznaj");

/*
Vise o automatskom pustanju zvuka na veb stranici i
objasnjenje zasto se u konzoli ispusuje error
https://developer.chrome.com/blog/autoplay/
*/
/*mogla je i petlja po saznajVise jer je isto. Jednak je broj
saznaj vise  koliko i zvucnika*/

for(let i = 0; i < zvucnici.length; i++)
{
    
    zvucnici[i].addEventListener('mouseover', function() {
        if(zvucnici[i].id === "zvucnik-gitara")
            zvuk.src = "zvuci/Romanza_española.wav"

        else if(zvucnici[i].id === "zvucnik-violina")
            zvuk.src = "zvuci/Violin_sounds_and_techniques.wav";

        else if(zvucnici[i].id === "zvucnik-klavir")
            zvuk.src = "zvuci/Kimiko_Ishizaka_-_Bach_-_Well-Tempered_Clavier__Book_1_-_01_Prelude_No._1_in_C_major__BWV_846.wav";

        else if(zvucnici[i].id === "zvucnik-bubnjevi")
            zvuk.src = "zvuci/Drum_-_Cadence_A.wav";

        else if(zvucnici[i].id === "zvucnik-harmonika")
            zvuk.src = "zvuci/AccordionBellowsSounds.wav";

        else if(zvucnici[i].id === "zvucnik-kontrafagot")
            zvuk.src = "zvuci/Contra2.wav";

        zvuk.play();
    });

     zvucnici[i].addEventListener('mouseout', function() {
        zvuk.pause();
    });

     saznajVise[i].addEventListener('click', function() {

        let title = "<title>Инструменти - Основни подаци-</title>";
        let cssLink="<link rel='stylesheet' href='style.css'/>";
        let body = "<body id='prozor'></body>";
        let tekst;
    
        if(saznajVise[i].id === "saznaj-gitara" || saznajVise[i].id === "saznaj-violina")              
            tekst = '<h3 id="naslov">ЖИЧАНИ ИНСТРУМЕНТИ</h3><p class="opis">Инструменти код којих се звук производи помоћу жица, било трзањем, превлачењем гудала преко њих или ударањем батићима по њима</p>';
      
        else if(saznajVise[i].id === "saznaj-klavir" || saznajVise[i].id === "saznaj-harmonika")        
            tekst = '<h3 id="naslov">ИНСТРУМЕНТИ СА ДИРКАМА</h3><p class="opis">Инструменти...</p>';
        
        else if(saznajVise[i].id === "saznaj-bubnjevi")            
            tekst = '<h3 id="naslov">УДАРАЧКИ ИНСТРУМЕНТИ</h3><p class="opis">Инструменти...</p>';
        
        else if(saznajVise[i].id === "saznaj-kontrafagot") 
            tekst = '<h3 id="naslov">ДУВАЧКИ ИНСТРУМЕНТИ</h3><p class="opis">Инструменти...</p>';
                
        let prozor = window.open('', '', 'width=400,height=400, top=500, left=1200');
        prozor.document.querySelector("html").innerHTML = title+cssLink+body+tekst;
        
    });
}
