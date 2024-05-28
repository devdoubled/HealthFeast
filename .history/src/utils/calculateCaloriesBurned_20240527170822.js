export 
const calculateCaloriesBurned = (exercise, weight, duration, intensityPercentage = 100) => {
  // Kiểm tra và điều chỉnh giá trị cường độ nếu cần
  const intensity = Math.max(10, Math.min(150, intensityPercentage)) / 100;

  const met = metValues[exercise] || 6; // Sử dụng giá trị MET mặc định nếu không tìm thấy bài tập
  const durationInHours = duration / 60; // Chuyển đổi thời gian từ phút sang giờ
  return met * weight * durationInHours * intensity;
}; 