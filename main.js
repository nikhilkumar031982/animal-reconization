function check(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XFOpgpZ5C/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function  gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
    }