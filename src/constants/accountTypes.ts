import { AccountTypeProps } from "../components/AccountType";

import { ReactComponent as SvgDoctor } from "../assets/img_doctor_90@3x.svg";
import { ReactComponent as SvgPatient } from "../assets/img_patient_90@3x.svg";

const types: Omit<AccountTypeProps, "selected" | "onSelect">[] = [
  {
    icon: SvgDoctor,
    typeName: "Doctor"
  },
  {
    icon: SvgPatient,
    typeName: "Patient"
  }
];

export default types;
