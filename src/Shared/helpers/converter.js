import moment from 'moment';

export const formatter = {
  toMoney: (input) => {
    if (!input) {
      return;
    }
    return "₦" +
    input
      .toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
      })
      .replace("NGN", "")
  },
  toDate: (date) => moment(date).format('DD-MMM-YYYY'),
  toTime: (time) => moment(time, ["HH.mm"]).format("hh:mm a"),
  addTimeToDate: (date, time) => {
    if ((!time) || (!date)) {
      return;
    }

    const [hr, min, sec] = time.split(':');
    const newDate = new Date(date);
    newDate.setHours(hr);
    newDate.setMinutes(min);
    newDate.setSeconds(sec);

    return newDate;
  }
};


export function addThreeDots(string, limit = 100) {
  var dots = "...";
  if (string?.length > limit) {
    string = string.substring(0, limit) + dots;
  }

  return string;
}

export function capitalize(textInput) {
  if (textInput) {
    textInput = textInput?.split(" ").map((input) => {
      return input.toUpperCase() + input.substring(1);
    }).join(" ");
  }
  return textInput;
}


const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon"
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

