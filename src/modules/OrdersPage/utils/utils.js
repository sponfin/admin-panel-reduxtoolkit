export const dateStringToMilliseconds = (date) => {
  if (date !== undefined) {
    const year = date.substr(6, 4);
    const month = date.substr(3, 2);
    const day = date.substr(0, 2);
    const dateParse = year + "-" + month + "-" + day;
    return Date.parse(dateParse);
  }
};

export const inSearch = (num, fio, search) => {
  if (num.includes(search) || fio.toLowerCase().includes(search)) return true;
};

export const inRange = (value, from, to, type) => {
  switch (type) {
    case "DATE":
      if (value !== "" && from !== "" && to === "") {
        if (dateStringToMilliseconds(value) >= dateStringToMilliseconds(from))
          return true;
        else return false;
      }
      if (value !== "" && from === "" && to !== "") {
        if (dateStringToMilliseconds(value) <= dateStringToMilliseconds(to))
          return true;
        else return false;
      }
      if (value !== "" && from !== "" && to !== "") {
        if (
          dateStringToMilliseconds(value) >= dateStringToMilliseconds(from) &&
          dateStringToMilliseconds(value) <= dateStringToMilliseconds(to)
        )
          return true;
        else return false;
      }
      if (from === "" && to === "") {
        return true;
      }
    case "SUM":
      if (value !== "" && from !== "" && to === "") {
        if (value >= from) return true;
        else return false;
      }
      if (value !== "" && from === "" && to !== "") {
        if (value <= to) return true;
        else return false;
      }
      if (value !== "" && from !== "" && to !== "") {
        if (value >= from && value <= to) return true;
        else return false;
      }
      if (from === "" && to === "") {
        return true;
      }

    default:
      return true;
  }
};

export const inStatus = (stausOrder, statusArr) => {
  if (statusArr.includes(stausOrder) === true) return true;
  else if (!statusArr.length) return true;
  else return false;
};

export const sortDesc = (a, b) => (b > a ? 1 : -1);
export const sortAsce = (a, b) => (a > b ? 1 : -1);

export const sorting = (keySort, typeSort) => (a, b) => {
  let A = a[keySort];
  let B = b[keySort];

  if (keySort === "num") {
    A = Number(a[keySort]);
    B = Number(b[keySort]);
  }

  if (keySort === "date") {
    A = dateStringToMilliseconds(a[keySort]);
    B = dateStringToMilliseconds(b[keySort]);
  }
  if (typeSort === "desc") return sortDesc(A, B);
  else return sortAsce(A, B);
};
