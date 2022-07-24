import { specials } from "./modules/lineDefs.js";
import { consonants, vowels } from "./modules/glyphArrays.js";

const lineExists = (position, glyph) => {
  const testArray = Array.from(glyph.children);
  return testArray.some((e) => e.attributes.d.nodeValue === position.d);
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
glyphGrid.style.display = "grid";
glyphGrid.style.gridTemplateColumns = "repeat(12, 3em)";
glyphGrid.style.gridTemplateRows = "repeat(4, 7em)";

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
const initGlyph = (glyphSpace) => {
  let allContainer = document.createElement("div");
  let glyphContainer = document.createElement("div");
  let translateContainer = document.createElement("div");
  allContainer.classList.add("all-container");
  glyphContainer.classList.add("glyph-container");
  translateContainer.classList.add("translate-container");
  let glyph = document.createElementNS(svgns, "svg");
  glyph.classList.add("glyph");
  let pathGroup = document.createElementNS(svgns, "g");
  pathGroup.setAttribute("fill", "none");
  pathGroup.setAttribute("stroke", "#000");
  pathGroup.setAttribute("stroke-width", "15px");
  glyph.setAttribute("viewBox", "0 0 285.3905 463.5763");
  glyph.appendChild(pathGroup);
  glyphContainer.appendChild(glyph);
  glyphSpace.appendChild(allContainer);
  allContainer.appendChild(glyphContainer);
  allContainer.appendChild(translateContainer);
  return pathGroup;
};

// Draw empty squares for glyph placement
for (let i = 0; i < 48; i++) {
  initGlyph(glyphGrid);
  let glyphContainer = glyphGrid.children[i].querySelector(".glyph-container");
  glyphContainer.classList.add("glyph-space");
  glyphContainer.dataset.consonantIndex = 0;
  glyphContainer.dataset.vowelIndex = 0;
  glyphContainer.dataset.positionIndex = i;
}
glyphGrid.children[0].firstChild.classList.add("selected");
// Draw empty squares for consonant choices
for (let i = 0; i < 24; i++) {
  const consonantButton = document.createElement("button");
  consonantButton.classList.add("glyph-button");
  consonantButton.dataset.phonemeType = "consonant";
  consonantButtonContainer.appendChild(consonantButton);
  initGlyph(consonantButtonContainer.children[i]);
}
const consonantBlankButton = document.querySelector(".consonant-blank-button");
consonantBlankButton.dataset.phonemeType = "consonant";
initGlyph(consonantBlankButton);
consonantBlankButton.querySelector(".glyph-container").dataset.index = 0;

for (let i = 0; i < 18; i++) {
  const vowelButton = document.createElement("button");
  vowelButton.classList.add("glyph-button");
  vowelButton.dataset.phonemeType = "vowel";
  vowelButtonContainer.appendChild(vowelButton);
  initGlyph(vowelButtonContainer.children[i]);
}

const vowelBlankButton = document.querySelector(".vowel-blank-button");
vowelBlankButton.dataset.phonemeType = "vowel";
initGlyph(vowelBlankButton);
vowelBlankButton.querySelector(".glyph-container").dataset.index = 0;

const swapperAccentButton = document.querySelector(".swapper-accent-button");
swapperAccentButton.dataset.phonemeType = "accent";
initGlyph(swapperAccentButton);
consonantButtonContainer
  .querySelectorAll(".glyph-container")
  .forEach((element, index) => {
    element.dataset.index = index + 1;
    element.nextSibling.innerText = consonants[index + 1].translation;
    consonants[index + 1].pathArray.forEach((shape) => {
      addLine(shape, element);
      addLine(specials.glyphConnector, element);
    });
  });

vowelButtonContainer
  .querySelectorAll(".glyph-container")
  .forEach((element, index) => {
    element.dataset.index = index + 1;
    element.nextSibling.innerText = vowels[index + 1].translation;
    vowels[index + 1].pathArray.forEach((shape) => {
      addLine(shape, element);
      addLine(specials.glyphConnector, element);
    });
  });

addAccent(specials.swapper, swapperAccentButton.firstChild);

const spaces = glyphGrid.querySelectorAll(".glyph-container");
const clickSelect = (e) => {
  spaces.forEach((space) => {
    space.classList.remove("selected");
  });
  e.target.classList.add("selected");
};

const arrowSelect = (e) => {
  const selectedSpace = glyphGrid.querySelector(".selected");
  let selectedIndex = parseInt(selectedSpace.dataset.positionIndex);
  switch (e.key) {
    case "ArrowUp":
    case "w":
      selectedIndex -= 12;
      break;
    case "ArrowDown":
    case "s":
      selectedIndex += 12;
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
  if (selectedIndex >= 0 && selectedIndex <= 47) {
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

const redrawGlyph = (glyphContainer) => {
  const pathGroup = glyphContainer.querySelector("g");
  console.log(glyphContainer);
  pathGroup.innerHTML = "";
  consonants[glyphContainer.dataset.consonantIndex]?.pathArray.forEach(
    (shape) => {
      addLine(shape, glyphContainer);
      addLine(specials.glyphConnector, glyphContainer);
    }
  );
  vowels[glyphContainer.dataset.vowelIndex]?.pathArray.forEach((shape) => {
    addLine(shape, glyphContainer);
    addLine(specials.glyphConnector, glyphContainer);
  });

  if (glyphContainer.hasAttribute("accented")) {
    addAccent(specials.swapper, glyphContainer);
  }
  drawTranslation(glyphContainer, glyphContainer.hasAttribute("accented"));
};

const drawTranslation = (glyphContainer, isSwapped) => {
  const consonantText =
    consonants[glyphContainer.dataset.consonantIndex].translation;
  const vowelText = vowels[glyphContainer.dataset.vowelIndex].translation;
  const translateContainer = glyphContainer.nextSibling;
  if (!isSwapped) {
    translateContainer.innerText = `${consonantText}${vowelText}`;
  }
  if (isSwapped) {
    translateContainer.innerText = `${vowelText}${consonantText}`;
  }
};

const glyphButtons = document.querySelectorAll(".glyph-button");
glyphButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeSpace = document.querySelector(".selected");
    const glyphContainer = button.querySelector(".glyph-container");
    console.log(activeSpace);
    if (button.dataset.phonemeType === "consonant") {
      activeSpace.dataset.consonantIndex = glyphContainer.dataset.index;
    } else if (button.dataset.phonemeType === "vowel") {
      activeSpace.dataset.vowelIndex = glyphContainer.dataset.index;
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
