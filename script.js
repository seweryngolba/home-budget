const earnButton = document.querySelector("#btnearn");
const spendButton = document.querySelector("#btnspend");
const totalElement = document.querySelector("#total");
const moneyBorder = document.querySelector("#moneydisplay");

let currentSumEarnings = 0;
const sumEarnings = document.querySelector("#earnings-sum");

const updateSumEarn = (earnAmount) => {
  currentSumEarnings += parseFloat(earnAmount);
  sumEarnings.textContent = currentSumEarnings.toFixed(2);
  updateTotal();
};

const newEarning = () => {
  const earnCont = document.querySelector("#learn");
  const earnInput = document.querySelector("#earnings");
  const earnAmountInput = document.querySelector("#earn-amount");
  const earn = earnInput.value;
  const earnAmount = parseFloat(earnAmountInput.value.replace(",", "."));

  if (!earn || earnAmount <= 0 || isNaN(earnAmount)) {
    alert(
      "Sprawdź czy nazwa oraz kwota przychodu została wpisana. Kwota przychodu musi być liczbą wiekszą od zera"
    );
    earnInput.value = "";
    earnAmountInput.value = "";
    return;
  }

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

  earnLi.textContent = `${earn} - ${earnAmount.toFixed(2)} zł`;
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
      const updatedAmountEarn = parseFloat(
        editEarnAmountInput.value.replace(",", ".")
      );

      if (!updatedEarn || updatedAmountEarn <= 0 || isNaN(updatedAmountEarn)) {
        alert(
          "Sprawdź czy nazwa oraz kwota przychodu została wpisana. Kwota przychodu musi być liczbą wiekszą od zera"
        );
        return;
      }

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
  currentSumSpendings += parseFloat(spendAmount);
  sumSpendings.textContent = currentSumSpendings.toFixed(2);
  updateTotal();
};

const newSpending = () => {
  const spendCont = document.querySelector("#pspend");
  const spendInput = document.querySelector("#spendings");
  const spendAmountInput = document.querySelector("#spend-amount");
  const spend = spendInput.value;
  const spendAmount = parseFloat(spendAmountInput.value.replace(",", "."));

  if (!spend || spendAmount <= 0 || isNaN(spendAmount)) {
    alert(
      "Sprawdź czy nazwa oraz kwota wydatku została wpisana. Kwota wydatku musi być liczbą wiekszą od zera"
    );
    spendInput.value = "";
    spendAmountInput.value = "";
    return;
  }

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

  spendLi.textContent = `${spend} - ${spendAmount.toFixed(2)} zł`;
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
      const updatedAmountSpend = parseFloat(
        editSpendAmountInput.value.replace(",", ".")
      );

      if (
        !updatedSpend ||
        updatedAmountSpend <= 0 ||
        isNaN(updatedAmountSpend)
      ) {
        alert(
          "Sprawdź czy nazwa oraz kwota wydatku została wpisana. Kwota wydatku musi być liczbą wiekszą od zera"
        );
        return;
      }

      spendLi.textContent = `${updatedSpend} - ${updatedAmountSpend.toFixed(
        2
      )} zł`;
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
    totalElement.textContent = `Możesz jeszcze wydać ${total.toFixed(
      2
    )} złotych`;
    moneyBorder.classList.remove("red");
    moneyBorder.classList.add("green");
  } else if (total === 0) {
    totalElement.textContent = `Bilans wynosi 0 złotych`;
    moneyBorder.classList.remove("red", "green");
  } else {
    totalElement.textContent = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(
      total
    ).toFixed(2)} złotych`;
    moneyBorder.classList.add("red");
    moneyBorder.classList.remove("green");
  }
};

earnButton.addEventListener("click", newEarning);
spendButton.addEventListener("click", newSpending);
