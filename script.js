const earnButton = document.querySelector("#btnearn");
const spendButton = document.querySelector("#btnspend");

const newEarning = () => {
  const earnCont = document.querySelector("#learn");
  const earn = document.querySelector("#earnings").value;
  const amount = Number(document.querySelector("#amount").value);
  const li = document.createElement("li");
  earnCont.appendChild(li);
  li.innerHTML = `${earn} - ${amount} zł`;
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
