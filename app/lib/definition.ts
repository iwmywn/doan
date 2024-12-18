import { ObjectId } from "mongodb";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  address: {
    recipient: string;
    phone: string;
    address: string;
  }[];
  verificationToken: string;
  resendVerification: number;
};

export type Invoice = {
  id: string;
  userId: string;
  recipient: string;
  phone: string;
  address: string;
  date: Date;
  status: string;
  products: {
    productId: string;
    quantity: number;
    size: string;
  }[];
};

export type Cart = {
  id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
    size: string;
  }[];
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  priceCents: number;
  images: string[];
  description: string;
  categoryId: string;
  saleOff: number;
  slug: string;
  sizes: {
    S: number;
    M: number;
    L: number;
    XL: number;
  };
};

export type Products = {
  productId: ObjectId;
  quantity: number;
  size: string;
};

interface InvoiceWithProducts {
  invoiceId: string;
  status: "WAITING" | "PROCESSING" | "COMPLETED" | "CANCELLED";
  products: (Product & { quantity: number; size: string })[];
}

export type CartProductsProps =
  | (Product & { quantity: number; size: string })[]
  | null;
export type InvoiceProductsProps = InvoiceWithProducts[] | null;
