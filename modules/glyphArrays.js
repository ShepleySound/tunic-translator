import { consonantLines as c, vowelLines as v } from "./lineDefs.js";
const consonants = {
  0: {
    pathArray: [],
    translation: "",
  },
  1: {
    pathArray: [c.lowerLeft, c.lowerRight],
    translation: "M",
  },
  2: {
    pathArray: [c.lowerLeft, c.lowerRight, c.upperLeft],
    translation: "N",
  },
  3: {
    pathArray: [
      c.lowerLeft,
      c.lowerRight,
      c.upperLeft,
      c.upperRight,
      c.lowerMiddle,
      c.upperMiddleBottom,
      c.upperMiddleTop,
    ],
    translation: "NG",
  },
  4: {
    pathArray: [c.lowerMiddle, c.upperMiddleBottom, c.upperRight],
    translation: "P",
  },
  5: {
    pathArray: [c.lowerRight, c.upperMiddleBottom, c.upperMiddleTop],
    translation: "B",
  },
  6: {
    pathArray: [c.lowerMiddle, c.upperMiddleBottom, c.upperLeft, c.upperRight],
    translation: "T",
  },
  7: {
    pathArray: [
      c.upperMiddleTop,
      c.upperMiddleBottom,
      c.lowerLeft,
      c.lowerRight,
    ],
    translation: "D",
  },
  8: {
    pathArray: [
      c.upperMiddleTop,
      c.upperMiddleBottom,
      c.lowerRight,
      c.upperRight,
    ],
    translation: "K",
  },
  9: {
    pathArray: [c.lowerMiddle, c.lowerRight, c.upperMiddleBottom, c.upperRight],
    translation: "G",
  },
  10: {
    pathArray: [c.upperMiddleTop, c.upperMiddleBottom, c.lowerLeft],
    translation: "J",
  },
  11: {
    pathArray: [c.lowerMiddle, c.upperMiddleBottom, c.upperLeft],
    translation: "CH",
  },
  12: {
    pathArray: [c.lowerMiddle, c.lowerLeft, c.upperMiddleBottom, c.upperRight],
    translation: "F",
  },
  13: {
    pathArray: [
      c.lowerRight,
      c.upperMiddleBottom,
      c.upperMiddleTop,
      c.upperLeft,
    ],
    translation: "V",
  },
  14: {
    pathArray: [
      c.lowerMiddle,
      c.upperMiddleBottom,
      c.upperMiddleTop,
      c.upperLeft,
      c.upperRight,
    ],
    translation: "TH",
  },
  15: {
    pathArray: [
      c.lowerMiddle,
      c.lowerLeft,
      c.lowerRight,
      c.upperMiddleBottom,
      c.upperMiddleTop,
    ],
    translation: "TH",
  },
  16: {
    pathArray: [
      c.lowerMiddle,
      c.lowerLeft,
      c.upperMiddleBottom,
      c.upperMiddleTop,
      c.upperRight,
    ],
    translation: "S",
  },
  17: {
    pathArray: [
      c.lowerMiddle,
      c.lowerRight,
      c.upperMiddleBottom,
      c.upperMiddleTop,
      c.upperLeft,
    ],
    translation: "Z",
  },
  18: {
    pathArray: [
      c.lowerMiddle,
      c.lowerLeft,
      c.lowerRight,
      c.upperMiddleBottom,
      c.upperLeft,
      c.upperRight,
    ],
    translation: "SH",
  },
  19: {
    pathArray: [
      c.lowerLeft,
      c.lowerRight,
      c.upperMiddleBottom,
      c.upperMiddleTop,
      c.upperLeft,
      c.upperRight,
    ],
    translation: "ZH",
  },
  20: {
    pathArray: [
      c.lowerMiddle,
      c.lowerRight,
      c.upperMiddleBottom,
      c.upperMiddleTop,
    ],
    translation: "H",
  },
  21: {
    pathArray: [
      c.lowerMiddle,
      c.upperMiddleBottom,
      c.upperMiddleTop,
      c.upperRight,
    ],
    translation: "R",
  },
  22: {
    pathArray: [
      c.lowerMiddle,
      c.upperMiddleBottom,
      c.upperMiddleTop,
      c.upperLeft,
    ],
    translation: "Y",
  },
  23: {
    pathArray: [c.upperLeft, c.upperRight],
    translation: "W",
  },
  24: {
    pathArray: [c.lowerMiddle, c.upperMiddleBottom, c.upperMiddleTop],
    translation: "L",
  },
};

const vowels = {
  0: {
    pathArray: [],
    translation: "",
  },
  1: {
    pathArray: [v.middleBottom, v.middleTop, v.upperLeft, v.upperRight],
    translation: "A",
  },
  2: {
    pathArray: [v.middleBottom, v.middleTop, v.upperLeft],
    translation: "AH",
  },
  3: {
    pathArray: [v.lowerLeft, v.lowerRight],
    translation: "I",
  },
  4: {
    pathArray: [v.lowerLeft, v.lowerRight, v.middleBottom, v.middleTop],
    translation: "E",
  },
  5: {
    pathArray: [v.lowerLeft, v.middleBottom, v.middleTop],
    translation: "OU",
  },
  6: {
    pathArray: [v.upperLeft, v.upperRight],
    translation: "EH",
  },
  7: {
    pathArray: [
      v.lowerRight,
      v.lowerLeft,
      v.middleBottom,
      v.middleTop,
      v.upperLeft,
    ],
    translation: "EE",
  },
  8: {
    pathArray: [
      v.lowerLeft,
      v.middleBottom,
      v.middleTop,
      v.upperLeft,
      v.upperRight,
    ],
    translation: "OO",
  },
  9: {
    pathArray: [
      v.lowerRight,
      v.lowerLeft,
      v.middleBottom,
      v.middleTop,
      v.upperRight,
    ],
    translation: "IR",
  },
  10: {
    pathArray: [
      v.lowerRight,
      v.middleBottom,
      v.middleTop,
      v.upperLeft,
      v.upperRight,
    ],
    translation: "ORE",
  },
  11: {
    pathArray: [v.lowerRight, v.lowerLeft, v.upperLeft, v.upperRight],
    translation: "AR",
  },
  12: {
    pathArray: [v.lowerRight, v.middleBottom, v.middleTop, v.upperLeft],
    translation: "EER",
  },
  13: {
    pathArray: [v.upperLeft],
    translation: "AY",
  },
  14: {
    pathArray: [v.upperRight],
    translation: "IE",
  },
  15: {
    pathArray: [v.lowerLeft],
    translation: "OI",
  },
  16: {
    pathArray: [v.lowerRight],
    translation: "OW",
  },
  17: {
    pathArray: [
      v.lowerRight,
      v.lowerLeft,
      v.middleBottom,
      v.middleTop,
      v.upperLeft,
      v.upperRight,
    ],
    translation: "OH",
  },
  18: {
    pathArray: [v.lowerRight, v.middleBottom, v.middleTop],
    translation: "AIR",
  },
};

export { consonants, vowels };
