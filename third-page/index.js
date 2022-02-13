// import App from "./App.js";
console.log("Hello");
const musicCContainer=document.querySelector('.musicContainer')
const playbtn=document.querySelector('#play')
const prevbtn=document.querySelector('#previous')
const nextbtn=document.querySelector('#next')
const audio=document.querySelector('#audio')
const progress=document.querySelector('.progress')
const progressCContainer=document.querySelector('.progressContainer')
const title=document.querySelector('#title')
const cover=document.querySelector('#cover')
const colorCircle = document.querySelectorAll(".color-circle");


let penSize = 10;
let isDrawing;
let x;
let y;

var canvas = document.querySelector("canvas");
c = canvas.getContext("2d");


// Song Titles 

var hide=document.getElementById('close-pl');
var openMusic=document.getElementById('music-btn');
var card=document.getElementsByClassName('card-container')[0];


openMusic.onclick = function() {
    card.style.display = "block";
    openMusic.style.display="none";
  }
  
hide.onclick = function() {
    card.style.display = "none";
    openMusic.style.display="block";
  }

const songs=[
    'music1',
    'music2',
    'music3',
    'music4',
    'music5',
    'music6'
]

// Keeping tracks of songs
let songIndex=0

// Initially load song
loadSong(songs[songIndex])

// update song details 

function loadSong(song){
    title.innerText=song;
    audio.src = `music/${song}.mp3`;
    cover.src=`music/${song}.jpeg`;
}


function playSong(){
musicCContainer.classList.add('play')
playbtn.querySelector('i.fas').classList.remove('fa-play')
playbtn.querySelector('i.fas').classList.add('fa-pause')

audio.play()
}

function pauseSong(){
    musicCContainer.classList.remove('play')
    playbtn.querySelector('i.fas').classList.add('fa-play')
    playbtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}

function prevSong(){
    songIndex=songIndex-1;

    if(songIndex < 0){
        songIndex= songs.length-1
    }

    loadSong(songs[songIndex])

    playSong();
}
function nextSong(){
    songIndex=songIndex+1;

    if(songIndex >songs.length-1){
        songIndex= 0
    }

    loadSong(songs[songIndex])

    playSong();
}
function updateProgress(e){
const {duration,currentTime}=e.srcElement
const progressPerc=(currentTime/duration)*100 
progress.style.width=`${progressPerc}%`
}

function setProgress(e){
    const width =this.clientWidth
    const clickX=e.offsetX
    const duration=audio.duration
    audio.currentTime=(clickX/width)* duration
}

// Event listeners 

// Play button to pause button 

playbtn.addEventListener('click',()=>{
    const isPlaying=musicCContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})

// Change Songs 

// Previous button 
prevbtn.addEventListener('click',prevSong)

// Next button
nextbtn.addEventListener('click',nextSong)

// progress bar 

audio.addEventListener('timeupdate',updateProgress)

// moving music by clicking on progress bar 

progressCContainer.addEventListener('click',setProgress)

// after song ends it will go to the next song 

audio.addEventListener('ended',nextSong)

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;
  });
  
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    x = undefined;
    y = undefined;
  });
  
  canvas.addEventListener("mousemove", (event) => {
    draw(event.offsetX, event.offsetY);
  });
  
  c.fillStyle = "hotpink";
  c.strokeStyle = c.fillStyle;
  
  function draw(x2, y2) {
    if (isDrawing) {
      c.beginPath();
      c.arc(x2, y2, penSize, 0, Math.PI * 2);
      c.closePath();
      c.fill();
      //draw line
      drawLine(x, y, x2, y2);
    }
  
    x = x2;
    y = y2;
  }
  
  function drawLine(x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.strokeStyle = c.fillStyle;
  
    c.lineWidth = penSize * 2;
    c.stroke();
  }
  
  document.querySelector(".fa-refresh").addEventListener("click", function () {
    c.clearRect(0, 0, canvas.width, canvas.height);
  });
  
  const selectColor = (elem) => {
    removeActiveCircleColor();
  
    c.fillStyle = elem.getAttribute("data-color");
    elem.classList.add("active");
  };
  
  const removeActiveCircleColor = () => {
    colorCircle.forEach((circle) => {
      circle.classList.remove("active");
    });
  };
  
  function penSizeChange(pensize) {
    penSize = pensize;
  }
  
  const favColor = (elem) => {
    removeActiveCircleColor();
    c.fillStyle = elem.value;
  };
  
  document
    .querySelector("a")
    .addEventListener(
      "click",
      (event) => (event.target.href = canvas.toDataURL())
    );
