
// Typing effect function
const text = [
    "-------------------------------------------------",
    "|                                                |",
    "|  RNDM Architects                               |",
    "|  Designing spatial experiences in VR (RecRoom) |",
    "|                                                |",
    "| > ls                                           |",
    "|   contact.txt                                  |",
    "|   examples                                     |",
    "|   social_links                                 |",
    "|                                                |",
    "| > open examples                                |",
    "|   ^21grams                                     |",
    "|   ^SKATEandDESTROY                             |",
    "|   ^HITOIRO                                     |",
    "|   ^LAvantComptoir                              |",
    "|   ^Tarkovsky                                   |",
    "|   ^NoUseForAName                               |",
    "|   ^ChilangoLandia                              |",
    "|   ^FalloutPEGS                                 |",
    "|   ^Nexus9                                      |",
    "|   ^Farnsworth                                  |",
    "|   ^Ecclesia                                    |",
    "|   ^PodMostom                                   |",
    "|   ^PunksWearPrada                              |",
    "|                                                |",
    "| > cat contact.txt                              |",
    "|   email: ArchiRobbie@gmail.com                 |",
    "|   discord: discord.gg/fsWmyaB7tn               |",
    "|                                                |",
    "| > open social_links                            |",
    "|   twitter: @ArchiRobbie                        |",
    "|   instagram: @ArchiRobbie                      |",
    "|   ko-fi: @ArchiRobbie                          |",
    "|   twitch: @ArchiRobbie                         |",
    "|   youtube: @ArchiRobbie                        |",
    "|   kick: @ArchiRobbie                           |",
    "|   discord: @ArchiRobbie                        |",
    "|                                                |",
    "-------------------------------------------------"
];

let index = 0;
let lineIndex = 0;
const typingSpeed = 2;  // Speed in ms

// Typing effect
function typeText() {
    const terminal = document.querySelector('.terminal p');
    
    if (lineIndex < text.length) {
        const currentLine = text[lineIndex];
        
        if (index < currentLine.length) {
            terminal.innerHTML += currentLine[index];
            index++;
        } else {
            terminal.innerHTML += '<br>';  // Move to next line
            lineIndex++;
            index = 0;
        }
    }

    setTimeout(typeText, typingSpeed);
}

document.addEventListener('DOMContentLoaded', typeText);
