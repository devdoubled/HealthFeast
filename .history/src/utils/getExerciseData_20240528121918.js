import {
    basketballData,
    cardioData,
    cyclingData,
    gymData,
    runningData,
    soccerData,
    swimmingData,
  } from "../da";
export const getExerciseData = (typeEx) => {
    switch (typeEx) {
      case "Chạy bộ":
        return runningData;
      case "Bơi lội":
        return swimmingData;
      case "Đá bóng":
        return soccerData;
      case "Bóng rổ":
        return basketballData;
      case "Đạp xe":
        return cyclingData;
      case "Carido":
        return cardioData;
      default:
        return gymData;
    }
  };