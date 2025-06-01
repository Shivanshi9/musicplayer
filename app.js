console.log("welcome to spotify");
//initializing the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let audioElement1 = new Audio('3.mp3');
let audioElement2 = new Audio('4.mp3');
let audioElement3 = new Audio('2.mp3');
let audioElement4 = new Audio('5.mp3');
let masterPlay = document.getElementById('masterPlay');
let playIcon = document.getElementById('playIcon');
let playIcon1 = document.getElementById('playIcon1');
let playIcon2 = document.getElementById('playIcon2');
let playIcon3= document.getElementById('playIcon3');
let playIcon4 = document.getElementById('playIcon4');

let progressBar = document.getElementById('myProgressBar');
let songItems = document.getElementsByClassName('songItems');
let sonInfo = document.getElementsByClassName('songInfo');

let song = [
    {songName: 'ye tune kya kiya' ,filePath: '1.mp3' },
    {songName: 'Maand' ,filePath: '3.mp3' },
    {songName: 'Sahiba' ,filePath: '4.mp3' },
    {songName: ' Dil Tu Jaan Tu' ,filePath: '2.mp3' },
    {songName: 'Meherbani' ,filePath: '5.mp3' },
    // {songName: 'ye tune kya kiya' ,filePath: '1.mp3'}
    
];

//handling play pause of audio
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 &&
         audioElement1.paused || audioElement1.currentTime<=0 &&
         audioElement2.paused || audioElement2.currentTime<=0 &&
         audioElement3.paused || audioElement3.currentTime<=0 &&
         audioElement4.paused || audioElement4.currentTime<=0 
        ){
        audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }  
})

//new


 // Handling play/pause of individual songs
playIcon.addEventListener('click', () => playSong(audioElement, masterPlay));
playIcon1.addEventListener('click', () => playSong(audioElement1, playIcon1));
playIcon2.addEventListener('click', () => playSong(audioElement2, playIcon2));
playIcon3.addEventListener('click', () => playSong(audioElement3, playIcon3));
playIcon4.addEventListener('click', () => playSong(audioElement4, playIcon4));

// Function to play a song
function playSong(audio, icon) {
    // Pause all other audios
    [audioElement, audioElement1, audioElement2, audioElement3, audioElement4].forEach((a) => {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0; // Reset the audio
        }
    });

    // Play the selected audio
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-circle-play');
        icon.classList.add('fa-circle-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
    }

       // Update the master play button
    if (!audio.paused) {
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
    // Update progress bar for the selected audio
    updateProgressBar(audio);
}

// Initialize progress bars for all audios
updateProgressBar(audioElement);
updateProgressBar(audioElement1);
updateProgressBar(audioElement2);
updateProgressBar(audioElement3);
updateProgressBar(audioElement4);

myProgressBar.addEventListener('change',()=>{
       audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


//time updation
audioElement.addEventListener('timeupdate' , ()=>{
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value = progress;
})
