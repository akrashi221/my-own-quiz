class Question{
constructor(){
this.title=createElement('h1');
this.input1=createInput("Enter Your Name Here....");
this.inpu2=createInput("Enter correct option number");
this.button=createButton('Submit');
this.question=createElement('h3');
this.option1=createElement('h4');
this.option2=createElement('h4');
this.option3=createElement('h4');
this.option4=createElement('h4');

}

hide(){
this.title.hide();
this.input1.hide();
this.button.hide();
this.input2.hide();
}

display(){
this.title.html("Harry Potter Quiz Game");
this.title.position(350,0);

this.question.html("Question-1:-Where does Vernon Dursley work?" );
this.question.position(150,80);

this.option1.html("1:A bakery");
this.option1.position(150,100);

this.option2.html("2:A bank");
this.option2.position(150,120);

this.option3.html("3:A drill factory");
this.option3.position(150,140);

this.option4.html("4:A hospital");
this.option4.position(150,160);

this.input1.position(150,230);
this.input2.position(350,230);
this.button.position(290,300);

this.button.mousePressed(()=>{
this.title.hide();
this.input1.hide();
this.input2.hide();
this.button.hide();
contestant.name=this.input.value();
contestant.answer=this.input2.value();
contestantCount=+1;
contestant.index=contestantCount;
contestant.update();
contestant.updateCount(contestantCount);
})
}
}