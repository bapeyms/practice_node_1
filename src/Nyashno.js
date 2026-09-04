export default class Nyashno {
  constructor(value) {
    this.value = value;
  }

  isNyashno() {
    return Boolean(this.value);
  }

  getNyashno() {
    return `nyashno: ${this.value}`;
  }

  makeNyashno(value) {
    this.value = value;
    return this;
  }

  removeNyashno() {
    this.value = null;
    return this;
  }

  inspect() {
    return {
      value: this.value,
      nyashno: this.isNyashno()
    };
  }
}