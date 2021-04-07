function convert() {
  let newArray = [];
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    newArray[i] = typeof element === 'number' 
      ? element.toString() 
      : parseInt(element);
  }

  return newArray;
}

const executeforEach = (arr, callback) => {
  arr.forEach(el => callback(el));
};

const mapArray = (arr, callback) => {
  let parseArr = arr.map(Number);

  parseArr.forEach((el, index) => parseArr[index] = callback(el));

  return parseArr;
};

const filterArray = (arr, callback) => {
  return arr.filter(el => callback(el));
};

const flipOver = (str) => {
  return str.split('').reverse().join('');
};

const makeListFromRange = (arr) => {
  let result = [];

  if(arr.length === 1)
    result.push(arr[0]);

  if (arr.length > 1) {
    for (let i = arr[0]; i <= arr[1]; i++)
      result.push(i);
  }

  return result;   
};

const getArrayOfKeys = (arr, key) => {
  return arr.map(el => el[key]);
};

const substitute = (arr) => {
  return arr.map(el => el < 30 ? '*' : el);
};

const getPastDay = (dt, numberOfDays) => {
  const numberMsInDay = 1000 * 60 * 60 * 24;
  return new Date(dt - numberOfDays * numberMsInDay).getDate()
};

const formatDate = (dt) => {
  var formatDtArr = [
    '0' + (dt.getMonth() + 1),
    '0' + dt.getDate(),
    '0' + dt.getHours(),
    '0' + dt.getMinutes()
    ].map(el => el.slice(-2));

  return dt.getFullYear().toString() + '/'
    + formatDtArr.slice(0, 2).join('/') 
    + ' ' + formatDtArr.slice(2).join(':');
};

module.exports = {
  convert,
  executeforEach,
  mapArray,
  filterArray,
  flipOver,
  makeListFromRange,
  getArrayOfKeys,
  substitute,
  getPastDay,
  formatDate,
};
