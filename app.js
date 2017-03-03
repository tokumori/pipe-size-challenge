function minPipeSize (rateArray) {
  if (Array.isArray(rateArray) && rateArray.length === 2) {
    let rateZ = rateArray[0] + rateArray[1];
    rateArray.push(rateZ)
    let tolerance = 2/100;
    let sizeArray = [];
    let pipeSizes = [8,10,12,16,20,25,32,40,50,63,80,100,127,160,201,254,320,404,509,642,810,1021,1288,1624,2048,2582,3256,4106,5178,6529,8233,10382,13091,16507,20815,26248,33098,41735,52627,66361,83680,105518,133056,167780,211566,250000,300000,350000,400000,450000,500000,600000,700000,750000,800000,900000,1000000,1250000,1500000,1750000,2000000];
    let valveSizes = [15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]
    for (let i = 0; i < rateArray.length; i++) {
      if (typeof rateArray[i] !== 'number') {
        return console.log('Please enter numbers only.');
      }
      let rate = rateArray[i];
      let minPipeSize = (1.732 * 12.9 * 200 * rate)/ (208 * tolerance);
      let minValveSize = rate * 1.25 * 1.25;

      // tried to do for loop, but reduce was faster to code.
      // might change after completing challenge.
      let pipeSize = pipeSizes.reduce((accumulator, currentVal) => {
        return accumulator > minPipeSize ? accumulator : currentVal;
      });
      if (rateArray[i] !== rateArray[rateArray.length - 1]) {
        let valveSize = valveSizes.reduce((accumulator, currentVal) => {
          return accumulator > minValveSize ? accumulator : currentVal;
        });
        sizeArray.push(pipeSize, valveSize);
      } else {
        sizeArray.push(pipeSize);
      }
    }
    return console.log(sizeArray);
  }
  return console.log('Please enter an array with only two numbers.');
}

minPipeSize([16.45, 18.9]);