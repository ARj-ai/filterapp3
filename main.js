nose_x = 0;
nose_y = 0;

function preload(){
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas = createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses)

}

function draw(){
    image(video, 0, 0, 500, 500);
    image(mustache, nose_x - 250, nose_y, 300, 100);
}

function snap(){
    save("mustache filter.png");
}

function modelLoaded(){
    console.log("Model loaded");
}

function gotPoses(results){
    console.log(results)
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
}