$(document).ready(function() {

    let magic8Ball = {};
    
        magic8Ball.listOfAnswers = ["Нет", "Да", "Я так не думаю...", "Конечно!", "Когда рак на горе свистнет", "Конечно нет ", "Конечно да "
        
        ,"Даже не думай !"];
  
    $("#answer").hide();
  
    magic8Ball.askQuestion = function(question) {
      $("#8ball").effect("shake");
  
      $("#8ball").attr("src", "images/magic8ballAnswer.png");
  
      $("#answer").fadeIn(4000);
  
      let randomNumber = Math.random();
  
      let randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  
      let randomIndex = Math.floor(randomNumberForListOfAnswers);
  
      let answer = this.listOfAnswers[randomIndex];
  
      $("#answer").text(answer);
  
      console.log(question);
      console.log(answer);
    };
  
    let onClick = function() {
  
      $("#answer").hide();
  
      $("#8ball").attr("src", "images/magic8ballQuestion.png");
  
  
      setTimeout(function(){
        let question = prompt("ЧТО ТЫ ХОЧЕШЬ ЗНАТЬ ?", "Идти в армию ?");
        magic8Ball.askQuestion(question);
      }, 500);
  
  
    };
  
    $("#questionButton").click(onClick);
  
  });
  