export const calculateCaloriesBurned = (
  weight,
  duration,
  intensityPercentage = 100,
  typeExerciseValue
) => {
  const intensity = Math.max(10, Math.min(150, intensityPercentage)) / 100;
  const caloriesBurned = (typeExerciseValue / 60 * duration * intensity) * (1 + (0.0076 * 2.205 * (weight - 59)))
  return Math.round(caloriesBurned);
};
