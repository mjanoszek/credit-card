"use strict";
const displayMonth = document.querySelector(".box__displayExpDate__displayMonth");
const displayYear = document.querySelector(".box__displayExpDate__displayYear");
const displayCardNumber = document.querySelector(".box__cardNumber__displayCardNumber");
const displayCardHolder = document.querySelector(".box__cardHolder__displayCardHolder");
const cardNumberInput = document.querySelector(".data__form__cardNumber");
const cardHolderInput = document.querySelector(".data__form__cardHolder");
const cardMonthInput = document.querySelector(".data__form__monthExp");
const cardYearInput = document.querySelector(".data__form__yearExp");
const format = (s) => s.toString().replace(/\d{4}(?=.)/g, "$& ");
const pad = (num, size) => {
    let s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s;
};
const enterCardHolder = () => {
    displayCardHolder.textContent = cardHolderInput.value;
    displayCardHolder.textContent == "" &&
        (displayCardHolder.textContent = "John Smith");
};
const enterCardNumber = () => {
    const cardNumberArray = [];
    cardNumberArray.push(parseInt(cardNumberInput.value));
    displayCardNumber.textContent = format(cardNumberArray);
    cardNumberInput.value == "" &&
        (displayCardNumber.textContent = "#### #### #### ####");
    displayCardNumber.textContent == "#### #### #### ####" &&
        displayCardNumber.classList.add("hashCardNumber");
    displayCardNumber.textContent !== "#### #### #### ####" &&
        displayCardNumber.classList.remove("hashCardNumber");
    displayCardNumber.textContent == "1000 0000 0000 0000 0" &&
        (displayCardNumber.textContent = "9999 9999 9999 9999");
};
const displayDate = (date, input) => {
    date == displayMonth && parseInt(input.value) > 12 && (input.value = "12");
    date == displayYear && parseInt(input.value) > 77 && (input.value = "20");
    date.textContent = input.value;
    date.textContent == "" && (date.textContent = "00");
    const yearOrMonth = Number(date.textContent);
    const yearOrMonthConverted = pad(yearOrMonth, 2);
    date.textContent?.length == 1 && (date.textContent = yearOrMonthConverted);
};
cardMonthInput.addEventListener("input", () => displayDate(displayMonth, cardMonthInput));
cardYearInput.addEventListener("input", () => displayDate(displayYear, cardYearInput));
cardNumberInput.addEventListener("input", enterCardNumber);
cardHolderInput.addEventListener("input", enterCardHolder);
cardHolderInput.addEventListener("input", function () {
    this.value = this.value.replace(/[0-9]/g, "");
});
//# sourceMappingURL=app.js.map