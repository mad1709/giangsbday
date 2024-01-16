document.addEventListener("DOMContentLoaded", function () {
    displayGreetingsAndQuestion();
});

document.getElementById("yourButtonId").addEventListener("click", function () {
    document.getElementById("happybirthdayMusic").play();
});

function displayGreetingsAndQuestion() {
    var greeting = document.getElementById("greeting");

    setTimeout(function () {
        greeting.innerHTML = "Welcome to your birthday party !";
        setTimeout(function () {
            greeting.innerHTML = "";
            displayQuestion();
        }, 4000);
    }, 3000);
}

function displayQuestion() {
    var questionContainer = document.querySelector('.container .question-container');
    var readyQuestion = document.getElementById('readyQuestion');

    questionContainer.style.display = 'block';
    readyQuestion.style.opacity = 1;
}

function moveNoButton() {
    var btnNo = document.getElementById("btnNo");
    var container = document.querySelector('.container');

    var rect = container.getBoundingClientRect();
    var maxX = rect.width - btnNo.offsetWidth;
    var maxY = rect.height - btnNo.offsetHeight;
    var randomX = rect.left + Math.floor(Math.random() * maxX);
    var randomY = rect.top + Math.floor(Math.random() * maxY);

    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
}

function showBirthdayMessage() {
    var questionContainer = document.querySelector('.container .question-container');
    var birthdayMessage = document.getElementById("birthdayMessage");
    var passwordInput = document.getElementById("passwordInput");
    var passwordNote = document.getElementById("passwordNote");

    questionContainer.style.display = 'none';
    birthdayMessage.style.display = 'block';
    passwordInput.style.display = 'block';
    passwordNote.style.display = 'block';
}

function checkPassword() {
    var passwordInput = document.getElementById("passwordInput").value;

    if (passwordInput === "70") {
        window.location.href = "/page2/love.html"; // Chuyển hướng sang trang mới
    } else {
        alert("Wrong password! *dỗi*");
    }
}
