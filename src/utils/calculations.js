export function calculateVelocity(pipeID, flowRate, totalFootage) {
  const radius = pipeID / 2 / 12; // Convert inches to feet and some get radius
  const area = Math.PI * Math.pow(radius, 2);
  const velocity = flowRate / area / 7.48; // Convert GPM to cubic feet per second
  return velocity;
}
