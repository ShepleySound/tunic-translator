//Gotta figure out what this does and why it's the same across all lines
const lineTransform = "translate(-357.1798 -270.567)";

//These all just hold the data for SVG attributes. Messy probably?
const swapperAccent = {
  cx: "142.8238",
  cy: "443.9476",
  r: "19.2731",
  transform: "translate(-.0036 -.1443)",
};

const glyphConnector = {
  d: "M642.5702 500H357.1798",
  transform: lineTransform,
};

const upperRight = {
  d: "M642.3202 353.1686 500 435.3372",
  transform: lineTransform,
};

const upperMiddleTop = {
  d: "M500 435.3372V271",
  transform: lineTransform,
};

const upperMiddleBottom = {
  d: "M500 500v-64.6628",
  transform: lineTransform,
};

const upperLeft = {
  d: "M357.6798 353.1686 500 435.3372",
  transform: lineTransform,
};

const LowerRight = {
  d: "M642.3202 612.9286 500 530.7599",
  transform: lineTransform,
};

const LowerMiddle = {
  d: "M500 530.76v164.3372",
  transform: lineTransform,
};

const LowerLeft = {
  d: "M357.6798 612.9286 500 530.7599",
  transform: lineTransform,
};

const lineExists = (position, glyph) => {
  return Array.from(glyph.children).some(
    (e) => e.attributes.d.nodeValue === position.d
  );
};

const addLine = (position, glyph) => {
  if (lineExists(position, glyph)) {
    return;
  }
  const line = document.createElementNS(svgns, "path");
  for (const property in position) {
    line.setAttribute(property, position[property]);
  }
  glyph.appendChild(line);
};

const svgns = "http://www.w3.org/2000/svg";
const glyphGrid = document.querySelector(".glyph-grid");

const addGlyph = () => {
  let glyphContainer = document.createElement("div");
  glyphContainer.classList.add("glyph-container");
  let glyph = document.createElementNS(svgns, "svg");
  glyph.classList.add("glyph");
  let pathGroup = document.createElementNS(svgns, "g");
  pathGroup.setAttribute("fill", "none");
  pathGroup.setAttribute("stroke", "#000");
  glyph.setAttribute("viewBox", "0 0 285.3905 463.5763");
  glyph.appendChild(pathGroup);
  glyphContainer.appendChild(glyph);
  glyphGrid.appendChild(glyphContainer);
  return pathGroup;
};

const glyphOne = addGlyph();
const glyphTwo = addGlyph();
const glyphThree = addGlyph();
addLine(LowerLeft, glyphOne);
addLine(LowerMiddle, glyphOne);
addLine(LowerLeft, glyphOne);
