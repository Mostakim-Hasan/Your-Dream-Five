function listPlayer(listName) {
    const divList = document.querySelector('.list-holder');
    const ol = divList.querySelector('ol');
    if (ol.children.length >= 5) {
        return
    }
    const li = document.createElement('li');
    li.innerHTML = listName.innerText;
    ol.appendChild(li);
}

const messiBtn = document.querySelector('#lionel-messi-btn');

messiBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#lionel-messi-text');
    listPlayer(addInput);
    messiBtn.disabled = true;
})

const ronaldoBtn = document.querySelector('#cristiano-ronaldo-btn');

ronaldoBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#cristiano-ronaldo-text');
    listPlayer(addInput)
    ronaldoBtn.disabled = true;
})

const neymarBtn = document.querySelector('#neymar-jr-btn');

neymarBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#neymar-jr-text');
    listPlayer(addInput);
    neymarBtn.disabled = true;
})

const lewandowskiBtn = document.querySelector('#robert-lewandowski-btn');

lewandowskiBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#robert-lewandowski-text');
    listPlayer(addInput)
    lewandowskiBtn.disabled = true;
})

const benzemaBtn = document.querySelector('#karim-benzema-btn');

benzemaBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#karim-benzema-text');
    listPlayer(addInput);
    benzemaBtn.disabled = true;
})

const haalandBtn = document.querySelector('#erling-haaland-btn');

haalandBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#erling-haaland-text');
    listPlayer(addInput);
    haalandBtn.disabled = true;
})

const bruyneBtn = document.querySelector('#kevin-de-bruyne-btn');

bruyneBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#kevin-de-bruyne-text');
    listPlayer(addInput);
    bruyneBtn.disabled = true;
})

const mbappeBtn = document.querySelector('#kylian-mbappe-btn');

mbappeBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#kylian-mbappe-text');
    listPlayer(addInput);
    mbappeBtn.disabled = true;
})

const kaneBtn = document.querySelector('#harry-kane-btn');

kaneBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#harry-kane-text');
    listPlayer(addInput);
    kaneBtn.disabled = true;
})

const salahBtn = document.querySelector('#mohamed-salah-btn');

salahBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#mohamed-salah-text');
    listPlayer(addInput);
    salahBtn.disabled = true;
})

const ramosBtn = document.querySelector('#sergio-ramos-btn');

ramosBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#sergio-ramos-text');
    listPlayer(addInput);
    ramosBtn.disabled = true;
})

const maneBtn = document.querySelector('#sadio-mane-btn');

maneBtn.addEventListener('click', function () {
    const addInput = document.querySelector('#sadio-mane-text');
    listPlayer(addInput);
    maneBtn.disabled = true;
})