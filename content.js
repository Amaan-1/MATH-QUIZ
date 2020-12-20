name_one = localStorage.getItem("player-1");
name_two = localStorage.getItem("player-2");

score_one = 0;
score_two = 0;

ques_turn = "name_one";
ans_turn = "name_two";

document.getElementById("player_1").innerHTML = name_one + ":";
document.getElementById("player_2").innerHTML = name_two + ":";

document.getElementById("question").innerHTML = "ASK Question  " + name_two;
document.getElementById("question").innerHTML = "&nbsp;&nbsp; GIVE Answer  " + name_one;

document.getElementById("player_1_score").innerHTML = score_one;
document.getElementById("player_2_score").innerHTML = score_two;

function question_post() {
    let one_number = document.getElementById("1_ques").value;
    let two_number = document.getElementById("2_ques").value;
    let product = one_number * two_number;
    console.log(product);

    let ques_multiply = "<h4 style='color: black;'>" + one_number + " x " + two_number + "</h4>";
    let answer_product = "<br><input placeholder='YOUR ANSWER' type='text' id='put-the-answerin'>";
    let submit = "<br><br><button style='margin-top: 10px; margin-bottom: 5px;' class='btn btn-info' onclick='submit()'>CHECK</button>";
    let content = ques_multiply + answer_product + submit;
    document.getElementById("content_box").innerHTML = content;
    document.getElementById("1_ques").innerHTML = "";
    document.getElementById("2_ques").innerHTML = "";
}

function submit() {
    let text = document.getElementById("put-the-answerin").value;
    console.log(text)
    if (text == product) {
        if (ans_turn == "name_one") {
            score_one = score_one + 1;
            document.getElementById("player_1_score").innerHTML = score_one;
        } else if (ans_turn == "name_two") {
            score_two = score_two + 1;
            document.getElementById("player_2_score").innerHTML = score_two;
        }
    }
    if (ques_turn == "name_one") {
        ques_turn = "name_two";
        document.getElementById("question").innerHTML = "ASK Question  " + name_two;
    } else if (ques_turn == "name_two") {
        ques_turn = "name_one";
        document.getElementById("question").innerHTML = "&nbsp;&nbsp; GIVE Answer  " + name_one;
    }
    if (ans_turn == "name_one") {
        ans_turn = "name_two";
        document.getElementById("answer").innerHTML = "&nbsp;&nbsp;Answer Turn - " + name_two;
    } else if (ans_turn == "name_two") {
        ans_turn = "name_two";
        document.getElementById("answer").innerHTML = "&nbsp;&nbsp;Answer Turn - " + name_one;
    }
    document.getElementById("content_box").innerHTML = "";
}
