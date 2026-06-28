const text = "Wishing You Endless Happiness ❤️";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,80);

    }

}

typing();
function goLetter(){

    document.getElementById("letter").scrollIntoView({
        behavior:"smooth"
    });

}