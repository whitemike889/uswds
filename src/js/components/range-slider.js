const behavior = require("../utils/behavior");
const { prefix: PREFIX } = require("../config");

const RANGE_INPUT_CLASS = `${PREFIX}-range`;
const RANGE_OUTPUT_CLASS = `${PREFIX}-output`;
const INPUT = `.${RANGE_INPUT_CLASS}`;

function handleOutput(event) {
  const input = event.target;
  const output = input.nextElementSibling;

  if (!output.classList.contains(RANGE_OUTPUT_CLASS)) {
    return;
  }

  output.value = input.value;
}

const rangeSlider = behavior(
  {
    "input change": {
      [INPUT]: handleOutput,
    },
  }
);

module.exports = rangeSlider;
