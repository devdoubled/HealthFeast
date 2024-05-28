const imageConfig = {
  "Chạy bộ":
    "https://www.thuocdantoc.org/wp-content/uploads/2021/07/tac-dung-cua-chay-bo-2.jpg",
  "Bơi lội":
    "https://suckhoedoisong.qltns.mediacdn.vn/Images/quangcao/2019/10/28/cho71.jpg",
  "Đá bóng":
    "https://upper90football.com/wp-content/uploads/2022/06/training.jpg",
  "Bóng rổ":
    "https://www.anytimefitness.com/wp-content/uploads/2023/05/HERO_Workout-Plan-for-Basketball-Players.jpg",
  "Đạp xe":
    "https://cdn.tgdd.vn//News/1498381//15-loi-ich-cua-viec-dap-xe-buoi-sang-ban-nen-biet.1-730x432.jpg",
  Cardio:
    "https://i.pinimg.com/1200x/b9/00/c6/b900c6e7732dc6c79497e8249aa415af.jpg",
  default:
    "https://hips.hearstapps.com/hmg-prod/images/athlete-in-a-gym-royalty-free-image-1651055064.jpg",
};

export const getImage = (exercise) => {
  return imageConfig[exercise] || imageConfig.default;
};
