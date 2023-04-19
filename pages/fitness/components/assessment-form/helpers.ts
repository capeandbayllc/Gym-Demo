/** this file exists due to a bug in the way vue parses ts SFC's causing default props
 * defined locally to be lexically unavailable to the parser
 */

export interface IAssessmentFormData {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  date_of_birth?: string | number | Date;
  gender?: any;
  email?: string;
  personal_email?: string;
  mobile?: string | number;
}

export const IAssessmentFormDefaults = {
  first_name: "fred",
  middle_name: "",
  last_name: "",
  date_of_birth: "",
  gender: "",
  email: "",
  personal_email: "",
  mobile: "",
};
