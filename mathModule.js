import { toShoutyCase } from "./stringModule.js";
import { findMax } from "./arrayModule.js";


export function embiggen(num_a, num_b) {
    return num_a + num_b;
}

export function decreasify(num_a, num_b) {
    return num_a - num_b;
}

export function addAndLogUpper(a, b) {
    const summed = embiggen(a, b);
    return toShoutyCase("" + summed);
}

export function getMaxAndMultAndLogUpper(arr, mult) {

    const max_val = findMax(arr);
    const multed = max_val * mult;
    const upper_val = toShoutyCase("" + multed);

    return upper_val;
}


export default function times(num_a, num_b) {
    return num_a * num_b;
}
