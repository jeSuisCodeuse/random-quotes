let btn = document.getElementById('btn');
let quote = document.getElementById('quote');

let quotes = [
     '"Talk is cheap, show me the code."― Linus Torvalds',
     '“It’s harder to read code than to write it.” — Joel Spolsky',
     '“Code never lies; comments sometimes do.” — Ron Jeffries',
     '“But First, Coffee.” — Topher McCulloch',
     '"Mess with the best, die like the rest." — Hackers... ',
     '"Y a rien de plus con qu’un ordinateur." — Louis Schuffenecker',
     '"Si vous ne réussissez pas du premier coup, appelez ça « version 1.0 " — Anonyme',
     '"Quand la vie apporte des questions, Google donne les réponses." — Anonyme',
     '“ Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ”  - Rick Osborne ',
     '“Give a man a program, frustrate him for a day, Teach a man to program, frustrate him for a lifetime.” ― Muhammad Waseem '
];

btn.addEventListener('click', function(){
    let quoteRandom = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = quoteRandom;
})

