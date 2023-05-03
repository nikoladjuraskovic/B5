let linkovi = document.getElementsByClassName("saznaj");


let zvucnici = document.getElementsByClassName("zvucnici");

let audio = document.getElementById("instrument");

/*slika zvucnika ima isto koliko i linkova tako da mogu da idu u istu petlju*/

for(i = 0; i < linkovi.length; i++)
{
    linkovi[i].addEventListener("click", function(ev){


        let cssLink="<link rel='stylesheet' href='style.css'/>";
        let body = "<body id='prozor'></body>";
        let title = "<title>Инструменти - Основни подаци</title>";
        let tekst = "";

        if(ev.target.id == "gitara" || ev.target.id == "violina")
        {
                      
            tekst = "<br><h3 class='naslov'>ЖИЧАНИ ИНСТРУМЕНТИ</h3><br><p>Инструменти код којих се звук производи помоћу жица, било трзањем, превлачењем гудала преко њих или ударањем батићима по њима.</p>";
        } else if(ev.target.id == "klavir" || ev.target.id == "harmonika")
        {          
            
            tekst = "<br><h3 class='naslov'>ИНСТРУМЕНТИ СА ДИРКАМА</h3><br><p>Инструменти код којих се звук производи ударањем дирки.</p>";
        } else if(ev.target.id == "bubnjevi")
        {           
            
            tekst = "<br><h3 class='naslov'>УДАРАЧКИ ИНСТРУМЕНТИ</h3><br><p>Инструменти код којих се звук производи ударањем о инструменте.</p>";
        } else if(ev.target.id == "kontrafagot")
        {      
         
            tekst = "<br><h3 class='naslov'>ДУВАЧКИ ИНСТРУМЕНТИ</h3><br><p>Инструменти код којих се звук производи дувањем у инструменте.</p>";
        }

        let prozor = window.open('', '', 'width=400,height=400,top=400,left=150');
        prozor.document.write(title+cssLink+body+tekst);


    });

    zvucnici[i].addEventListener('mouseover', function (ev) {
        
        //Pristup elementu nad kojim je pozvan event se vrsi preko ev.target
                if(ev.target.id == "gitaraZvucnik")
                    audio.src += "Romanza_española.wav";       
                else if(ev.target.id == "violinaZvucnik")
                    audio.src += "Violin_sounds_and_techniques.wav";
                else if(ev.target.id == "klavirZvucnik")
                    audio.src += "Kimiko_Ishizaka_-_Bach_-_Well-Tempered_Clavier__Book_1_-_01_Prelude_No._1_in_C_major__BWV_846.wav";
                else if(ev.target.id == "bubnjeviZvucnik")
                    audio.src += "Drum_-_Cadence_A.wav";
                else if(ev.target.id == "harmonikaZvucnik")
                    audio.src += "AccordionBellowsSounds.wav";
                else if(ev.target.id == "kontrafagotZvucnik")
                    audio.src += "Contra2.wav";          
        
                audio.play();
        
            });
        
            zvucnici[i].addEventListener("mouseout", function(ev){
        
                audio.src = "zvuci/";
        
                audio.pause();
        
            });

}