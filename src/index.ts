import { bfs } from "./bfs";
import { field, newElement, xTrigger, yTrigger } from "./inputs";
import { recursive } from "./recursive";
import { printMatrix } from './util';

const fieldCloneRecursive = JSON.parse(JSON.stringify(field)) as typeof field;

console.log("Recursive version");
printMatrix(fieldCloneRecursive);
recursive(fieldCloneRecursive, newElement, xTrigger, yTrigger, field[xTrigger][yTrigger]);
printMatrix(fieldCloneRecursive);

// ==================


console.log("\n\n-----||-----\n\n", "BFS version", "\n");

const fieldCloneBottomUp = JSON.parse(JSON.stringify(field)) as typeof field;
printMatrix(fieldCloneBottomUp);
bfs(fieldCloneBottomUp, newElement, xTrigger, yTrigger);
printMatrix(fieldCloneBottomUp);




