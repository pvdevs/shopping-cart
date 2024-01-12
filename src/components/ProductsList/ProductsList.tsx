import Product from './Product';

export default interface ProductsList {
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
  totalItems?: number;
  currentProductId?: number;
}
