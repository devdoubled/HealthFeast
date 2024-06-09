export const getBMIDescription = (bmi) => {
    if (bmi < 18.5) {
        return "Gầy";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Bình thường";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
};

export const getBMRDescription = (bmr) => {
    if (bmr < 1500) {
        return "Tỷ lệ trao đổi chất thấp";
    } else if (bmr >= 1500 && bmr < 2000) {
        return "Tỷ lệ trao đổi chất trung bình";
    } else {
        return "Tỷ lệ trao đổi chất cao";
    }
};

export const getTDEEDescription = (tdee) => {
    if (tdee < 2000) {
        return "Chi tiêu năng lượng thấp";
    } else if (tdee >= 2000 && tdee < 2500) {
        return "Chi tiêu năng lượng trung bình";
    } else {
        return "Chi tiêu năng lượng cao";
    }
};