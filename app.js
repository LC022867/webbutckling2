
let clicked = 0;
let inventory = [];
let boughtSword = false;
let boughtArmor = false;
const armorButton = document.querySelector(".armor");
const swordButton = document.querySelector(".sword");
const inventoryList = document.querySelector(".inventory");
const clickerButton = document.querySelector(".clicker");
const textField = document.querySelector(".clickcount");

clickerButton.addEventListener("click", () => {
    clicked++;
    textField.innerHTML = clicked;
})

swordButton.addEventListener("click", () => {
    if (clicked >= 49 && boughtSword === false) {
        clicked = clicked - 49;
        boughtSword = true;
        textField.innerHTML = clicked;
        inventory.push('sword');
        update();
    }
})
armorButton.addEventListener("click", () => {
    if (clicked >= 100 && boughtArmor === false) {
        clicked -= 100;
        boughtArmor = true;
        textField.innerHTML = clicked;
        inventory.push('armor');
    }
})

function update() {
    inventoryList.innerHTML = "";
    inventory.forEach((item) => {
        let newItem = document.createElement("p");
        newItem.innerHTML = item;
        inventoryList.append(newItem);
    })
}
