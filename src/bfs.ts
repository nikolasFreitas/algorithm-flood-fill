type pair = {x: number, y: number};

const validate = (maxLength: number, coords: number): boolean => {
  if (coords >= maxLength || coords < 0) {
    return false;
  }

  return true;
}

export const bfs = (matrix: number[][], newValue: number, x: number, y: number) => {
  const matrixWidth = matrix.length;
  const matrixHeight = matrix[0].length;

  const v: number[] = new Array(8).fill(0);
  // map of already known exchangeable field
  const viz: number[][] = [];
  for(let i = 0; i < matrixHeight; i++) {
    viz.push([...v])
  }

  const queue: pair[] = [{x, y}];
  
  const exchangeableValue = matrix[x][y];
  viz[x][y] = 1;

  while (queue.length) {
    const pair = queue.shift() as pair;
    const x1 = pair.x;
    const y1 = pair.y;
    matrix[x1][y1] = newValue;

    // up
    if (validate(matrixWidth, x1 + 1) && !viz[x1 + 1][y1] && matrix[x1+1][y1] === exchangeableValue) {
      const pair: pair = {x: x1+1, y: y1};
      queue.push(pair);
      viz[x1 + 1][y1] = 1;
    }

    // down
    if (validate(matrixWidth, x1 - 1) && !viz[x1 - 1][y1] && matrix[x1-1][y1] === exchangeableValue) {
      const pair: pair = {x: x1 - 1, y: y1};
      queue.push(pair);
      viz[x1 + 1][y1] = 1;
    }

    // right
    if (validate(matrixHeight, y1 + 1) && !viz[x1][y1 + 1] && matrix[x1][y1 + 1] === exchangeableValue) {
      const pair: pair = {x: x1, y: y1 + 1};
      queue.push(pair);
      viz[x1][y1 + 1] = 1;
    }

    // left
    if (validate(matrixHeight, y1 - 1) && !viz[x1][y1 - 1] && matrix[x1][y1 - 1] === exchangeableValue) {
      const pair: pair = {x: x1, y: y1 - 1};
      queue.push(pair);
      viz[x1][y1 - 1] = 1;
    }
  }
}