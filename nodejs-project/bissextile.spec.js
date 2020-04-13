﻿let exercice = require('./bissextile.js');

let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.bissextile.apply(null, test.values) === test.answer){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);


if (success==tests.length) {
  printMessage('Standard Output', 'C\'est une réussite. 🤔');
} else {
  printMessage('Standard Output💡', 'Encore un petit effort.  🤔');
}


function createTests() {
  let tests = [
    {
      name:"Test 0",
      values:[2016],
      answer:bissextileAnswer(2016)
    },
    {
      name:"Test 1",
      values:[2020],
      answer:bissextileAnswer(2020)
    },
    {
      name:"Test 2",
      values:[1857],
      answer:bissextileAnswer(1857)
    },
    {
      name:"Test 3",
      values:[207],
      answer:bissextileAnswer(207)
    },
    {
      name:"Test 4",
      values:[847],
      answer:bissextileAnswer(847)
    },
    {
      name:"Test 5",
      values:[1784],
      answer:bissextileAnswer(1784)
    },
    {
      name:"Test 6",
      values:[403],
      answer:bissextileAnswer(403)
    },
    {
      name:"Test 7",
      values:[1476],
      answer:bissextileAnswer(1476)
    },
    {
      name:"Test 8",
      values:[1734],
      answer:bissextileAnswer(1734)
    },
    {
      name:"Test 9",
      values:[1873],
      answer:bissextileAnswer(1873)
    }
  ]

  return tests;
}
function bissextileAnswer(annee)
{
  if(annee%4===0 && annee%100!==0){
    return 1;
  }
  else if annee%400===0){
    return 1;
  }
  else{
    return 0;
  }
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
