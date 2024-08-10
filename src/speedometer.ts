interface SpeedometerElements {
  tick: HTMLDivElement | null
  max: HTMLDivElement | null
  value: HTMLDivElement | null
}

const local: SpeedometerElements = {
  tick: document.querySelector(".local.speedometer__tick"),
  max: document.querySelector(".local.speedometer-max"),
  value: document.querySelector(".local.speedometer-value"),
};

const global: SpeedometerElements = {
  tick: document.querySelector(".global.speedometer__tick"),
  max: document.querySelector(".global.speedometer-max"),
  value: document.querySelector(".global.speedometer-value"),
};

// Map a value from one range to another
function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export const MAX_SPEED = 40;
export const GLOBAL_MAX_SPEED = 50 * 10;
local.max!.innerText = MAX_SPEED.toString();
global.max!.innerText = GLOBAL_MAX_SPEED.toString();

// Set the speedometer value in the range [0, MAX_SPEED]
export function setLocalSpeedometerValue(value: number) {
  const degree = mapRange(value, 0, MAX_SPEED, 0, 180);
  local.tick!.style.transform = `rotate(${degree}deg)`;
  local.value!.innerText = value.toString();
}


export function setGlobalSpeedometerValue(value: number) {
  const degree = mapRange(value, 0, GLOBAL_MAX_SPEED, 0, 180);
  global.tick!.style.transform = `rotate(${degree}deg)`;
  global.value!.innerText = value.toString();
}
