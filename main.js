noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() 
{
video = createCapture(VIDEO);
video.size(300,300);
video.position(100,175);
canvas = createCanvas(500,350);
canvas.position(500,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);

}
function gotPoses(results) 
{ 
    if(results.length > 0) { 
        console.log(results); 
        noseX = results[0].pose.nose.x; 
        noseY = results[0].pose.nose.y; 
        console.log("noseX = " + noseX +" noseY = " + noseY); 
        leftWristX = results[0].pose.leftWrist.x; 
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX - rightWristX); 
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
function modelLoaded(){
    console.log('PoseNet is initialised');
}
function draw()
{
background('#0a4f52');
text(document.getElementById("input"),550,200);
textSize(15);
fill('#3bd870');
document.getElementById("text-sites").innerHTML = "Size of the text will be = " + difference +"px";
}
