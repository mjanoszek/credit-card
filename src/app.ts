const displayMonth = document.querySelector(
  ".box__displayExpDate__displayMonth"
) as HTMLSelectElement;
const displayYear = document.querySelector(
  ".box__displayExpDate__displayYear"
) as HTMLSelectElement;
const displayCardNumber = document.querySelector(
  ".box__cardNumber__displayCardNumber"
) as HTMLSelectElement;
const displayCardHolder = document.querySelector(
  ".box__cardHolder__displayCardHolder"
) as HTMLSelectElement;
const cardNumberInput = document.querySelector(
  ".data__form__cardNumber"
) as HTMLInputElement;
const cardHolderInput = document.querySelector(
  ".data__form__cardHolder"
) as HTMLInputElement;
const cardMonthInput = document.querySelector(
  ".data__form__monthExp"
) as HTMLInputElement;
const cardYearInput = document.querySelector(
  ".data__form__yearExp"
) as HTMLInputElement;

const format = (s: number[]) => s.toString().replace(/\d{4}(?=.)/g, "$& ");

const pad = (num: number, size: number): string => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

const enterCardHolder = () =>  {
  displayCardHolder.textContent = cardHolderInput.value;
  displayCardHolder.textContent == "" &&
    (displayCardHolder.textContent = "John Smith");
};

const enterCardNumber = () => {
  const cardNumberArray: number[] = [];
  cardNumberArray.push(parseInt(cardNumberInput.value));
  displayCardNumber.textContent = format(cardNumberArray);
  cardNumberInput.value == "" &&
    (displayCardNumber.textContent = "#### #### #### ####");
  displayCardNumber.textContent == "#### #### #### ####" &&
    displayCardNumber.classList.add("responsiveCardNumber");
  displayCardNumber.textContent == "1000 0000 0000 0000 0" &&
    (displayCardNumber.textContent = "9999 9999 9999 9999");
};

const displayDate = (date: HTMLSelectElement, input: HTMLInputElement) => {
  date == displayMonth && parseInt(input.value) > 12 && (input.value = "12");
  date == displayYear && parseInt(input.value) > 77 && (input.value = "20");
  date.textContent = input.value;
  date.textContent == "" && (date.textContent = "00");
  const yearOrMonth = Number(date.textContent);
  const yearOrMonthConverted = pad(yearOrMonth, 2);
  date.textContent?.length == 1 && (date.textContent = yearOrMonthConverted);
};

cardMonthInput.addEventListener("input", () =>
  displayDate(displayMonth, cardMonthInput)
);

cardYearInput.addEventListener("input", () =>
  displayDate(displayYear, cardYearInput)
);
cardNumberInput.addEventListener("input", enterCardNumber);

cardHolderInput.addEventListener("input", enterCardHolder);
cardHolderInput.addEventListener("input", function () {
  this.value = this.value.replace(/[0-9]/g, "");
});

