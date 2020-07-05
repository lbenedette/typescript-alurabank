import { Comparable } from "./Comparable";
import { Printable } from "./Printable";

export interface Common<T> extends Printable, Comparable<T> {

}