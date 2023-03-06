const dayElem = document.getElementById("day");

const monthElem = document.getElementById("month");

const yearElem = document.getElementById("year");

const dateContainer = document.getElementById("dateContainer");

const activationAreaElem = document.getElementById("activationArea");
dayElem.addEventListener("keypress", (event) => {
  event.preventDefault();
});
monthElem.addEventListener("keypress", (event) => {
  event.preventDefault();
});
yearElem.addEventListener("keypress", (event) => {
  event.preventDefault();
});
function tugFields() {
  if (
    dateContainer.getBoundingClientRect().right <
    document.documentElement.clientWidth * 0.9
  ) {
    dateContainer.style.left =
      dateContainer.getBoundingClientRect().left + 25 + "px";
    checkInputFieldPosition();
  }
  setTimeout(tugFields, 1000);
}

function tugFieldsBack() {
  if (dateContainer.getBoundingClientRect().left > 125)
    dateContainer.style.left =
      dateContainer.getBoundingClientRect().left -
      (20 + Math.floor(Math.random() * 20)) +
      "px";
  checkInputFieldPosition();
}

function checkInputFieldPosition() {
  disableInputField(dayElem);
  disableInputField(monthElem);
  disableInputField(yearElem);
}
function disableInputField(elem) {
  elem.disabled =
    elem.getBoundingClientRect().left <
      activationArea.getBoundingClientRect().left ||
    elem.getBoundingClientRect().left >
      activationArea.getBoundingClientRect().right ||
    elem.getBoundingClientRect().right <
      activationArea.getBoundingClientRect().left ||
    elem.getBoundingClientRect().right >
      activationArea.getBoundingClientRect().right;
  if (elem.disabled) {
    elem.blur();
  }
}

function submitBirthday() {
  console.log(day.value.length === 1);
  if (day.value != "" && month.value != "" && year.value != "") {
    alert(
      "Your birthday is on the " +
        (day.value.length === 1 ? "0" : "") +
        day.value +
        "." +
        (month.value.length === 1 ? "0" : "") +
        month.value +
        "." +
        year.value
    );
    day.value = "";
    month.value = "";
    year.value = "";
  }
}

console.log("started");
setTimeout(tugFields, 1000);
checkInputFieldPosition();
