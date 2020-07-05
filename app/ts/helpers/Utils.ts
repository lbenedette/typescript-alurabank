import { Printable } from "../models/Printable";

export const print = (...objects: Printable[]) => {
  objects.forEach(object => object.log());
}