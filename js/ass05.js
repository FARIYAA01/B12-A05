let coins = 100;
let copyCount = 0;
let favCount = 0;

function updateUI() {
    document.getElementById("coinCount").innerText = coins;
    document.getElementById("copyCount").innerText = copyCount;
    document.getElementById("favCount").innerText = favCount;
}

function copyNumber(number) {
    navigator.clipboard.writeText(number);
    copyCount++;
    updateUI();
    alert("Number " + number + " copied!");
}

function makeCall(service, number) {
    if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
    }
    coins -= 20;
    updateUI();
    alert("Calling " + service + " (" + number + ")");
    let now = new Date();
    let time = now.toLocaleTimeString();
    let historyItem = `<div class="border-b pb-1"><strong>${service}</strong> (${number}) <br><span class="text-xs text-gray-500">${time}</span></div>`;
    document.getElementById("historyList").innerHTML += historyItem;
}

function clearHistory() {
    document.getElementById("historyList").innerHTML = "";
}

function toggleFav(el) {
    if (el.classList.contains("far")) {
        el.classList.remove("far");
        el.classList.add("fas", "text-red-500");
        favCount++;
    } else {
        el.classList.remove("fas", "text-red-500");
        el.classList.add("far");
        favCount--;
    }
    updateUI();
}

updateUI();