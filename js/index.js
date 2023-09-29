console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const dateHourNow = new Date().getHours();

  if (dateHourNow >= 6 && dateHourNow <= 12) {
    return "Good Morning";
  }

  if (dateHourNow >= 13 && dateHourNow <= 18) {
    return "Good Afternoon";
  }

  if (dateHourNow >= 19 && dateHourNow <= 22) {
    return "Good Evening";
  }

  if (dateHourNow >= 23 && dateHourNow <= 5) {
    return "Good Night";
  }
}

function getDayColor() {
  // Code here
  const weekDay = new Date().getDay();

  if (weekDay === 1) {
    return "darkgray";
  }

  if (weekDay >= 2 && weekDay <= 5) {
    return "lightblue";
  }

  if (weekDay >= 6 && weekDay <= 7) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
