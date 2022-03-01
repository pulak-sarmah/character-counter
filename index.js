const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

const updateCounter = () => {
  userChar = charVal.value.length;

  totalCount.innerHTML = userChar;

  remainingCount.innerHTML = 150 - userChar;

  // totalCount.innerHTML = charVal.value.length;
  // remainingCount.innerHTML = charVal.value.length;
};

charVal.addEventListener("keyup", () => updateCounter());

// copy the text code

const copyText = () => {
  charVal.select();

  charVal.setSelectionRange(0, 99999); //for mobile version
  navigator.clipboard.writeText(charVal.value);
};
