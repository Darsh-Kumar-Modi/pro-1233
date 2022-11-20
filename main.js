function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,400);
    canvas.position(600,130);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}
function draw(){
    background(1,0,22);
}