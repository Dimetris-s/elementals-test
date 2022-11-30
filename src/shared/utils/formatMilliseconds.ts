function addLeadingZeros(num: number, totalLength = 2): string {
  return String(num).padStart(totalLength, '0');
}

export const formatMilliseconds = (milliseconds: number): string => {
  const minutes = Math.floor(milliseconds / (1000 * 60));
  milliseconds = milliseconds % (1000 * 60);
  const seconds = Math.floor(milliseconds / 1000);
  milliseconds = milliseconds % 1000;

  return `${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}.${addLeadingZeros(milliseconds, 3)}`;
};
