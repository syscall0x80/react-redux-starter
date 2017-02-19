import moment from 'moment';

export default class Store {
  static get(key) {
    const origin = localStorage.getItem(key);
    if (origin) {
      const value = JSON.parse(origin);
      if (value.exp <= 0) {
        return value.data;
      }
      if (moment().isSameOrAfter(moment(value.exp))) {
        localStorage.removeItem(key);
        return null;
      }
      return value.data;
    }
    return null;
  }

  static set(key, data, expiration = 0) {
    const value = {
      exp: expiration,
      data
    };
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
}
