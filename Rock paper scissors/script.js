const moves = ["rock", "paper", "scissors"];
const emoti = ["✊🏻", "🖐🏻", "✌🏻"];
var userScore = 0;
var botScore = 0;
var messege = "";

const game = (userMove) => {
    var user = document.getElementById("user");
    var bot = document.getElementById("bot");
    const randomBotMove = Math.floor(Math.random() * 3);
    switch (userMove) {
        case "rock":
            if (randomBotMove === 0) {
                messege = `Bot move : ${emoti[randomBotMove]} Rock and rock. Tie`;
                createLog(messege);
                user.innerHTML = userScore;
                bot.innerHTML = botScore;
            } else if (randomBotMove === 1) {
                messege = `Bot move : ${emoti[randomBotMove]} Paper beats rock. bot wins`;
                createLog(messege);
                botScore += 1;
                user.innerHTML = userScore;
                bot.innerHTML = botScore;
            } else if (randomBotMove === 2) {
                messege = `Bot move : ${emoti[randomBotMove]} Rock beats scissors. user wins`;
                createLog(messege);
                userScore += 1;
                user.innerHTML = userScore;
                user.innerHTML = userScore;
            }
            break;
        case "paper":
            if (randomBotMove === 0) {
                messege = `Bot move : ${emoti[randomBotMove]} Paper beats rock. user wins`;
                createLog(messege);
                userScore += 1;
                user.innerHTML = userScore;
                bot.innerHTML = botScore;
            } else if (randomBotMove === 1) {
                messege = `Bot move : ${emoti[randomBotMove]} paper and paper. Tie`;
                createLog(messege);
                user.innerHTML = userScore;
                bot.innerHTML = botScore;
            } else if (randomBotMove === 2) {
                messege = `Bot move : ${emoti[randomBotMove]} scissors beats paper. bot wins`;
                createLog(messege);
                botScore += 1;
                user.innerHTML = userScore;
                bot.innerHTML = botScore;
            }
            break;
        case "scissors":
            if (randomBotMove === 0) {
                messege = `Bot move : ${emoti[randomBotMove]} rock beats scissors. bot wins`;
                createLog(messege);
                botScore += 1;
                user.innerHTML = userScore;
                bot.innerHTML = botScore;
            } else if (randomBotMove === 1) {
                messege = `Bot move : ${emoti[randomBotMove]} scissors beats paper. user wins`;
                createLog(messege);
                userScore += 1;
                user.innerHTML = userScore;
                bot.innerHTML = botScore;
            } else if (randomBotMove === 2) {
                messege = `Bot move : ${emoti[randomBotMove]} scissors and scissors. Tie`;
                createLog(messege);
                user.innerHTML = userScore;
                bot.innerHTML = botScore;
            }
            break;
        default:
            return
    }
}

const createLog = (messege) => {
    var logger = document.getElementById("logger");
    var div = document.createElement("div");
    div.classList.add("messege");
    div.innerHTML = messege
    logger.appendChild(div).scrollIntoView();
}