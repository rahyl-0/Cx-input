export const customPatterns = {
  '0': { pattern: new RegExp('\\d') },
  U: { pattern: new RegExp('[A-Z]') },
  o: { pattern: new RegExp('[a-z]') },
  W: { pattern: new RegExp('[A-Z-a-z]') },
  w: { pattern: new RegExp('[A-Za-z]') },
  L: { pattern: new RegExp('(U|L)') },
  '9': { pattern: new RegExp('[0-9]') },
  a: { pattern: new RegExp('\\w') },
  T: { pattern: new RegExp('-?') },
  A: { pattern: new RegExp('[\\w-\\s]') },
  c: { pattern: new RegExp('[\\w\\s]') },
  N: { pattern: new RegExp('[\\w-\\s0-9]') },
  // K: { pattern: new RegExp('[a-zA-Z\\s]') },
  B: { pattern: new RegExp('[\\w-\\.]') },
  b: { pattern: new RegExp('[\\w-]') },
  E: { pattern: new RegExp('[a-zA-z\\s]') },
  '@': { pattern: new RegExp('[@]') },
  '.': { pattern: new RegExp('[.]') },
  Q: { pattern: new RegExp('[A-Z0-9]') },
};
//   export const inputType={
//     firstName:'',
//     lastName:'',
//     email:'B*@b*.aaa',
//     cin:'L99999WW9999WWW999999',
//     panCard:'UUUUU0000U',
//     fullName:'',
//     phoneNumber:'0000000000',
//     ifscCode:'SSSS0AAAAAA',
//     amount:'',
//     percentage:'',

//   }
export const inputDetails = {
  phoneNumber: {
    minLength: 10,
    maxLength: 10,
    mask: '0*',
  },
  email: {
    mask: 'A*@A*.SSS',
    dropSpecialCharacters: 'false',
  },
  percentage: {
    mask: 'percent.2',
    allowNegativeNumbers: 'true',
  },
  amount: {
    mask: 'separator.2',
    allowNegativeNumbers: 'false',
    dropSpecialCharacters: 'false',
    // specialCharacters: "[',']",
    thousandSeparator: ',',
    separatorLimit: '10000',
  },
  amountNo: {
    mask: 'separator.2',
    decimalMarker: '.',
    thousandSeparator: ',',
  },
  ifsc: {
    mask: 'SSSS0AAAAAA',
  },
};
// export const inputType = {
//   firstName: {
//     mask: 'S*',
//   },
//   lastName: {
//     mask: 'S*',
//   },
//   email: {
//     mask: 'B*@b*.aaaaaaaa',
//     patterns: customPatterns,
//   },
//   cin: {
//     mask: 'L99999WW9999WWW999999',
//     patterns: customPatterns,
//   },
//   panCard: {
//     mask: 'UUUUU0000U',
//     patterns: customPatterns,
//   },
//   fullName: {
//     mask: 'E*',
//     patterns: customPatterns,
//     dropSpecialCharacters: 'false',
//   },
//   phoneNumber: {
//     mask: '0000000000',
//   },
//   ifscCode: {
//     mask: 'SSSS0AAAAAA',
//   },
//   amount: {
//     mask: 'separator.2',
//     thousandSeparator: '',
//     separatorLimit: '1000000000000000',
//     allowNegativeNumbers: 'true',
//   },
//   percentage: {
//     mask: 'percent',
//     suffix: '%',
//   },
// };
