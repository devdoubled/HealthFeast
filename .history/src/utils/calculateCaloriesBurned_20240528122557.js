export const calculateCaloriesBurned = (
  weight = 70,
  duration,
  intensityPercentage = 100,
  typeExerciseValue
) => {
  const intensity = Math.max(10, Math.min(150, intensityPercentage)) / 100;
  const caloriesBurned = (typeExerciseValue)
  return Math.round(caloriesBurned);
};
