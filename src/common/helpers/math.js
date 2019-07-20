/**
 * Maps a specific number from an original
 * number interval to another interval, maintinaing
 * proportions
*/
export const scale = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
