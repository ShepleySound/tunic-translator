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

const lowerRight = {
  d: "M642.3202 612.9286 500 530.7599",
  transform: lineTransform,
};

const lowerMiddle = {
  d: "M500 530.76v164.3372",
  transform: lineTransform,
};

const lowerLeft = {
  d: "M357.6798 612.9286 500 530.7599",
  transform: lineTransform,
};

const vowelLowerLeft = {
  d: "m500 695.0972-142.3238-82.1686",
  transform: lineTransform,
};

const vowelLowerRight = {
  d: "m500 695.0972 142.3166-82.1686",
  transform: lineTransform,
};

const vowelMiddleTop = {
  d: "M364.6762 353.503v146.4981",
  transform: lineTransform,
};

const vowelMiddleBottom = {
  d: "M364.6762 613.0785v-82.337",
  transform: lineTransform,
};

const vowelUpperLeft = {
  d: "m500 271-142.3202 82.1686",
  transform: lineTransform,
};

const vowelUpperRight = {
  d: "m500 271 142.3202 82.1686",
  transform: lineTransform,
};

const lineExists = (position, glyph) => {
  return Array.from(glyph.children).some(
    (e) => e.attributes.d.nodeValue === position.d
  );
};

const addLine = (position, glyphContainer) => {
  const glyph = glyphContainer.firstChild.firstChild;
  if (lineExists(position, glyph)) {
    return;
  }
  const line = document.createElementNS(svgns, "path");
  for (const property in position) {
    line.setAttribute(property, position[property]);
  }
  glyph.appendChild(line);
};

const addAccent = (accentShape, glyphContainer) => {
  const glyph = glyphContainer.firstChild.firstChild;
  const accent = document.createElementNS(svgns, "circle");
  for (const property in accentShape) {
    accent.setAttribute(property, accentShape[property]);
  }
  glyph.appendChild(accent);
};

// SVG namespace
const svgns = "http://www.w3.org/2000/svg";

// Create grid for glyphs
const glyphGrid = document.querySelector(".glyph-grid");
console.log(glyphGrid);
glyphGrid.style.display = "grid";
glyphGrid.style.gridTemplateColumns = "repeat(20, 1.5em)";
glyphGrid.style.gridTemplateRows = "repeat(10, 3em)";

const buttonGridsContainer = document.querySelector(".button-grids-container");

const consonantButtonContainer = document.querySelector(
  ".consonant-button-container"
);
consonantButtonContainer.style.display = "grid";
consonantButtonContainer.style.gridTemplateColumns = "repeat(8, 1.5em";
consonantButtonContainer.style.gridTemplateRows = "repeat(3, 3em";

const vowelButtonContainer = document.querySelector(".vowel-button-container");
vowelButtonContainer.style.display = "grid";
vowelButtonContainer.style.gridTemplateColumns = "repeat(6, 1.5em";
vowelButtonContainer.style.gridTemplateRows = "repeat(3, 3em";

// Creates an empty glyph space
const addGlyph = (glyphSpace) => {
  let glyphContainer = document.createElement("div");
  glyphContainer.classList.add("glyph-container");
  let glyph = document.createElementNS(svgns, "svg");
  glyph.classList.add("glyph");
  let pathGroup = document.createElementNS(svgns, "g");
  pathGroup.setAttribute("fill", "none");
  pathGroup.setAttribute("stroke", "#000");
  pathGroup.setAttribute("stroke-width", "15px");
  glyph.setAttribute("viewBox", "0 0 285.3905 463.5763");
  glyph.appendChild(pathGroup);
  glyphContainer.appendChild(glyph);
  glyphSpace.appendChild(glyphContainer);
  return pathGroup;
};

// Draw empty squares for glyph placement
for (let i = 0; i < 200; i++) {
  addGlyph(glyphGrid);
  glyphGrid.children[i].classList.add("glyph-space");
  glyphGrid.children[i].dataset.consonantIndex = 0;
  glyphGrid.children[i].dataset.vowelIndex = 0;
  glyphGrid.children[i].dataset.positionIndex = i;
}
glyphGrid.children[0].classList.add("selected");
// Draw empty squares for consonant choices
for (let i = 0; i < 24; i++) {
  consonantButton = document.createElement("button");
  consonantButton.classList.add("glyph-button");
  consonantButton.dataset.phonemeType = "consonant";
  consonantButtonContainer.appendChild(consonantButton);
  addGlyph(consonantButtonContainer.children[i]);
}
const consonantBlankButton = document.querySelector(".consonant-blank-button");
consonantBlankButton.dataset.phonemeType = "consonant";
consonantBlankButton.dataset.index = 0;
addGlyph(consonantBlankButton);

