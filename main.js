// const fs = require('fs');
// const readLine = require('readline');

// const rd = readLine.createInterface({
//     input: fs.createReadStream('StockEtablissement_utf8.csv'),
//     console: false
// });

// const stream = fs.create;

// rd.on('line', (line) => {
//     console.log(line.split(',').length);
//     console.log('*************************************************************');
// });

const mongoose = require('mongoose');

async function main() {
  const mongoUrl = 'mongodb://renchglad:qQW8m*2^r7UX@renchglad-cluster.hn3h7.mongodb.net/renchglad-cluster';
  try {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true });
    console.log('connected to MongoDB');
  } catch (error) {
    console.log('error connection to MongoDB:', error.message);
  }
}

main().then(() => console.log('ok')).catch((err) => console.log(err));
