const brain = require('brain.js');
// Count to 5
// 1-5, 5-1

const trainingData = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [2,3,4],
    [5,4,3,2,1]
];

const net = new brain.recurrent.LSTMTimeStep();

//net.train(trainingData, { log: (status) => console.log(status) });
net.train(trainingData);
console.log(net.run([1,2,3,4]))
console.log(net.run([2,3]))
console.log(net.run([6,7,8,9]))
console.log(net.run([4,5,6,7]))

console.log(net.run([5,4,3,2]))