var bestNoiseEver = 1;
var Key = "<p id='Key'>3 - hKN80M2_UemyqLTSLXBwcw</p>";

function playMusic() {
    var myMusic = document.getElementById("Music");
    myMusic.play();
}
function playBestNoiseEver() {
    var myBestNoiseEver = document.getElementById("BestNoiseEver");
    myBestNoiseEver.pause();
    myBestNoiseEver.currentTime = 0;
    myBestNoiseEver.play();
}
function Kid() {
    if (bestNoiseEver == 3) {
        document.getElementById("wrapper").innerHTML = Key;
        playBestNoiseEver();
        bestNoiseEver = bestNoiseEver + 1;
    }
    else if (bestNoiseEver <= 2) {
        bestNoiseEver = bestNoiseEver + 1;
        playBestNoiseEver();
    }
}
