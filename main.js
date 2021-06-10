status = "";
objects = [];

function setup(){
canvas = createCanvas(640 , 420);
canvas.center();

video = createCapture(VIDEO);
video.size(640 , 420);
video.hide();
}

function start(){
objectDetector = ml5.objectDetector('cocossd' ,  modelLoaded);
objectDetector.detect(video , gotResults);
document.getElementById("status").innerHTML = "Status: Detecting Objects"
document.getElementById("input_type").value;
var answer = value;
}

function modelLoaded(){
console.log("model id Loaded");
status = true;
}

function draw(){
image(video , 0 , 0 , 640 , 420);
if(status  != ""){
objectDetector.detect(video , gotResults);
for(i = 0; i <objects.length; i++){
precent = floor.objects[i].confidence*100;
label(text.objects[i]+" "+precent+"%"+objects[i].x +15 , objects[i].y +15)
rect( objects[i].width , objects[i].height , objects[i].x , objects[i].y )
}
if(objects[i].label == answer){
video.stop();
objectDetector.detect(gotResults);
document.getElementById("status").innerHTML = "object mentioned found"
var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance(objectmentionedfound);
speak(utterThis);
}
else{
document.getElementById("status").innerHTML = "object mentioned not found"
}
}
}

function gotResults(error , results){
if(error){
console.log(error);
}
else{
console.log(results);
objects = results;
}
}