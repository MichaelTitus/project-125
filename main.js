noseX = 0
noseY = 0
leftWristX = 0
rightWristX = 0
difference = 0
textDifference = 0
function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(500, 500)
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on('pose', gotposes)
}

function draw() {
    background('lightcoral')
    fill('darkcyan')
    stroke('salmon')
    textSize(difference)
    namevar = document.getElementById("name").value;
    text(namevar,noseX,noseY)
    textDifference = difference.toFixed(0)
    document.getElementById("text_sides").innerHTML = "length of the text is " + textDifference + "px"
}

function modelloaded() {
    console.log("MODEL IS LOADED")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.x
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = leftWristX - rightWristX
    }
}