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
    }
}

function draw() {
    background("cyan")

}