for (let i = 0; i < 18; i++) {
  vowelButton = document.createElement("button");
  vowelButton.classList.add("glyph-button");
  vowelButton.dataset.phonemeType = "vowel";
  vowelButtonContainer.appendChild(vowelButton);
  addGlyph(vowelButtonContainer.children[i]);
}

const vowelBlankButton = document.querySelector(".vowel-blank-button");
vowelBlankButton.dataset.phonemeType = "vowel";
vowelBlankButton.dataset.index = 0;
addGlyph(vowelBlankButton);

const swapperAccentButton = document.querySelector(".swapper-accent-button");
swapperAccentButton.dataset.phonemeType = "accent";
addGlyph(swapperAccentButton);

const consonants = {
  0: [],
  1: [lowerLeft, lowerRight],
  2: [lowerLeft, lowerRight, upperLeft],
  3: [
    lowerLeft,
    lowerRight,
    upperLeft,
    upperRight,
    lowerMiddle,
    upperMiddleBottom,
    upperMiddleTop,
  ],
  4: [lowerMiddle, upperMiddleBottom, upperRight],
  5: [lowerRight, lowerMiddle, upperMiddleBottom, upperMiddleTop],
  6: [lowerMiddle, upperMiddleBottom, upperLeft, upperRight],
  7: [upperMiddleTop, upperMiddleBottom, lowerLeft, lowerRight],
  8: [upperMiddleTop, upperMiddleBottom, lowerRight, upperRight],
  9: [lowerMiddle, lowerRight, upperMiddleBottom, upperRight],
  10: [upperMiddleTop, upperMiddleBottom, lowerLeft],
  11: [lowerMiddle, upperMiddleBottom, upperLeft],
  12: [lowerMiddle, lowerLeft, upperMiddleBottom, upperRight],
  13: [lowerRight, upperMiddleBottom, upperMiddleTop, upperLeft],
  14: [lowerMiddle, upperMiddleBottom, upperMiddleTop, upperLeft, upperRight],
  15: [lowerMiddle, lowerLeft, lowerRight, upperMiddleBottom, upperMiddleTop],
  16: [lowerMiddle, lowerLeft, upperMiddleBottom, upperMiddleTop, upperRight],
  17: [lowerMiddle, lowerRight, upperMiddleBottom, upperMiddleTop, upperLeft],
  18: [
    lowerMiddle,
    lowerLeft,
    lowerRight,
    upperMiddleBottom,
    upperLeft,
    upperRight,
  ],
  19: [
    lowerLeft,
    lowerRight,
    upperMiddleBottom,
    upperMiddleTop,
    upperLeft,
    upperRight,
  ],
  20: [lowerMiddle, lowerRight, upperMiddleBottom, upperMiddleTop],
  21: [lowerMiddle, upperMiddleBottom, upperMiddleTop, upperRight],
  22: [lowerMiddle, upperMiddleBottom, upperMiddleTop, upperLeft],
  23: [upperLeft, upperRight],
  24: [lowerMiddle, upperMiddleBottom, upperMiddleTop],
};

const vowels = {
  0: [],
  1: [vowelMiddleBottom, vowelMiddleTop, vowelUpperLeft, vowelUpperRight],
  2: [vowelMiddleBottom, vowelMiddleTop, vowelUpperLeft],
  3: [vowelLowerLeft, vowelLowerRight],
  4: [vowelLowerLeft, vowelLowerRight, vowelMiddleBottom, vowelMiddleTop],
  5: [vowelLowerLeft, vowelMiddleBottom, vowelMiddleTop],
  6: [vowelUpperLeft, vowelUpperRight],
  7: [
    vowelLowerRight,
    vowelLowerLeft,
    vowelMiddleBottom,
    vowelMiddleTop,
    vowelUpperLeft,
  ],
  8: [
    vowelLowerLeft,
    vowelMiddleBottom,
    vowelMiddleTop,
    vowelUpperLeft,
    vowelUpperRight,
  ],
  9: [
    vowelLowerRight,
    vowelLowerLeft,
    vowelMiddleBottom,
    vowelMiddleTop,
    vowelUpperRight,
  ],
  10: [
    vowelLowerRight,
    vowelMiddleBottom,
    vowelMiddleTop,
    vowelUpperLeft,
    vowelUpperRight,
  ],
  11: [vowelLowerRight, vowelLowerLeft, vowelUpperLeft, vowelUpperRight],
  12: [vowelLowerRight, vowelMiddleBottom, vowelMiddleTop, vowelUpperLeft],
  13: [vowelUpperLeft],
  14: [vowelUpperRight],
  15: [vowelLowerLeft],
  16: [vowelLowerRight],
  17: [
    vowelLowerRight,
    vowelLowerLeft,
    vowelMiddleBottom,
    vowelMiddleTop,
    vowelUpperLeft,
    vowelUpperRight,
  ],
  18: [vowelLowerRight, vowelMiddleBottom, vowelMiddleTop],
};

