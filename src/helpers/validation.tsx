// DEPENDENCIES
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const normalizeVersionNumber = (value: string): string => {
  // uncommented function allows only digits to be entered, but needs users to place "." themselves
  // return value.match('^[0-9][0-9.]*$');

  // this function allows only digits to be entered, sets "." automatically after first two groups of 2 digits, limits content to 7 typed characters
  value = value.replace(/[^\d]/g, '');
  if (value.length <= 3) {
    return value;
  }
  return `${value.slice(0, 2)}.${value.slice(2, 4)}.${value.slice(4, 7)}`;
};

export const normalizePhoneNumber = (value: string): string => {
  const phoneNum = parsePhoneNumberFromString(value);
  if (!phoneNum) {
    return value;
  }
  return phoneNum.formatInternational();
};
