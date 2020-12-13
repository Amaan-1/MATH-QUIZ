function put() {
    var p1 = document.getElementById("gamer-1").value;
    var p2 = document.getElementById("gamer-2").value;
    localStorage.setItem("player-1", p1);
    localStorage.setItem("player-2", p2);
    window.location = "game.html";
}