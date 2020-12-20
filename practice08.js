//write a function that takes in a string array and returns an integer array of the lengths of the corresponding item from the first array

const changeArr = (arr) => arr.map((i) => i.length)

console.log(changeArr(["test", "again", "once more"]))

