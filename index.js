function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    let tst = "";
    /*
    switch(string){
        case (string == string.toLowerCase()):
            tst = "I can't hear you!";
            console.log("lower");
            break;
        case (string == string.toUpperCase()):
            tst = "YES INDEED!";
            console.log("upper");
            break;
        case (string == "Let's have dinner together!"):
            tst = "I would love to!";
            console.log("dinner");
            break;
        default:
            tst = "D";
            console.log("Default");
            break;
    }
    //console.log(tst);
    */

    //console.log("if test");
    if (string === string.toLowerCase()){
        tst = "I can't hear you!";
    }
    else if (string == string.toUpperCase()){
        tst = "YES INDEED!"
    }
    else{
        tst = "I would love to!";
    }
    //console.log(tst);
    return tst;
    
}

//sayHiToHeadphonedRoommate("Let's have dinner together!");
//console.log("Done");