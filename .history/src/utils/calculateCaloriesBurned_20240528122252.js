

export const calculateCaloriesBurned = (
  exercise,
  weight = 70,
  duration,
  intensityPercentage = 100
) => {
  const intensity = Math.max(10, Math.min(150, intensityPercentage)) / 100;
  const met = metValues[exercise] || 6;
  const durationInHours = duration / 60;
  const caloriesBurned = met * weight * durationInHours * intensity;
  return Math.round(caloriesBurned);
};
