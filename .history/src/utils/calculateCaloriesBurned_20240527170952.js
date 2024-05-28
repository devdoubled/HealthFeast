export const calculateCaloriesBurned = (
  exercise,
  weight,
  duration,
  intensityPercentage = 100
) => {
  const metValues = {
    "Chạy bộ": 10, // Chạy bộ với tốc độ 10 km/h
    "Bơi lội": 8, // Bơi lội trung bình
    "Đá bóng": 8, // Đá bóng trung bình
    "Bóng rổ": 7, // Bóng rổ trung bình
    "Đạp xe": 7.5, // Đạp xe với tốc độ 20 km/h
    Cardio: 6, // Cardio trung bình
    Gym: 6, // Tập gym trung bình
  };
  const intensity = Math.max(10, Math.min(150, intensityPercentage)) / 100;

  const met = metValues[exercise] || 6; // Sử dụng giá trị MET mặc định nếu không tìm thấy bài tập
  const durationInHours = duration / 60; // Chuyển đổi thời gian từ phút sang giờ
  return met * weight * durationInHours * intensity;
};
