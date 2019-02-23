export enum Colour {
  Red,
  Green,
  Blue,
}

export enum Size {
  S,
  M,
  L,
  XL,
  XXL,
}

export class Order {

  constructor(
    public name: string,
    public age: number,
    public colour: Colour,
    public size: Size,
  ) {  }

}
