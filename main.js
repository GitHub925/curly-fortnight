var lwristx=""
var lwristy=""
var rwristx=""
var rwristy=""
var song1=""
var song2=""
var volume
var rate
var rscore=0
var lscore=0
function preload(){
HP=loadSound("music.mp3");
song2=loadSound("music2.mp3")
}

function setup(){
    canvas=createCanvas(500, 400);
    canvas.position(500, 500);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        lscore=results[0].pose.keypoints[9].score
        rscore=results[0].pose.keypoints[10].score
        console.log(lscore);
        lwristy=results[0].pose.leftWrist.y;
        lwristx=results[0].pose.leftWrist.x;
        rwristx=results[0].pose.rightWrist.x;
        rwristy=results[0].pose.rightWrist.y;
        console.log(rwristy);
        console.log(lwristy);
        console.log(rwristx);
        console.log(lwristx);

    }
}

function modelLoaded(){
    console.log("gooorbagooorba")
}



function draw(){
    image(video, 30,30, 440, 340);
    if(lwristy<rwristy){
        HP.play()
        document.getElementById("songplay").innerHTML="Song: Harry Potter Remixed"
    }
    if(rwristy<lwristy){
        song2.play();
        document.getElementById("songplay").innerHTML="Song: Peter Pan"
    }
}

function borabora(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}