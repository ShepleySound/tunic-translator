//Gotta figure out what this does and why it's the same across all lines
const lineTransform = "translate(-357.1798 -270.567)";

const specials = {
  swapper: {
    cx: "142.8238",
    cy: "443.9476",
    r: "19.2731",
    transform: "translate(-.0036 -.1443)",
  },
  glyphConnector: {
    d: "M642.5702 500H357.1798",
    transform: lineTransform,
  },
};

const consonantLines = {
  upperRight: {
    d: "M642.3202 353.1686 500 435.3372",
    transform: lineTransform,
  },
  upperMiddleTop: {
    d: "M500 435.3372V271",
    transform: lineTransform,
  },
  upperMiddleBottom: {
    d: "M500 500v-64.6628",
    transform: lineTransform,
  },
  upperLeft: {
    d: "M357.6798 353.1686 500 435.3372",
    transform: lineTransform,
  },
  lowerRight: {
    d: "M642.3202 612.9286 500 530.7599",
    transform: lineTransform,
  },
  lowerMiddle: {
    d: "M500 530.76v164.3372",
    transform: lineTransform,
  },
  lowerLeft: {
    d: "M357.6798 612.9286 500 530.7599",
    transform: lineTransform,
  },
};

const vowelLines = {
  lowerRight: {
    d: "m500 695.0972 142.3166-82.1686",
    transform: lineTransform,
  },
  lowerLeft: {
    d: "m500 695.0972-142.3238-82.1686",
    transform: lineTransform,
  },
  middleBottom: {
    d: "M364.6762 613.0785v-82.337",
    transform: lineTransform,
  },
  middleTop: {
    d: "M364.6762 353.503v146.4981",
    transform: lineTransform,
  },
  upperLeft: {
    d: "m500 271-142.3202 82.1686",
    transform: lineTransform,
  },
  upperRight: {
    d: "m500 271 142.3202 82.1686",
    transform: lineTransform,
  },
};

export { specials, consonantLines, vowelLines };
