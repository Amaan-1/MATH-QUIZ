let name_one = localStorage.getItem("player-1");
let name_two = localStorage.getItem("player-2");

let score_one = 0;
let score_two = 0;

document.getElementById("player_1").innerHTML = player1_name + ":";
document.getElementById("player_2").innerHTML = player2_name + ":";
document.getElementById("question").innerHTML = "ASK Question" + name_one;
document.getElementById("answer").innerHTML = "&nbsp;&nbsp; GIVE Answer" + name_two;

function question_post() {
    let one_number = document.getElementById("1_ques").value;
    let two_number = document.getElementById("2_ques").value;
    let product = one_number * two_number;
    console.log(product);

    let ques_multiply = "<h4 style='color: black;'>" + one_number + " x " + two_number + "</h4>";
    let answer_product = "<br><input placeholder='YOUR ANSWER' type='text' id='answer_field'>";
    let submit = "<br><br><button style='margin-top: 10px; margin-bottom: 5px;' class='btn btn-info' onclick='submit()'>CHECK</button>";
    let content = ques_multiply + answer_product + submit;
    document.getElementById("content_box").innerHTML = content;
    document.getElementById("1_ques").value = "";
    document.getElementById("2_ques").value = "";
}