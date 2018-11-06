document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#right').style.display= "none";
    document.querySelector('#btn').onclick = function playAudio () {
        document.querySelector('.grid1').classList.add('split', 'left');
        document.querySelector('.Second').classList.add('split', 'right');
        document.querySelector('#right').style.display= "block"; 
    }

    // document.querySelector('#play').onclick= function () {
    //     var songs=['The_Lost_Children.mp3','Awesome.wma'];
    // songs.forEach(function(item, index, array){
    //     console.log(item, index);
    // });
    // // songs.play();
    // }
    var audio = new Audio(),
i = 0;
var playlist = new Array('http://localhost:4000/download?id=The_Lost_Children.mp3', 'http://localhost:4000/download?id=Awesome.wma');

audio.addEventListener('ended', function () {
i = ++i < playlist.length ? i : 0;
console.log(i)
audio.src = playlist[i];
audio.play();
}, true);
audio.volume = 0.3;
audio.loop = false;
audio.src = playlist[0];
audio.play();
    // songs.play();
    
    // function playAudio() {
    //     ;
    // }
    
    // document.querySelector('#play').onclick = function enableControls() {
    //     document.querySelectorAll('#myAudio').forEach(p => {
    //         document.querySelector('#play').play();
    //     })
    // }
});