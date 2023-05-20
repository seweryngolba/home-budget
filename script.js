const earnButton = document.querySelector("#btnearn");
const spendButton = document.querySelector("#btnspend");

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
  });

  editButton.addEventListener("click", () => {
    li.innerHTML = "";

    editEarnInput.value = earn;
    editAmountInput.value = amount;

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
    });
  });

  earnInput.value = "";
  amountInput.value = "";
};

const newSpending = () => {
  const spendCont = document.querySelector("#pspend");
  const spend = document.querySelector("#spendings").value;
  const amount2 = Number(document.querySelector("#amount2").value);
  const li2 = document.createElement("li");
  spendCont.appendChild(li2);
  li2.innerHTML = `${spend} - ${amount2} zł`;
};

earnButton.addEventListener("click", newEarning);
spendButton.addEventListener("click", newSpending);
