import * as R from 'ramda';

// TODO (20210715): these styles were taken from IC and need to be verified for SB

// //// In-project style options

// Breakpoints
const Xs = '500px';
const Sm = '740px';
const Md = '900px';
const Lg = '1080px';
const Xl = '1200px';
const Xxl = '1540px';

// Colors
const white = '#FFFFFF';
const black = '#151E22';
const grey1 = '#F4F4F6';

// Fonts
const arial = 'arial';
const sansSerif = 'sans-serif';
const fontSize10 = '11px';
const fontSize20 = '12px';
const fontSize30 = '13px';
const fontSize40 = '14px';
const fontSize50 = '15px';
const fontSize60 = '16px';
const fontSize70 = '17px';
const fontSize80 = '20px';
const fontSize90 = '22px';
const fontSize100 = '28px';
const fontSize110 = '34px';

// ///// In-project style decisions

const colors = {
  black,
  white,
};

const textColor = {
  default: black,
};

const backgroundColor = {
  sidebar: grey1,
  main: white,
};

const fontSize = {
  body: fontSize30,
  h1: fontSize110,
  h2: fontSize100,
  h3: fontSize90,
  h4: fontSize80,
  h5: fontSize70,
  h6: fontSize100,
  nav: fontSize110,
  caption1: fontSize20,
  caption2: fontSize10,
  subheadline1: fontSize60,
  subheadline2: fontSize50,
  avatar: fontSize30,
};

// ///// Actual theme + supporting fns

export const colorNames = R.zipObj(R.keys(colors), R.keys(colors));

export const Theme = {
  backgroundColor,
  fontSize,
  textColor,
};
