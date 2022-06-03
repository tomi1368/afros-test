const numberCount = (numList) => numList.length;

const averageOddEven = (numList) => {
  let evenCount = 0;
  let evenAcum = 0;
  let oddAcum = 0;
  const isEven = (num) => num % 2 === 0;
  numList.forEach((num) => {
    if (isEven(num)) {
      evenAcum += num;
      evenCount++;
    } else {
      oddAcum += num;
    }
  });
  let evenAverage = evenAcum / evenCount;
  let oddAverage = oddAcum / (numList.length - evenCount);
  return {
    evenAverage,
    oddAverage,
  };
};

const greaterThan = (numList) =>
  [...numList.filter((num) => num > 1000)].reduce(
    (result, current, currentIndex, array) =>
      currentIndex == array.length - 1
        ? (current + result) / array.length
        : current + result,
    0
  );

const lowerAndGreater = (numList) => {
  return {
    lower: numList.sort()[0],
    greater: numList.sort()[numList.length - 1],
  };
};

const porcentNumbers = numList =>{
    const greater = numList.sort()[numList.length - 1]
    const minimum = numList.sort()[0]
    const calcPorecent = (num) => (num * 100)/greater
    let porcents = {}
    for ( const num of numList){
        if (num == minimum){
            porcents= {...porcents,minimum: calcPorecent(num)}
        }
        porcents= {...porcents,[num]: calcPorecent(num)}
    }
    return porcents
}

