const earnButton = document.querySelector("#btnearn");
const spendButton = document.querySelector("#btnspend");
const totalElement = document.querySelector("#total");
const moneyBorder = document.querySelector("#moneydisplay");

let currentSum = 0;
const sum = document.querySelector("#sum1");

const updateSum = (amount) => {
  currentSum += amount;
  sum.innerHTML = currentSum;
  updateTotal();
};

const newEarning = () => {
  const earnCont = document.querySelector("#learn");
  const earnInput = document.querySelector("#earnings");
  const amountInput = document.querySelector("#amount");
  const earn = earnInput.value;
  const amount = Number(amountInput.value);
  const li = document.createElement("li");
  const newDiv = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const editEarnInput = document.createElement("input");
  const editAmountInput = document.createElement("input");
  const saveButton = document.createElement("button");

  let originalAmount = amount;

  li.classList.add("list");
  newDiv.classList.add("btns");
  editButton.classList.add("libutton");
  editButton.innerText = "EDYTUJ";
  deleteButton.classList.add("libutton");
  deleteButton.innerText = "USUŃ";

  newDiv.appendChild(editButton);
  newDiv.appendChild(deleteButton);

  li.innerHTML = `${earn} - ${amount} zł`;
  li.appendChild(newDiv);

  earnCont.appendChild(li);

  deleteButton.addEventListener("click", () => {
    li.remove();
    updateSum(-originalAmount);
  });

  editButton.addEventListener("click", () => {
    li.innerHTML = "";

    editEarnInput.value = earn;
    editAmountInput.value = originalAmount;

    saveButton.innerText = "ZAPISZ";
    saveButton.classList.add("libutton");

    li.appendChild(editEarnInput);
    li.appendChild(editAmountInput);
    li.appendChild(saveButton);

    editEarnInput.classList.add("e-input");
    editAmountInput.classList.add("e-amount");
    saveButton.classList.add("e-button");

    saveButton.addEventListener("click", () => {
      const updatedEarn = editEarnInput.value;
      const updatedAmount = Number(editAmountInput.value);

      li.innerHTML = `${updatedEarn} - ${updatedAmount} zł`;
      li.appendChild(newDiv);

      updateSum(updatedAmount - originalAmount);

      originalAmount = updatedAmount;
    });
  });

  updateSum(originalAmount);

  earnInput.value = "";
  amountInput.value = "";
};

let currentSum2 = 0;
const sum2 = document.querySelector("#sum2");

const updateSum2 = (amount2) => {
  currentSum2 += amount2;
  sum2.innerHTML = currentSum2;
  updateTotal();
};

const newSpending = () => {
  const spendCont = document.querySelector("#pspend");
  const spendInput = document.querySelector("#spendings");
  const amount2Input = document.querySelector("#amount2");
  const spend = spendInput.value;
  const amount2 = Number(amount2Input.value);
  const li2 = document.createElement("li");
  const newDiv2 = document.createElement("div");
  const editButton2 = document.createElement("button");
  const deleteButton2 = document.createElement("button");
  const editSpendInput = document.createElement("input");
  const editAmount2Input = document.createElement("input");
  const saveButton2 = document.createElement("button");

  let originalSpend = amount2;

  li2.classList.add("list");
  newDiv2.classList.add("btns");
  editButton2.classList.add("libutton");
  editButton2.innerText = "EDYTUJ";
  deleteButton2.classList.add("libutton");
  deleteButton2.innerText = "USUŃ";

  newDiv2.appendChild(editButton2);
  newDiv2.appendChild(deleteButton2);

  li2.innerHTML = `${spend} - ${amount2} zł`;
  li2.appendChild(newDiv2);
  spendCont.appendChild(li2);

  deleteButton2.addEventListener("click", () => {
    li2.remove();
    updateSum2(-originalSpend);
  });

  editButton2.addEventListener("click", () => {
    li2.innerHTML = "";

    editSpendInput.value = spend;
    editAmount2Input.value = originalSpend;

    saveButton2.innerText = "ZAPISZ";
    saveButton2.classList.add("libutton");

    li2.appendChild(editSpendInput);
    li2.appendChild(editAmount2Input);
    li2.appendChild(saveButton2);

    editSpendInput.classList.add("e-input");
    editAmount2Input.classList.add("e-amount");
    saveButton2.classList.add("e-button");

    saveButton2.addEventListener("click", () => {
      const updatedSpend = editSpendInput.value;
      const updatedAmount2 = Number(editAmount2Input.value);

      li2.innerHTML = `${updatedSpend} - ${updatedAmount2} zł`;
      li2.appendChild(newDiv2);

      updateSum2(updatedAmount2 - originalSpend);

      originalSpend = updatedAmount2;
    });
  });

  updateSum2(originalSpend);

  spendInput.value = "";
  amount2Input.value = "";
};

const updateTotal = () => {
  const total = currentSum - currentSum2;
  totalElement.innerHTML = `Możesz wydać ${total} zł`;

  moneyBorder.classList.remove("green", "red");

  if (total > 0) {
    moneyBorder.classList.add("green");
  } else if (total < 0) {
    moneyBorder.classList.add("red");
  }
};

earnButton.addEventListener("click", newEarning);
spendButton.addEventListener("click", newSpending);
