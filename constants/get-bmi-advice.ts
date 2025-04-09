interface BmiInput {
  bmi: number;
  age: number;
  gender: "Male" | "Female";
}

export const getBmiAdvice = ({ bmi, age, gender }: BmiInput) => {
  // Helper to adjust advice based on gender
  const genderNote = (baseAdvice: string) =>
    gender === "Male"
      ? `${baseAdvice} Men may benefit from focusing on muscle-building exercises.`
      : gender === "Female"
      ? `${baseAdvice} Women may focus on balanced nutrition, as hormonal changes can affect weight.`
      : `${baseAdvice} Consider your unique body composition in your plan.`;

  if (bmi < 18.5) {
    const baseAdvice = {
      category: "Underweight",
      message: `Your BMI is below the healthy range (< 18.5).`,
      advice: [
        "Focus on nutrient-rich foods like whole grains, lean proteins (chicken, fish, beans), healthy fats (avocado, nuts), and fruits/vegetables to gain weight healthily.",
        "Eat smaller, frequent meals to increase calorie intake comfortably.",
        "Consider strength training exercises to build muscle mass.",
        "Consult a dietitian or doctor for a personalized plan to reach a healthy weight.",
      ],
    };

    if (age < 18) {
      return {
        ...baseAdvice,
        message: `${baseAdvice.message} For your age (${age}), BMI should be compared to growth charts.`,
        advice: [
          "Work with a pediatrician to ensure healthy growth using age- and gender-specific percentiles.",
          "Include calorie-dense snacks like peanut butter or cheese, balanced with play or sports.",
          genderNote("Parents can help by offering nutrient-packed meals."),
        ],
      };
    } else if (age >= 65) {
      return {
        ...baseAdvice,
        message: `${baseAdvice.message} For older adults, this may signal unintended weight loss.`,
        advice: [
          "Add protein shakes or fortified foods to maintain strength and energy.",
          "Try light resistance exercises (e.g., with bands) to preserve muscle.",
          "See a doctor to check for underlying health issues or nutritional needs.",
        ],
      };
    }
    return {
      ...baseAdvice,
      advice: [
        ...baseAdvice.advice.slice(0, -1),
        genderNote(baseAdvice.advice[2]),
      ],
    };
  }

  if (bmi < 25) {
    const baseAdvice = {
      category: "Normal",
      message: `Your BMI is in the healthy range (18.5–24.9). Great job!`,
      advice: [
        "Maintain balance with a varied diet including vegetables, fruits, lean proteins, and whole grains.",
        "Stay active with at least 150 minutes of moderate exercise per week (e.g., walking, cycling, or yoga).",
        "Monitor your health regularly to stay in this range.",
        "Keep stress in check with mindfulness or hobbies to support overall wellness.",
      ],
    };

    if (age < 18) {
      return {
        ...baseAdvice,
        message: `${baseAdvice.message} For your age (${age}), this aligns with healthy growth.`,
        advice: [
          "Keep up a mix of active play (e.g., sports) and balanced meals for development.",
          genderNote("Stay active to support growing muscles and bones."),
        ],
      };
    } else if (age >= 65) {
      return {
        ...baseAdvice,
        message: `${baseAdvice.message} For older adults, this is a solid range, though up to 27 can be okay.`,
        advice: [
          "Focus on protein and calcium (e.g., dairy, fish) to maintain muscle and bone health.",
          "Include gentle activities like walking or tai chi to stay mobile.",
          "Check with a doctor to ensure this fits your health needs.",
        ],
      };
    }
    return baseAdvice;
  }

  if (bmi < 30) {
    const baseAdvice = {
      category: "Overweight",
      message: `Your BMI is above the healthy range (25–29.9).`,
      advice: [
        "Incorporate more whole foods like vegetables, fruits, and lean proteins while reducing processed foods, sugary drinks, and high-fat snacks.",
        "Aim for 150–300 minutes of moderate aerobic activity weekly (e.g., brisk walking, swimming) plus strength training twice a week.",
        "Track portion sizes to avoid overeating—using smaller plates can help.",
        "Consider speaking with a nutritionist or trainer for a sustainable weight-loss plan.",
      ],
    };

    if (age < 18) {
      return {
        ...baseAdvice,
        message: `${baseAdvice.message} For your age (${age}), check percentiles with a doctor.`,
        advice: [
          "Swap sugary snacks for fruits or nuts and stay active with sports or play.",
          genderNote("Build healthy habits now for long-term wellness."),
          "Talk to a pediatrician about safe weight management.",
        ],
      };
    } else if (age >= 65) {
      return {
        ...baseAdvice,
        message: `${baseAdvice.message} For older adults, a BMI up to 30 might be fine—check with a doctor.`,
        advice: [
          "Focus on low-impact movement like walking or water aerobics to protect joints.",
          "Cut back gradually on calories while ensuring enough protein for strength.",
          "Consult a healthcare provider to balance weight and overall health.",
        ],
      };
    }
    return {
      ...baseAdvice,
      advice: [
        ...baseAdvice.advice.slice(0, -1),
        genderNote(baseAdvice.advice[1]),
      ],
    };
  }

  if (bmi < 35) {
    const baseAdvice = {
      category: "Obese",
      message: `Your BMI indicates obesity (30–34.9), which may pose health risks.`,
      advice: [
        "Start with small changes: swap sugary drinks for water, add more vegetables to meals, and reduce processed carbs (e.g., white bread, pastries).",
        "Engage in low-impact activities like walking, swimming, or cycling for 20–30 minutes most days, gradually increasing intensity.",
        "Set realistic goals, like losing 5–10% of your body weight over time, which can improve health significantly.",
        "Work with a healthcare provider or dietitian to create a safe, tailored plan.",
      ],
    };

    if (age < 18) {
      return {
        ...baseAdvice,
        message: `${baseAdvice.message} For your age (${age}), this needs professional attention.`,
        advice: [
          "Focus on fun activities (e.g., biking, dancing) and healthier snacks like fruit.",
          genderNote("Work with family and a doctor for a gradual plan."),
        ],
      };
    } else if (age >= 65) {
      return {
        ...baseAdvice,
        message: `${baseAdvice.message} For older adults, focus on health over rapid weight loss.`,
        advice: [
          "Try chair exercises or short walks to boost mobility safely.",
          "Reduce calories slowly while keeping protein high to maintain strength.",
          "See a doctor to tailor this to your health conditions.",
        ],
      };
    }
    return {
      ...baseAdvice,
      advice: [
        ...baseAdvice.advice.slice(0, -1),
        genderNote(baseAdvice.advice[1]),
      ],
    };
  }

  const baseAdvice = {
    category: "Extremely Obese",
    message: `Your BMI is in the extremely obese range (≥ 35), which carries higher health risks.`,
    advice: [
      "Prioritize gradual changes: focus on whole, unprocessed foods and cut back on high-calorie snacks and beverages.",
      "Begin with gentle activities like walking or chair exercises, aiming for 10–15 minutes daily, and slowly increase as you’re able.",
      "Seek support from a doctor, dietitian, or weight-loss specialist to address health concerns and design a safe plan.",
      "Consider joining a support group or working with a counselor to stay motivated and address emotional factors.",
    ],
  };

  if (age < 18) {
    return {
      ...baseAdvice,
      message: `${baseAdvice.message} For your age (${age}), urgent care is key.`,
      advice: [
        "Start with small steps like water over soda and active playtime.",
        genderNote("Involve family and a pediatrician for a safe approach."),
      ],
    };
  } else if (age >= 65) {
    return {
      ...baseAdvice,
      message: `${baseAdvice.message} For older adults, prioritize safety and health.`,
      advice: [
        "Focus on gentle movement (e.g., seated stretches) and nutrient-dense meals.",
        "Work closely with a doctor to manage risks without rapid changes.",
        "Consider support from a specialist for mobility and nutrition.",
      ],
    };
  }
  return {
    ...baseAdvice,
    advice: [
      ...baseAdvice.advice.slice(0, -2),
      genderNote(baseAdvice.advice[1]),
    ],
  };
};
