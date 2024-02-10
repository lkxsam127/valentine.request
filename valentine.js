let wrapper = document.querySelector('.wrapper');
let question = document.querySelector('.questioin');
let yesbtn = document.querySelector('.yes-btn');
let nobtn = document.querySelector('.no-btn');

nobtn.addEventListener ('mouseover', function() {
    let randX = Math.random() * 50;
    let ranY = Math.random() * 50;

    nobtn.style.left = randX + '%';
    nobtn.style.top = randX + '%';
})

    function changeHeadingText()
    {
        var heading = document.getElementById("question");
        heading.innerHTML="YAYAYAYA! I LOVE YOU AYMANOU!";
    }
    
