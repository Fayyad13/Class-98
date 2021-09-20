//renaming for easy use
var SpeechRecognition = window.webkitSpeechRecognition;
//making our own copy of SpeechRecognition
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    
    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    //checking to see if you have said "take my selfie"
    if (Content=="take my selfie")
    {
        console.log("taking selfie");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    //changes what the computer says rather than repeating "take my selfie"
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    //function to delay code
    setTimeout(function() {
        takeSnap();
        save();
    }, 5000);
}


Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: "100"
});
camera = document.getElementById("camera");
//takes the picture
function takeSnap()
{
    Webcam.snap(function(data_url){
        //puts image into div
        document.getElementById("result").innerHTML="<img id='selfie_img' src="+data_url+" >"
    });
}
//saves the picture on to computer
function save(){
    //renaming for easy use
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}