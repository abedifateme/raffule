
// Function to clear the console
function clear() {
    console.clear();
}

// Variables initialization
let shanseHa = [];
let darkhastJayezeHa = {};
let tedadNafarat = 3;
let allMoney = 0;

// Collect data for each participant
for (let i = 1; i <= tedadNafarat; i++) {
    let money = parseInt(prompt(`Enter the amount you want to participate in the lottery in toman (Participant ${i}):`));
    allMoney += money;
    let jayeze = parseInt(prompt(`Enter the prize money request in toman (Participant ${i}):`));
    darkhastJayezeHa[i] = jayeze;
    let tedadShans = Math.floor(money / 1000) + 1;
    for (let j = 0; j < tedadShans; j++) {
        shanseHa.push(i);
    }
}



// Debug: Display the list of chances
shanseHa.forEach(item => console.log(item));
clear();

// Countdown before selecting the winner
console.log("Determining the winner in 5 seconds...");
for (let i = 5; i > 0; i--) {
    console.log(i);
    // Simulating delay for 1 second
    let start = new Date().getTime();
    while (new Date().getTime() < start + 1000);
}
clear();

// Randomly select a winner
let barandeAdad = Math.floor(Math.random() * shanseHa.length);
let winner = shanseHa[barandeAdad];
let pardakht = darkhastJayezeHa[winner];

// Check if the requested prize can be paid
if (pardakht > allMoney) {
    console.log(`User ${winner}, you have won!!!`);
    let start = new Date().getTime();
    while (new Date().getTime() < start + 3000); // Wait for 3 seconds
    clear();
    alert(` User ${winner}, you have won!!! \n But the amount you want is more than the treasury assets.\nSo we are happy for your participation in this raffle!!!`);
} else {
    let maghsom = Math.floor(allMoney / pardakht);
    alert(`User ${winner}, you have won!!!`);
    let start = new Date().getTime();
    while (new Date().getTime() < start + 2000); // Wait for 2 seconds
    let pasokh = prompt(`Treasury asset amount: ${allMoney} tomans\nYour desired amount: ${pardakht} tomans\nYou can receive ${maghsom} to ${pardakht} tomans.\nDo you want? (yes/no):`);
    
    if (pasokh.toLowerCase() === 'yes') {
        alert(`Congratulations, you have received ${maghsom * pardakht} tomans.\nTreasury Assets: ${allMoney - (maghsom * pardakht)} tomans.`);
    } else {
        alert('Thank you for your participation in this raffle.');
    }
}
