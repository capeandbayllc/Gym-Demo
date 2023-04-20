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
  heart_condition?: string;
  chest_pain_pa?: string;
  chest_pain_recently?: string;
  consciousness_loss?: string;
  bone_joint_problems?: string;
  medication_recommeneded?: string;
  requires_supervision?: string;
  signature?: string;
  date?: string | Date;
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
  heart_condition: "",
  chest_pain_pa: "",
  chest_pain_recently: "",
  consciousness_loss: "",
  bone_joint_problems: "",
  medication_recommeneded: "",
  requires_supervision: "",
  signature: "",
  date: "",
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

export const wellnessPolicies = [
  "Membership required to the wellness center.",
  "One session is good for 30 days after the original date of purchase",
  "Session packages are available to students/members/non-members.",
  "Five session packages are good for 60 days after the original date of purchase",
  "The wellness center reserves the right to refuse service if deemed fit.",
  "Ten session packages are good for 90 days after the original date of purchase",
  "Session payments are non-refundable. Sessions are 60 minutes in length starting at your scheduled time. if you are more than 15 minutes late, it will be considered a no-show and you will be charged. You must call your personal trainer with cancellation at least 12 hours in aadvance before the session in order to reschedule.",
  "Thirty session packages are good for 180 days after the original date of purchase.",
];
