//console.log("Welcome to Shubham's music");

let songitem=Array.from(document.getElementsByClassName("songitem"));
let songs=[
    {songName: "Lambiyaan", filePath:"1.mp3", coverPath:"Lambiyaan.jpg"},
    {songName: "Bairagi", filePath:"2.mp3", coverPath:"Bairagi.jpg"},
    {songName: "Kesariya", filePath:"3.mp3", coverPath:"Kesariya.jpg"},
    {songName: "Saiyaan", filePath:"4.mp3", coverPath:"Saiyaan.jpg"},
    {songName: "Samebeef", filePath:"5.mp3", coverPath:"Samebeef.jpg"}
]
let audioelement=new Audio('1.mp3');
let playbutton=document.getElementById("playbutton");
let subbutton=Array.from(document.getElementsByClassName("songlistplay1"));
playbutton.addEventListener('click',(e)=>{
    if(audioelement.paused)
    {
        audioelement.play();
    }
    else{
        audioelement.pause();
    }
})
songitem.forEach((e,i)=>{
    document.getElementsByClassName("gadhargar")[i].src=songs[i].coverPath;
    document.getElementsByClassName("songlistplay")[i].innerText=songs[i].songName;
})
subbutton.forEach((e)=>{
    e.addEventListener('click',(element)=>
    {
        index=parseInt(element.target.id);
        audioelement.src=`${index}.mp3`
        audioelement.play();
        
    })
})
//audioelement.play();
