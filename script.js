const messages = [
    "Are you sure?",
    "teaf tell the truth?",
    "sure???",
    "Bestie please...",
    "you don't want me to say 'aunty' right now, right?",
    "If you say no, It might happen...",
    "jk now say yes please...",
    "you'll say yes!",
    "Ok fine, I will stop asking",
    " bruh..i swear ",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = '${currentSize * 1.5}px';
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}