consonantButtonContainer
  .querySelectorAll(".glyph-container")
  .forEach((element, index) => {
    element.dataset.index = index + 1;
    consonants[index + 1]?.forEach((shape) => {
      addLine(shape, element);
      addLine(glyphConnector, element);
    });
  });

vowelButtonContainer
  .querySelectorAll(".glyph-container")
  .forEach((element, index) => {
    element.dataset.index = index + 1;
    vowels[index + 1]?.forEach((shape) => {
      addLine(shape, element);
      addLine(glyphConnector, element);
    });
  });

addAccent(swapperAccent, swapperAccentButton.firstChild);

const spaces = glyphGrid.querySelectorAll(".glyph-container");
const clickSelect = (e) => {
  spaces.forEach((space) => {
    space.classList.remove("selected");
  });
  console.log(e.target);
  e.target.classList.add("selected");
};

const arrowSelect = (e) => {
  const selectedSpace = glyphGrid.querySelector(".selected");
  let selectedIndex = parseInt(selectedSpace.dataset.positionIndex);
  switch (e.key) {
    case "ArrowUp":
    case "w":
      selectedIndex -= 20;
      break;
    case "ArrowDown":
    case "s":
      selectedIndex += 20;
      break;
    case "ArrowLeft":
    case "a":
      selectedIndex -= 1;
      break;
    case "ArrowRight":
    case "d":
      selectedIndex += 1;
      break;
  }
  if (selectedIndex >= 0 && selectedIndex <= 199) {
    spaces.forEach((space) => {
      space.classList.remove("selected");
    });
    glyphGrid
      .querySelector(`[data-position-index='${selectedIndex}']`)
      ?.classList.add("selected");
  }
};

spaces.forEach((space) => {
  space.addEventListener("click", clickSelect);
});

window.addEventListener("keydown", arrowSelect);
// consonantButtonContainer
//   .querySelectorAll(".glyph-container")
//   .forEach((element, index) => {
//     consonants[index + 1]?.forEach((shape) => {
//       addLine(shape, element);
//       addLine(glyphConnector, element);
//     });
//   });

const redrawGlyph = (glyphContainer) => {
  const pathGroup = glyphContainer.querySelector("g");
  pathGroup.innerHTML = "";
  consonants[glyphContainer.dataset.consonantIndex]?.forEach((shape) => {
    addLine(shape, glyphContainer);
    addLine(glyphConnector, glyphContainer);
  });
  vowels[glyphContainer.dataset.vowelIndex]?.forEach((shape) => {
    addLine(shape, glyphContainer);
    addLine(glyphConnector, glyphContainer);
  });
  if (glyphContainer.hasAttribute("accented")) {
    addAccent(swapperAccent, glyphContainer);
  }
};

const glyphButtons = document.querySelectorAll(".glyph-button");
glyphButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeSpace = document.querySelector(".selected");
    if (button.dataset.phonemeType === "consonant") {
      activeSpace.dataset.consonantIndex = button.firstChild.dataset.index;
    } else if (button.dataset.phonemeType === "vowel") {
      activeSpace.dataset.vowelIndex = button.firstChild.dataset.index;
    } else if (button.dataset.phonemeType === "accent") {
      if (!activeSpace.hasAttribute("accented")) {
        activeSpace.setAttribute("accented", "");
      } else {
        activeSpace.removeAttribute("accented");
      }
    }

    redrawGlyph(activeSpace);
  });
});
