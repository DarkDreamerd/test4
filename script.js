function calculate() {
    let price = document.getElementById("price").value;
    let discount = document.getElementById("discount").value;

    let finalPrice = price - (price * discount / 100);

    document.getElementById("result").innerText =
        "Итоговая цена: " + finalPrice + " ₽";
}
