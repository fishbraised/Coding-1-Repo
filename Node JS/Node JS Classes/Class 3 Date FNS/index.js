import {
  format,
  addDays,
  subDays,
  differenceInDays,
  formatDistanceToNow,
  isAfter,
  startOfDay,
} from "date-fns";

const today = new Date();
// console.log("today: ", today);

const newYear = new Date("2026-12-31");

const pastDate = new Date("2000-11-2");

const format1 = format(today, "yyyy-MM-dd");
// console.log("format1: ", format1);

const format2 = format(today, "EEEE, MMMM do, yyyy");
// console.log("format2: ", format2);

const format3 = addDays(today, 30);
// console.log("no format: ", today);
// console.log("format3: ", format3);

const format4 = subDays(today, 100);
// console.log("no format: ", today);
// console.log("format4: ", format4);

const format5 = differenceInDays(newYear, today);
// console.log("no format: ", newYear);
// console.log("no format: ", today);
// console.log("format5: ", format5);

const format6 = formatDistanceToNow(pastDate, { addSuffix: false });
// console.log("no format: ", pastDate);
// console.log("format6: ", format6);

const format7 = isAfter(today, pastDate);
// console.log("no format: ", today);
// console.log("no format: ", pastDate);
// console.log("format7: ", format7);

const format8 = startOfDay(today);
// console.log("no format: ", format(today, "yyyy-MM-dd, s"));
// console.log("format8: ", format(format8, "yyyy-MM-dd, s"));
