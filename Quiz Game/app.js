let totalScore =0;
let counter = 0;
let Quiz = function(question,choice1,choice2,choice3,correctchoice){
 this.question = question;
 this.choice1 = choice1;
 this.choice2 = choice2;
 this.choice3 = choice3;
 this.correctchoice = correctchoice;
 this.askQuestion = function(){
 console.log(this.question);   
 console.log(this.choice1);
 console.log(this.choice2);
 console.log(this.choice3);
 }
 this.checkChoice = function(){
     let answer = prompt('Choose the letter of the Correct Answer / type exit to leave Game or click Cancel')
     if(answer ===this.correctchoice){
         totalScore++;
         counter++;
         console.log(`Your Answer is correct`);
         console.log(`total Score: ${totalScore}`) 
         checkMultipleofFive();
             }
        
                
     else if (answer ==='exit'||answer ===null){
        console.log(`Congratulations!a Your total Score is:${totalScore}`)
         return;
     }    


     else{
         console.log (`Your Answer is Wrong!`);
         console.log(`total Score: ${totalScore}`);
         counter = 0;

 }
 startGame();
}
 }


let question1 = new Quiz('1.What does HTML stand for?', 
                        'a:Hyper Text Markup Language', 
                        'b:Hot Mail', 
                        'c:How to Make Lasagna', 
                        'a');

let question2 = new Quiz('2.How many tags are in a regular element?', 
                        'a:2', 
                        'b:1', 
                        'c:3', 
                        'a');

let question3 = new Quiz('3.What is the difference in an opening tag and a closing tag?',
                        'a:Opening tag has a / in front', 
                        'b:Closing tag has a / in front', 
                        'c:There is no difference', 
                        'b');

let question4 = new Quiz('4.< br/ >; What type of tag is this?', 
                        'a:Break tag', 
                        'b:A broken one', 
                        'c:An opening tag', 
                        'a');

let question5 = new Quiz('5.< body >: Is this an opening tag or a closing tag?',
                        'a:Opening', 
                        'b:Closing',
                        'c:Middle',  
                        'a');

let question6 = new Quiz('6.< / body >: Is this an opening tag or a closing tag?',
                        'a:Opening', 
                        'b:Closing',
                        'c:Middle',
                        'b');

let question7 = new Quiz('7.where is the meta tag only found?',
                        'a:The last page', 
                        'b:The home page', 
                        'c:The second page', 
                        'b');

let question8 = new Quiz('8.which is the correct way to tag an image?', 
                        'a:src=”image.jpg/gif” alt=”type some text”', 
                        'b:Src=”image.jpg/gif” alt=”type some text”', 
                        'c:image.gif',
                        'a');

let question9 = new Quiz('9.What is an element that does not have a closing tag called?',
                        'a:Tag', 
                        'b:Empty element', 
                        'c:Closed element', 
                        'a');

let question10 = new Quiz('10.Which of the following is an example of an empty element?', 
                        'a:< img / >', 
                        'b:< img > < / img >', 
                        'c:< / img>', 
                        'b');

let question11 = new Quiz('11.What should values always be enclosed in?',
                        'a:Quotation marks', 
                        'b:Commas', 
                        'c:Parenthesis', 
                        'a');

let question12 = new Quiz('12.Where do all items for the same web site need to be saved?',
                        'a:In the same folder', 
                        'b:Where ever is fine', 
                        'c:In different folders', 
                        'a');

let question13 = new Quiz('13.What does < a  h r e f = ”h t t p : / / w w w . g o o g l e . c o m“  t i t l e = ” L i n k  t o   G o o g l e  ” t a r g e t = ” _  b l a n k  ” > G o o g l e  < / a > do?',
                        'a:Adds a link to google on the page', 
                        'b:Adds a search engine to the page', 
                        'c:Nothing', 
                        'a');

let question14 = new Quiz('14.What is always a welcome page, and explains the purpose or topic of the site?',
                        'a:Page 4', 
                        'b:Homepage', 
                        'c:Table of contents', 
                        'b');

let question15 = new Quiz('15.What does View Source do?',
                        'a:Nothing', 
                        'b:Brings up a note pad with the HTML code already used for the site.', 
                        'c:Opens a new website.', 
                        'b');

let arrayofQuestions = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,
    question11,question12,question13,question14,question15]


function startGame(){

   let randomNum =  Math.floor(Math.random()*15);
    arrayofQuestions[randomNum].askQuestion();
    arrayofQuestions[randomNum].checkChoice();
    
}

function checkMultipleofFive(){
    if(counter%5==0){
        console.log(`You have a Streak of ${counter} Correct Answers!`)
    }
}


function startNotice(){
    let start = prompt('type startGame() to proceed/ Open console first!');
    if(start ==='startGame()'){
        startGame();
    }
}

startNotice();