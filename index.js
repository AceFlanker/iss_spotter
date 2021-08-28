const { nextISSTimesForMyLocation } = require('./iss');

// COMPASS CODE

// const printPassTimes = function(passTimes) {
//   for (const pass of passTimes) {
//     const datetime = new Date(0);
//     datetime.setUTCSeconds(pass.risetime);
//     const duration = pass.duration;
//     console.log(`Next pass at ${datetime} for ${duration} seconds!`);
//   }
// };

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   printPassTimes(passTimes);
// });

// MY OWN CODE

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log('It didn\'t work!', error);
    return;
  }
  if (passTimes !== null) {
    for (const time of passTimes) {
      console.log('Next pass at ' + Date(time.risetime) + ' for ' + time.duration + ' seconds!');
    }
  }
});