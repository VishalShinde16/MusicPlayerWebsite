console.log("Welcome to Spotify!")

let masterplay=document.getElementById("masterplay");
let audioElement = new Audio("songs/1.mp3");
let myprogressbar = document.getElementById("progressbar");
let song =Array.from(document.getElementsByClassName('song'));

let songindex=1;
//creating an array of all songs

allsongs=[
    {songName:'Smells Like Teen Spirit - Nirvana',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName:'Imagine - John Lennon',filePath:'songs/2.mp3',coverPath:'covers/2.jpg'},
    {songName:'One - U2',filePath:'songs/3.mp3',coverPath:'covers/3.jpg'},
    {songName:'Billie Jean - Michael Jackson',filePath:'songs/4.mp3',coverPath:'covers/4.jpg'},
    {songName:'Bohemian Rhapsody - Queen',filePath:'songs/5.mp3',coverPath:'covers/5.jpg'},
    {songName:'Hey Jude - The Beatles',filePath:'songs/6.mp3',coverPath:'covers/6.jpg'},
    {songName:'Like A Rolling Stone - Bob Dylan',filePath:'songs/7.mp3',coverPath:'covers/7.jpg'}
];


song.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=allsongs[i].coverPath;
    element.getElementsByClassName('songtitle')[0].innerText =allsongs[i].songName;

});


//adding click event on play button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        
        audioElement.play();
        pelement=document.getElementById((songindex).toString());
        pelement.classList.remove('fa-circle-play')
        pelement.classList.add('fa-circle-pause')
        document.getElementById('gif').style.opacity='1';
    }

    else{
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        makeallplay()
        audioElement.pause();
        document.getElementById('gif').style.opacity='0';
    }
   
});

//updating progressbar or seek bar as per audio

audioElement.addEventListener('timeupdate',()=>{

    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
});

//to auto play song after completion
audioElement.addEventListener('ended',()=>{
    if(songindex>6){
        songindex=1;
        console.log(songindex)
    }
    else{
        songindex+=1;
        console.log(songindex)

    }

    audioElement.src='songs/'+(songindex)+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

    cElement=document.getElementById((songindex).toString())
    makeallplay()
    cElement.classList.remove('fa-circle-play')
    cElement.classList.add('fa-circle-pause')

    document.getElementById('currentsongname').innerText=allsongs[songindex-1].songName;
    document.getElementById('gif').style.opacity=1;
})
//updating audio as seek bar changes manually

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=parseInt((myprogressbar.value*audioElement.duration)/100);

});

//play pause in song list btn
const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('allsongplaybtn')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
})};

Array.from(document.getElementsByClassName('allsongplaybtn')).forEach((element)=>{
    
    
    element.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-circle-play')){
    
            makeallplay()
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause')

            songindex = parseInt(e.target.id);

            audioElement.src='songs/'+songindex+'.mp3';
            audioElement.currentTime=0;
            audioElement.play();
            
            masterplay.classList.remove('fa-circle-play')
            masterplay.classList.add('fa-circle-pause')
            
            // console.log(allsongs[index-1].songName)
            document.getElementById('currentsongname').innerText=allsongs[songindex-1].songName;
            document.getElementById('gif').style.opacity=1;
        }
        // else if(e.target.classList.contains('fa-circle-play')&& audioElement.currentTime>0){
        //     makeallplay()
        //     e.target.classList.remove('fa-circle-play')
        //     e.target.classList.add('fa-circle-pause')

        //     songindex = parseInt(e.target.id);

        //     audioElement.src='songs/'+songindex+'.mp3';
        //     // audioElement.currentTime=0;
        //     audioElement.play();
            
        //     masterplay.classList.remove('fa-circle-play')
        //     masterplay.classList.add('fa-circle-pause')
            
        //     // console.log(allsongs[index-1].songName)
        //     document.getElementById('currentsongname').innerText=allsongs[songindex-1].songName;
        //     document.getElementById('gif').style.opacity=1;
        // }
        else{
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play')
            audioElement.pause()
            document.getElementById('gif').style.opacity=0;

            masterplay.classList.remove('fa-circle-pause')
            masterplay.classList.add('fa-circle-play')
        }
    });
});
//on next click
document.getElementById("next").addEventListener('click',()=>{
    
    if(songindex>6){
        songindex=1;
        console.log(songindex)
    }
    else{
        songindex+=1;
        console.log(songindex)

    }

    audioElement.src='songs/'+(songindex)+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

    cElement=document.getElementById((songindex).toString())
    makeallplay()
    cElement.classList.remove('fa-circle-play')
    cElement.classList.add('fa-circle-pause')

    document.getElementById('currentsongname').innerText=allsongs[songindex-1].songName;
    document.getElementById('gif').style.opacity=1;
});

//previous click
document.getElementById("previous").addEventListener('click',()=>{
    
    if(songindex<2){
        songindex=7;
        console.log(songindex)
    }
    else{
        songindex-=1;
        console.log(songindex)

    }

    audioElement.src='songs/'+(songindex)+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

    cElement=document.getElementById((songindex).toString())
    makeallplay()
    cElement.classList.remove('fa-circle-play')
    cElement.classList.add('fa-circle-pause')

    document.getElementById('currentsongname').innerText=allsongs[songindex-1].songName;
    document.getElementById('gif').style.opacity=1;
});


