const earnButton = document.querySelector("#btnearn");
const spendButton = document.querySelector("#btnspend");
const totalElement = document.querySelector("#total");
const moneyBorder = document.querySelector("#moneydisplay");

let currentSumEarnings = 0;
const sumEarnings = document.querySelector("#earnings-sum");

const updateSumEarn = (earnAmount) => {
  currentSumEarnings += earnAmount;
  sumEarnings.textContent = currentSumEarnings;
  updateTotal();
};

const newEarning = () => {
  const earnCont = document.querySelector("#learn");
  const earnInput = document.querySelector("#earnings");
  const earnAmountInput = document.querySelector("#earn-amount");
  const earn = earnInput.value;
  const earnAmount = Number(earnAmountInput.value);
  const earnLi = document.createElement("li");
  const earnDiv = document.createElement("div");
  const editEarningButton = document.createElement("button");
  const deleteEarningButton = document.createElement("button");
  const editEarnInput = document.createElement("input");
  const editEarnAmountInput = document.createElement("input");
  const saveEarningButton = document.createElement("button");

  let originalAmount = earnAmount;

  earnLi.classList.add("list");
  earnDiv.classList.add("btns");
  editEarningButton.classList.add("libutton");
  editEarningButton.textContent = "EDYTUJ";
  deleteEarningButton.classList.add("libutton");
  deleteEarningButton.textContent = "USUŃ";

  earnDiv.appendChild(editEarningButton);
  earnDiv.appendChild(deleteEarningButton);

  earnLi.textContent = `${earn} - ${earnAmount} zł`;
  earnLi.appendChild(earnDiv);

  earnCont.appendChild(earnLi);

  deleteEarningButton.addEventListener("click", () => {
    earnLi.remove();
    updateSumEarn(-originalAmount);
  });

  editEarningButton.addEventListener("click", () => {
    earnLi.textContent = "";

    editEarnInput.value = earn;
    editEarnAmountInput.value = originalAmount;

    saveEarningButton.textContent = "ZAPISZ";
    saveEarningButton.classList.add("libutton");

    earnLi.appendChild(editEarnInput);
    earnLi.appendChild(editEarnAmountInput);
    earnLi.appendChild(saveEarningButton);

    editEarnInput.classList.add("e-input");
    editEarnAmountInput.classList.add("e-amount");
    saveEarningButton.classList.add("e-button");

    saveEarningButton.addEventListener("click", () => {
      const updatedEarn = editEarnInput.value;
      const updatedAmountEarn = Number(editEarnAmountInput.value);

      earnLi.textContent = `${updatedEarn} - ${updatedAmountEarn} zł`;
      earnLi.appendChild(earnDiv);

      updateSumEarn(updatedAmountEarn - originalAmount);

      originalAmount = updatedAmountEarn;
    });
  });

  updateSumEarn(originalAmount);

  earnInput.value = "";
  earnAmountInput.value = "";
};

let currentSumSpendings = 0;
const sumSpendings = document.querySelector("#spendings-sum");

const updateSumSpend = (spendAmount) => {
  currentSumSpendings += spendAmount;
  sumSpendings.textContent = currentSumSpendings;
  updateTotal();
};

const newSpending = () => {
  const spendCont = document.querySelector("#pspend");
  const spendInput = document.querySelector("#spendings");
  const spendAmountInput = document.querySelector("#spend-amount");
  const spend = spendInput.value;
  const spendAmount = Number(spendAmountInput.value);
  const spendLi = document.createElement("li");
  const spendDiv = document.createElement("div");
  const editSpendingButton = document.createElement("button");
  const deleteSpendingButton = document.createElement("button");
  const editSpendInput = document.createElement("input");
  const editSpendAmountInput = document.createElement("input");
  const saveSpendingButton = document.createElement("button");

  let originalSpend = spendAmount;

  spendLi.classList.add("list");
  spendDiv.classList.add("btns");
  editSpendingButton.classList.add("libutton");
  editSpendingButton.textContent = "EDYTUJ";
  deleteSpendingButton.classList.add("libutton");
  deleteSpendingButton.textContent = "USUŃ";

  spendDiv.appendChild(editSpendingButton);
  spendDiv.appendChild(deleteSpendingButton);

  spendLi.textContent = `${spend} - ${spendAmount} zł`;
  spendLi.appendChild(spendDiv);
  spendCont.appendChild(spendLi);

  deleteSpendingButton.addEventListener("click", () => {
    spendLi.remove();
    updateSumSpend(-originalSpend);
  });

  editSpendingButton.addEventListener("click", () => {
    spendLi.textContent = "";

    editSpendInput.value = spend;
    editSpendAmountInput.value = originalSpend;

    saveSpendingButton.textContent = "ZAPISZ";
    saveSpendingButton.classList.add("libutton");

    spendLi.appendChild(editSpendInput);
    spendLi.appendChild(editSpendAmountInput);
    spendLi.appendChild(saveSpendingButton);

    editSpendInput.classList.add("e-input");
    editSpendAmountInput.classList.add("e-amount");
    saveSpendingButton.classList.add("e-button");

    saveSpendingButton.addEventListener("click", () => {
      const updatedSpend = editSpendInput.value;
      const updatedAmountSpend = Number(editSpendAmountInput.value);

      spendLi.textContent = `${updatedSpend} - ${updatedAmountSpend} zł`;
      spendLi.appendChild(spendDiv);

      updateSumSpend(updatedAmountSpend - originalSpend);

      originalSpend = updatedAmountSpend;
    });
  });

  updateSumSpend(originalSpend);

  spendInput.value = "";
  spendAmountInput.value = "";
};

const updateTotal = () => {
  const total = parseFloat(currentSumEarnings - currentSumSpendings);

  if (total > 0) {
    totalElement.textContent = `Możesz jeszcze wydać ${total} złotych`;
    moneyBorder.classList.remove("red");
    moneyBorder.classList.add("green");
  } else if (total === 0) {
    totalElement.textContent = `Bilans wynosi 0 złotych`;
    moneyBorder.classList.remove("red", "green");
  } else {
    totalElement.textContent = `Bilans jest ujemny. Jesteś na minusie ${total} złotych`;
    moneyBorder.classList.add("red");
    moneyBorder.classList.remove("green");
  }
};

earnButton.addEventListener("click", newEarning);
spendButton.addEventListener("click", newSpending);
