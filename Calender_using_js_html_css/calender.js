
// !Making the calendar from the current date and the current year by default
const makeCalendar = (month, year) => {
    if (month !== -1 || year !== -1) {
      let calendarBody = document.querySelector("table tbody");
      //   console.log(calendarBody);
  
      calendarBody.innerHTML = "";
  
      let daysInMonth = new Date(year, month, 0).getDate();
      //   console.log(daysInMonth);
  
      let firstDay = new Date(year, month - 1, 1).getDay();
      //   console.log(firstDay);
  
      let dateCounter = 1;
  
      for (let i = 0; i < 6; i++) {
        let row = calendarBody.insertRow(i);
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            let cell = row.insertCell(j);
            cell.innerHTML = "";
          } else if (dateCounter > daysInMonth) {
            let cell = row.insertCell(j);
            cell.innerHTML = "";
          
          } else {
            let cell = row.insertCell(j);
            cell.innerHTML = dateCounter;
            dateCounter++;
          }
        }
      }
    }
  };
  
  // !Getting the current Month and Year from Date()
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  // console.log(currentDate, currentMonth, currentYear);
  makeCalendar(currentMonth, currentYear);
  
  let monthDropdown = document.getElementById("month");
  let yearDropdown = document.getElementById("year");
  
  // !updating the calendar
  const updateCalendar = () => {
    let month = parseInt(monthDropdown.value);
    let year = parseInt(yearDropdown.value);
    //   console.log(month, year);
    makeCalendar(month, year);
  };
  
  monthDropdown.addEventListener("change", updateCalendar);
  yearDropdown.addEventListener("change", updateCalendar);
  
  // !Cell color changer function
  const changeColorOfCell = (cell) => {
    let currentColor = cell.style.backgroundColor;
    console.log(currentColor);
    if (currentColor == "white" || currentColor == "") {
      cell.style.backgroundColor = "green";
    } else {
      cell.style.backgroundColor = "white";
    }
  };
  
  let inputDate = document.getElementById("inputDate");
  
  inputDate.addEventListener("keyup", function (event) {
    // ? 13 is a keyCode of Enter key
    if (event.keyCode == 13) {
      // console.log("elo");
  
      let date = parseInt(inputDate.value);
  
      if (!isNaN(date)) {
        //   console.log(date);
        let cells = document.querySelectorAll("table td");
        for (let i = 0; i < cells.length; i++) {
          let cell = cells[i];
          if (parseInt(cell.innerHTML) == date) {
            //   console.log("elo1");
            changeColorOfCell(cell);
            break;
          }
        }
      }
    }
  });
  
  let btnClick = document.getElementById("btnEnter");
  btnClick.addEventListener("click", function () {
    let date = parseInt(inputDate.value);
  
    if (!isNaN(date)) {
      // console.log(date);
      let cells = document.querySelectorAll("table td");
      for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (parseInt(cell.innerHTML) == date) {
          // console.log("elo1");
          changeColorOfCell(cell);
          break;
        }
      }
    }
  });