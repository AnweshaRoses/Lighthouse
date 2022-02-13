function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there! how are you?(good/bad)";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if(input=="good"){
      return "That is really good! Would you like to explore many interesting features of our website? ( Yes/ No)";
    }
    else if(input=="bad"){
        return "Oh don't worry! You have come to the best website.. How about exploring many interesting features of our website to lift up your mood ( Yes/ No)";
    }
    else if(input=="yes"){
        return"We have features like : Paint section where you can draw whatever you feel like .Along with the painting you can even listen to music with just a click on the music icon. We also have a diary/note taking section where you can write your heart out. We also have a meditating section which will help you to calm down.Last but not the least we have also provided numbers of some pychartarists and therapists whom you can contact in case you have a problem.(I have done that)";
    }
    else if(input=="no"){
        return" That is sad! But I will still recommend you to at least go through them once. We have features like : Paint section where you can draw whatever you feel like . Along with the painting you can even listen to music with just a click on the music icon. We also have a diary/note taking section where you can write your heart out. We also have a meditating section which will help you to calm down.Last but not the least we have also provided numbers of some pychartarists and therapists whom you can contact in case you have a problem.(I have done that)";
    }
    else if(input=="I have done that"){
        return "Did this website benefit you? (it did/it did not)";   
    }
    else if(input=="it did")
    {
        return "That’s great! It was my pleasure to help you out!"; 
    }
    else if(input=="it did not")
    {
        return "Ohk, no problems, then we have numbers of a few psychiatrists and therapists you might like to contact."; 
    }
    else {
        return "Please refer to the options to answer";
    }
}