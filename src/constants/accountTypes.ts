import { AccountTypeProps } from "../components/AccountType";

import img_doctor from "../assets/img_doctor_90@3x.svg";
import img_patient from "../assets/img_patient_90@3x.svg";

const types: Omit<AccountTypeProps, "selected">[] = [
  {
    imgSrc: img_doctor,
    typeName: "Doctor"
  },
  {
    imgSrc: img_patient,
    typeName: "Patient"
  }
];

export default types;
