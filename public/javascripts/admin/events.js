const eventName = document.getElementById('event-name');
const eventPrice = document.getElementById('event-price');
const eventDesc = document.getElementById('event-desc');
const eventDate = document.getElementById('event-date');
const eventStart = document.getElementById('time-begin');
const eventEnd = document.getElementById('time-end');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');
const elems = [eventName, eventPrice, eventDesc, eventDate, eventStart, eventEnd];




const validateInputs = function validateInputs() {
  for (elem of elems) {
    if (elem.value === "") {
      return false;
    }
  }
  return true;
};

const pushEvent = function pushEvent() {
  let eventInfo = {
    name: eventName.value,
    price: eventPrice.value,
    desc: eventDesc.value,
    date: eventDate.value,
    begin: eventStart.value,
    end: eventEnd.value,
  }
  // if (validateInputs) {
  $.post('/api/admin/events', eventInfo);
  // } else {
  //   console.log("nah fill the input boxes cunt");
  // }
};

const clearInputs = function clearInputs() {
  for (elem of elems) {
    elem.value = "";
  }
}

clearButton.addEventListener('click', clearInputs)
submitButton.addEventListener('click', pushEvent);
