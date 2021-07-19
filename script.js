var app = document.getElementById('type');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am Hajnalka.')
    .pauseFor(2500)
    .deleteChars(14)
    .typeString('A Frontend Developer')
    .pauseFor(2500)
    .start();