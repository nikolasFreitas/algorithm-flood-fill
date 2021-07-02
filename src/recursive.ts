
export const recursive = (field: number[][], newElement: number, x: number, y: number, prevElement: number) => {
  const i = field.length;
  const j = field[0].length;

  if (x < 0 || x >= j || y < 0 || y >= i) {
    return;
  }

  if (field[y][x] === prevElement) {
    field[y][x] = newElement;
  } else {
    return;
  }

  recursive(field, newElement, x + 1, y, prevElement);
  recursive(field, newElement, x - 1, y, prevElement);
  recursive(field, newElement, x, y + 1, prevElement);
  recursive(field, newElement, x, y - 1, prevElement);
}