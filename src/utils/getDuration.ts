export const getDuration = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const duration = `${hours} ч. ${minutes} мин.`;

  return duration;
};
