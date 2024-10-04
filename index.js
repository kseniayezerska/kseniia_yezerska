
function checkProbabilityTheory(count) {
    let evenCount = 0; 
    let oddCount = 0; 
    function getRandomNumber() {
        return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    }
    for (let i = 0; i < count; i++) {
        let randomNumber = getRandomNumber();
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;
    console.log(`Згенеровано ${count} чисел.`);
    console.log(`Парних: ${evenCount} (${evenPercentage.toFixed(2)}%)`);
    console.log(`Непарних: ${oddCount} (${oddPercentage.toFixed(2)}%)`);
    console.log(evenPercentage.toFixed(2) === oddPercentage.toFixed(2)
        ? "Результат точно 50/50!"
        : "Результат близький до 50/50, але з деякими відхиленнями.");
 }
 checkProbabilityTheory(1000);






 