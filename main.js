noseX=0
noseY=0

leftwristX=0
rightwristX=0

difference=0

function setup() {
    canvas=createCanvas(600,400)
    canvas.position(600,300)
    video=createCapture(VIDEO)
    video.size(500,500)
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on('pose',getposes)
}

function modelloaded() {
    console.log("poseNetisloaded")
}

function getposes(results) {
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        leftwristX=results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        difference=floor(leftwristX-rightwristX)
    }
}

function draw() {
    background("cyan")
    fill("gold")
    stroke("firebrick")
    square(noseX,noseY,difference)
    document.getElementById("square_side").innerHTML="size of the square:"+difference+" px"
}
