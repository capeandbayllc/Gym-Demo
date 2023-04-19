export interface IAssessmentFormData {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  date_of_birth?: string | number | Date;
  gender?: any;
  email?: string;
  personal_email?: string;
  mobile?: string | number;
  address?: string;
  city?: string;
  state?: string;
  zip?: string | number;
  heart_condition?: boolean | null;
  chest_pain_pa?: boolean | null;
  chest_pain_recently?: boolean | null;
  consciousness_loss?: boolean | null;
  bone_joint_problems?: boolean | null;
  medication_recommeneded?: boolean | null;
  requires_supervision?: boolean | null;
}

export const assessmentFormDefaults = {
  first_name: "fred",
  middle_name: "",
  last_name: "",
  date_of_birth: "",
  gender: "",
  email: "",
  personal_email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  heart_condition: null,
  chest_pain_pa: null,
  chest_pain_recently: null,
  consciousness_loss: null,
  bone_joint_problems: null,
  medication_recommeneded: null,
  requires_supervision: null,
};

export interface KeyQuestionPair {
  question: string;
  key: keyof IAssessmentFormData;
}

export const physicalActivityQuestions: KeyQuestionPair[] = [
  {
    question:
      "has a doctor ever said that you have a heart condition and recommend only medically supervised activity?",
    key: "heart_condition",
  },
  {
    question: "do you have chest pain brought on by physical activity?",
    key: "chest_pain_pa",
  },
  {
    question: "Have you developed chest pain in the past month?",
    key: "chest_pain_recently",
  },
  {
    question:
      "have you on one or more occassions lost consciousness or fallen?",
    key: "consciousness_loss",
  },
  {
    question: "Do you have a bone or joint problem?",
    key: "bone_joint_problems",
  },
  {
    question:
      "Has a doctor ever recommended medication for your blood pressure or a heart condition?",
    key: "medication_recommeneded",
  },
  {
    question:
      "Are you aware, through experience, or a doctor's advice, of any physical reason that would limit you from exercising without supervision?",
    key: "requires_supervision",
  },
];
