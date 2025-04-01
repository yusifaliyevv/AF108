const fuelPrices = {
    1: { name: "Dizel", price: 0.9 },
    2: { name: "Adi", price: 1.0 },
    3: { name: "Premium", price: 1.5 }
};


let fuelType = parseInt(prompt("Yanacaq növünü seçin: \n1 - Dizel \n2 - Adi \n3 - Premium"));

if (!fuelPrices[fuelType]) {
    alert("Lütfən, düzgün Yanacaq Tipi daxil edin.");
}else {
    let quantity = parseFloat(prompt("Neçə litr yanacaq almaq istəyirsiniz?"));
    if (isNaN(quantity) || quantity <= 0) {
        alert("Lütfən, düzgün miqdar daxil edin.");
    } else{
        let userMoney = parseFloat(prompt("Mövcud pulunuzu (AZN) daxil edin:"));
        if (isNaN(userMoney) || userMoney < 0) {
            alert("Lütfən, düzgün məbləğ daxil edin.");
        } else{
            let totalCost = quantity * fuelPrices[fuelType].price;
            if (userMoney >= totalCost) {
                let remainingBalance = userMoney - totalCost;
                alert(`Siz ${quantity} litr ${fuelPrices[fuelType].name} yanacağı aldınız.\nQalan balansınız: ${remainingBalance.toFixed(2)} AZN`);
            } else{
                let missingAmount = totalCost - userMoney;
                alert(`Sizin balansınız yetərli deyil.\nYanacağın ümumi qiyməti: ${totalCost.toFixed(2)} AZN\nMövcud balansınız: ${userMoney.toFixed(2)} AZN\nÇatışmayan məbləğ: ${missingAmount.toFixed(2)} AZN`);
            }
        }
    }
}
