export enum ERROR_MESSAGES {
  INVALID_REQUIRED_FIELD = 'Invalid Required Field',
  INVALID_REQUIRED_PARAM = 'Invalid Required Param',
  INVALID_REQUIRED_QUERY = 'Invalid Required Query',
  INVALID_PASSWORD = 'Invalid password',
  INVALID_EMAIL = 'Invalid email',
  INVALID_EMAIL_OR_PASSWORD = 'Invalid email and/or invalid password',
}

export const RegularExpressions = {
  dcxEmail: /^[A-Za-z0-9._%+-]+@dcx\.ufpb\.br$/,
};
