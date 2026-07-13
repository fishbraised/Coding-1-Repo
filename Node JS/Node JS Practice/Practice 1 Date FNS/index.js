import { add, format, getDay, differenceInDays, getDate } from "date-fns";

// Question 1

const getDateAfterXDays = (noOfDays) => {
  const date = new Date(2020, 8, 0, 22);

  const newDate = add(date, {
    days: noOfDays,
  });

  const formattedDate = format(date, "dd-MM-yyyy");
  console.log("formattedDate: ", formattedDate);

  const formattedNewDate = format(newDate, "dd-MM-yyyy");
  console.log("formattedNewDate: ", formattedNewDate);
};

// getDateAfterXDays(10);

//

// Question 2

const weekendChecker = (date) => {
  const dayOfWeek = getDay(new Date(date));
  const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;

  console.log("isWeekend: ", isWeekend);
};

// weekendChecker("2024-10-15");
// weekendChecker("2024-10-19");

//

// Question 3

const daysBetweenDates = (date1, date2) => {
  const diffInDays = differenceInDays(new Date(date2), new Date(date1));

  console.log("diffInDays: ", diffInDays);
};

// daysBetweenDates("2024-01-01", "2024-01-15");

//

// Question 4

const startOfTheMonth = (date) => {
  const firstDayDateOfMonth = format(new Date(date), "yyyy-MM-01");
  console.log("firstDayDateOfMonth:", firstDayDateOfMonth);
};

startOfTheMonth("2024-10-15");
