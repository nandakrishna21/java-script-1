var dupNumb =  [5, 7, 7, 4, 3, 8, 1, 2];

var newDupNumb = [];

var duplicates = [];

for (let i = 0; i < dupNumb.length; i++) {
  if (newDupNumb.indexOf(dupNumb[i]) == -1) {
    newDupNumb.push(dupNumb[i]);
  } else {
    duplicates.push(dupNumb[i]);
  }
}

console.log(newDupNumb);