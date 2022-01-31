function handleProductChanger(id, isIncrease ,outputPrice) {
    let product = document.getElementById(id + 'Input');
    let productCount = parseInt(product.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;

    }
    if (isIncrease == false && productNewCount > 0) {
        productNewCount = productCount - 1;

    }
    //Show product outPut
    product.value = productNewCount;
    // For Product Price
    let productPrice = 0;
    if (id == 'phone') {
         productPrice = productNewCount * 1219;
    }
    if (id == 'case') {
         productPrice = productNewCount * 59;

    }
    let priceOutput = document.getElementById(outputPrice).innerText = productPrice;
calculator();
}


function calculator() {
    let phoneCount = parseInt(document.getElementById('phoneInput').value);
    let caseCount = parseInt(document.getElementById('caseInput').value);

    const calculateTotal = phoneCount*1219 + caseCount * 59;
    document.getElementById('subTotal').innerText= '$ ' + calculateTotal;

    const calculateTax = Math.round(calculateTotal  * 0.1);
    document.getElementById('tax').innerText = '$ ' + calculateTax;

    const calculateBudget= calculateTotal + calculateTax ;
    document.getElementById('budgetTotal').innerText = '$ ' + calculateBudget;
    
};

function displayNone(id) {
    let noneDisplay = document.getElementById(id).style.display = 'none';
    document.getElementById('subTotal').innerText= '$ 00';
    document.getElementById('tax').innerText = '$ ';
    document.getElementById('budgetTotal').innerText = '$ ';
    
}