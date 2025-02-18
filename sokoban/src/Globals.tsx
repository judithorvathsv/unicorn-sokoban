let GameBoard: any[] = [
  [ "", "", "w", "w", "w", "w", "w", "", ""],
  [ "w", "w", "w", "", "", "", "w", "", ""],
  [ "w", "", "p", "b", "", "", "w", "", ""],
  [ "w", "w", "w", "", "b", "", "w", "", ""],
  [ "w", "", "w", "w", "b", "", "w", "", ""],
  [ "w", "", "w", "", "", "", "w", "w", ""],
  [ "w", "b", "", "b", "b", "b", "", "w", ""],
  [ "w", "", "", "", "", "", "", "w", ""],
  [ "w", "w", "w", "w", "w", "w", "w", "w", ""],
];

let SecondLvlGameBoard: any[] = [
  ["", "", "", "", "w", "w", "w", "w", "w", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "w", "", "", "", "w", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "w", "b", "", "", "w", "", "", "", "", "", "", "", "", "", "", "", "", ""],

  ["", "", "w", "w", "w", "", "", "", "w", "w", "w", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "w", "", "", "b", "", "", "b", "", "w", "", "", "", "", "", "", "", "", "", "", ""],
  ["w", "w", "w", "", "w", "", "w", "w", "w", "", "w", "", "", "", "", "", "w", "w", "w", "w", "w", "w"],
  
  ["w", "", "", "", "w", "", "w", "w", "w", "", "w", "w", "w", "w", "w", "w", "w", "", "", "", "", "w"],
  ["w", "", "b", "", "", "b", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "w"],
  ["w", "w", "w", "w", "w", "", "w", "w", "w", "w", "", "w", "p", "w", "w", "w", "w", "", "", "", "", "w"],

  ["", "", "", "", "w", "", "", "", "", "", "", "w", "w", "w", "", "", "w", "w", "w", "w", "w", "w"],
  ["", "", "", "", "w", "w", "w", "w", "w", "w", "w", "", "", "", "", "", "", "", "", "", "", ""],
];

let ThirdLvlGameBoard: any[] = [
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "", ""],
  ["w", "", "", "", "", "w", "", "", "", "", "", "w", "w", "w"],
  ["w", "", "", "", "", "w", "", "b", "", "", "b", "", "", "w"],

  ["w", "", "", "", "", "w", "b", "w", "w", "w", "w", "", "", "w"],
  ["w", "", "", "", "", "", "", "p", "", "w", "w", "", "", "w"],
  ["w", "", "", "", "", "w", "", "w", "", "", "b", "", "w", "w"],

  ["w", "w", "w", "w", "w", "w", "", "w", "w", "b", "", "b", "", "w"],
  ["", "", "w", "", "b", "", "", "b", "", "b", "", "b", "", "w"],
  ["", "", "w", "", "", "", "", "w", "", "", "", "", "", "w"],
  ["", "", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
];

export let GameArray = [GameBoard, SecondLvlGameBoard, ThirdLvlGameBoard];