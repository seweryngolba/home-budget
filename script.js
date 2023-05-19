const earnButton = document.querySelector("#btnearn");
const spendButton = document.querySelector("#btnspend");

const newEarning = () => {
  const earnCont = document.querySelector("#learn");
  const earn = document.querySelector("#earnings").value;
  const amount = Number(document.querySelector("#amount").value);
  const li = document.createElement("li");
  const newDiv = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
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
  document.querySelector("#earnings").value = "";
  document.querySelector("#amount").value = "";
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
