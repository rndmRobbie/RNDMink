// Typing effect function
const text = [
    "------------------------------------------------",
    "|                                               |",
    "|  RNDM Architects                              |",
    "|  Designing spatial experiences in VR (RecRoom)|",
    "|                                               |",
    "| > ls                                           |",
    "|   contact.txt                                  |",
    "|   examples                                     |",
    "|   social_links                                 |",
    "|                                               |",
    "| > open examples                                |",
    "|   example-room-1.link                          |",
    "|   example-room-2.link                          |",
    "|   example-room-3.link                          |",
    "|   example-room-4.link                          |",
    "|   example-room-5.link                          |",
    "|   example-room-6.link                          |",
    "|   example-room-7.link                          |",
    "|   example-room-8.link                          |",
    "|                                               |",
    "| > cat contact.txt                              |",
    "|   email: contact@rndmarchitects.com            |",
    "|   discord: discord.gg/ArchiRobbie              |",
    "|                                               |",
    "| > open social_links                            |",
    "|   twitter: @ArchiRobbie                        |",
    "|   instagram: @ArchiRobbie                      |",
    "|   ko-fi: @ArchiRobbie                          |",
    "|   twitch: @ArchiRobbie                         |",
    "|   youtube: @ArchiRobbie                        |",
    "|   kick: @ArchiRobbie                           |",
    "|   discord: discord.gg/ArchiRobbie              |",
    "|                                               |",
    "------------------------------------------------"
];

let index = 0;
let lineIndex = 0;
const typingSpeed = 40;  // Speed in ms

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
