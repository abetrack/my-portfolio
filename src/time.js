export function monthsBetween(from, to) {
  return (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
}

export function formatDuration(from, to) {
  const months = Math.max(1, monthsBetween(from, to));
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m}m`;
  return m === 0 ? `${y}y` : `${y}y ${m}m`;
}

export function spokenDuration(from, to) {
  const months = Math.max(1, monthsBetween(from, to));
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} ${y === 1 ? "year" : "years"}`);
  if (m) parts.push(`${m} ${m === 1 ? "month" : "months"}`);
  return parts.join(" ");
}
