import {
  formatDistanceToNow,
  nextFriday,
  format,
  isLeapYear,
  getDaysInYear,
  compareDesc,
  addBusinessDays,
  areIntervalsOverlapping,
} from "date-fns";

// Question 5

const relativeTime = (pastDate) => {
  const relativeTime = formatDistanceToNow(pastDate, { addSuffix: true });

  console.log(relativeTime);
};

// relativeTime(new Date(Date.now() - 2 * 1000 * 60 * 60));

//

// Question 6

const nextSpecificWeekday = (date) => {
  const nextFridayFromNow = nextFriday(new Date(date));
  const formattedNextFridayFromNow = format(nextFridayFromNow, "dd/MM/yyyy");

  console.log(formattedNextFridayFromNow);
};

// nextSpecificWeekday("2024-10-16");

//

// Question 7

const leapYearAndTotalDays = (year) => {
  const isLeap = isLeapYear(new Date(year));
  const totalDays = getDaysInYear(new Date(year));

  console.log({ isLeap, totalDays });
};

// leapYearAndTotalDays("2024");

//

// Question 8

const sortDateArray = (dateArray) => {
  const sortedDateArray = dateArray
    .map((date) => {
      return format(new Date(date), "yyyy-MM-dd");
    })
    .sort(compareDesc)
    .reverse();

  console.log(sortedDateArray);
};

// sortDateArray(["2024-12-01", "2023-05-15", "2024-01-10"]);

//

// Question 9

const businessDaysAdder = (purchaseDate, shippingTransitDays) => {
  const estimatedDeliveryDate = addBusinessDays(
    new Date(purchaseDate),
    shippingTransitDays,
  );

  const formattedEstimatedDeliveryDate = format(
    estimatedDeliveryDate,
    "yyyy-MM-dd",
  );

  console.log("estimatedDeliveryDate: ", estimatedDeliveryDate);

  console.log(
    "formattedEstimatedDeliveryDate: ",
    formattedEstimatedDeliveryDate,
  );
};

// businessDaysAdder("2023-10-13", 2);

//

// Question 10

const meetingRoomOverlap = (schedule1, schedule2) => {
  console.log(areIntervalsOverlapping(schedule1, schedule2));
};

meetingRoomOverlap(
  {
    start: new Date("2024-10-20T10:00:00"),
    end: new Date("2024-10-20T11:00:00"),
  },
  {
    start: new Date("2024-10-20T10:30:00"),
    end: new Date("2024-10-20T11:30:00"),
  },
);
