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