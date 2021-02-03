class Quiz{
constructor(){

}

getState(){
var gameStateRef=database.ref('gameState');
gameStateRef.on("value",function(data){
gameState=data.val();

})
}

update(state){
database.ref('/').update({
gameState: state
})
}

async start(){
if(gameState===0){
contestant=new Contestant();
var contestantCountRef=await database.ref('contestantCount').once("value");
if(contestantCountRef.exists()){
contestantCount=contestantCountRef.val();
contestant.getCount();

}

question=new Question();
question.display();

}
}

play(){
question.hide();
background("red");
fill(0);
textSize(30);
text("result of the quiz",340,50);
Contestant.getPlayerInfo();
if(allContestants!==undefined){
debugger;
var display_Answers=230;
fill("blue");
textSize(20);
text("NOTE:Contestant who answered correct are highlighted in green color",130,230);

for(var plr in allContestants){
debugger;
var correctAns="2";
if(correctAns===allConmtestants[plr].answer)
fill("green");
else
fill("red");

display_Answers=display_Answers+30;
texSize(20);
text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_Answers);

}
}
}
}