export const getImage = (exercise) => {
    if(exercise === "Chạy bộ") {
        return "https://www.thuocdantoc.org/wp-content/uploads/2021/07/tac-dung-cua-chay-bo-2.jpg"
    }else if (exercise === "Bơi lội") {
        return "https://suckhoedoisong.qltns.mediacdn.vn/Images/quangcao/2019/10/28/cho71.jpg"
    }else if (exercise === "Đá bóng") {
        return "https://upper90football.com/wp-content/uploads/2022/06/training.jpg"
    }else if (exercise === "Bóng rổ") {
        return "https://www.anytimefitness.com/wp-content/uploads/2023/05/HERO_Workout-Plan-for-Basketball-Players.jpg"
    }else if (exercise === "Đạp xe") {
        return "https://cdn.tgdd.vn//News/1498381//15-loi-ich-cua-viec-dap-xe-buoi-sang-ban-nen-biet.1-730x432.jpg"
    }else if (exercise === "Cardio") {
        return "https://i.pinimg.com/1200x/b9/00/c6/b900c6e7732dc6c79497e8249aa415af.jpg"
    }else {
        return "https://hips.hearstapps.com/hmg-prod/images/athlete-in-a-gym-royalty-free-image-1651055064.jpg"
    }
}