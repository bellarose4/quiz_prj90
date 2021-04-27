function a()
{
    x=localStorage.getItem("player1-name")
    y=localStorage.getItem("player2-name")
    player1score=0;
    player2score=0;
    document.getElementById("player1_name").innerHTML=x+":";
    document.getElementById("player2_name").innerHTML=y+":";
    document.getElementById("player1_score").innerHTML=player1score;
    document.getElementById("player2_score").innerHTML=player2score;
    document.getElementById("player_question").innerHTML="Question turn -"+x;
    document.getElementById("player_answer").innerHTML="Answer turn -"+y;
}