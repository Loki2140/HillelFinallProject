import { IProduct } from "./IProduct";

export interface IProductCollection {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}
