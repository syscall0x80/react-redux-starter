export const INCREMENT = 'INCREMENT';
export const DOUBLE = 'DOUBLE';
export const ADD = 'ADD';

export const increment = () => {
  return {
    type: INCREMENT,
  }
};

export const double = () => {
  return {
    type: DOUBLE,
  }
};

export const add = (num) => {
  return {
    type: ADD,
    num,
  }
};
