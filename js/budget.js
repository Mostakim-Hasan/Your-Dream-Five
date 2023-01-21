document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-player');
    const perPlayerValueString = perPlayer.value;
    const perPlayerValue = parseFloat(perPlayerValueString);
    const ol = document.getElementById('olChildren')
    const olChildLength = ol.children.length;
    const playerExpenses = document.getElementById('player-expenses');
    const total = (perPlayerValue * olChildLength).toFixed(2);
    playerExpenses.innerText = total;
    perPlayer.innerText = ''
    console.log(total)
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesValue = parseFloat(playerExpensesString);
    const manager = document.getElementById('manager');
    const managerValueString = manager.value;
    const managerValue = parseFloat(managerValueString);
    const coach = document.getElementById('coach');
    const coachValueString = coach.value;
    const coachValue = parseFloat(coachValueString);
    const totalString = document.getElementById('total');
    const totalValue = (playerExpensesValue + managerValue + coachValue).toFixed(2);
    totalString.innerText = totalValue;
    console.log(coachValue)
})