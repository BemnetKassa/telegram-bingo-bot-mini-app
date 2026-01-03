export function countCompletedLines(marked) {
  let completed = 0;

  // rows
  for (let r = 0; r < 5; r++) {
    let full = true;
    for (let c = 0; c < 5; c++) {
      if (!marked[`${c}-${r}`]) {
        full = false;
        break;
      }
    }
    if (full) completed++;
  }

  // columns
  for (let c = 0; c < 5; c++) {
    let full = true;
    for (let r = 0; r < 5; r++) {
      if (!marked[`${c}-${r}`]) {
        full = false;
        break;
      }
    }
    if (full) completed++;
  }

  return completed;
}
