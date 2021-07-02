export const printMatrix = (matrix: number[][]) => {
  let stringBuffer: String;

  matrix.forEach((line) => {
    stringBuffer = '\t';
    line.forEach(item => {
      stringBuffer += item.toString();
    })
    console.log(stringBuffer);
  })
console.log("\n ========= \n");
}
