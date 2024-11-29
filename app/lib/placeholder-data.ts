import {
  Cart,
  CartDetails,
  Category,
  Customer,
  Invoice,
  InvoiceDetails,
  Product,
  ProductSize,
} from "./definition";

export const customers: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    password: "hashedpassword123",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "hashedpassword456",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    password: "charliepassword789",
  },
];

export const carts: Cart[] = [
  {
    id: 1,
    customer_id: 1,
  },
  {
    id: 2,
    customer_id: 2,
  },
  {
    id: 3,
    customer_id: 3,
  },
];

export const cartDetails: CartDetails[] = [
  { id: 1, cart_id: 1, product_id: 10, quantity: 2 },
  { id: 2, cart_id: 2, product_id: 20, quantity: 1 },
  { id: 3, cart_id: 3, product_id: 30, quantity: 5 },
];

export const invoices: Invoice[] = [
  {
    id: 1,
    customer_id: 1,
    recipientName: "John Doe",
    phone: "1234567890",
    shipAddress: "123 Main St",
    date: new Date("2024-11-15"),
    status: "Processing",
  },
  {
    id: 2,
    customer_id: 2,
    recipientName: "Jane Smith",
    phone: "9876543210",
    shipAddress: "456 Elm St",
    date: new Date("2024-11-20"),
    status: "Completed",
  },
  {
    id: 3,
    customer_id: 3,
    recipientName: "Charlie",
    phone: "1122334455",
    shipAddress: "789 Oak St",
    date: new Date("2024-11-10"),
    status: "Rejected",
  },
];

export const invoiceDetails: InvoiceDetails[] = [
  { id: 1, invoice_id: 1, product_id: 10, quantity: 2 },
  { id: 2, invoice_id: 2, product_id: 20, quantity: 1 },
  { id: 3, invoice_id: 3, product_id: 30, quantity: 4 },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Young Green College Varsity Jacket",
    priceCents: 4702,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 41,
    slug: "men-young-green-college-varsity-jacket-description-ku9x6kl8mnkbdgqr",
  },
  {
    id: 2,
    name: "Tiffany Dress",
    priceCents: 9935,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 0,
    slug: "women-tiffany-dress-description-hblhnmfuov340j6y",
  },
  {
    id: 3,
    name: "Raglan Croptop",
    priceCents: 2117,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 5,
    slug: "kids-raglan-croptop-description-pkmp8gl7042rjwvg",
  },
  {
    id: 4,
    name: "Young Green College Varsity Jacket",
    priceCents: 4904,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 0,
    slug: "men-young-green-college-varsity-jacket-description-p19483ylyiunx59p",
  },
  {
    id: 5,
    name: "Tiffany Dress",
    priceCents: 5112,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 0,
    slug: "women-tiffany-dress-description-qsseq5fmk4yc4khc",
  },
  {
    id: 6,
    name: "Raglan Croptop",
    priceCents: 3242,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 3,
    slug: "kids-raglan-croptop-description-87rx0c14un50hy4k",
  },
  {
    id: 7,
    name: "Young Green College Varsity Jacket",
    priceCents: 7953,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 35,
    slug: "men-young-green-college-varsity-jacket-description-c3grbfvgncp8httc",
  },
  {
    id: 8,
    name: "Tiffany Dress",
    priceCents: 4714,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 0,
    slug: "women-tiffany-dress-description-62da4m9nb8qa7uxz",
  },
  {
    id: 9,
    name: "Raglan Croptop",
    priceCents: 6067,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 0,
    slug: "kids-raglan-croptop-description-ymrw2h18jzp3t91n",
  },
  {
    id: 10,
    name: "Young Green College Varsity Jacket",
    priceCents: 6738,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 0,
    slug: "men-young-green-college-varsity-jacket-description-0oteuguyv05l90u7",
  },
  {
    id: 11,
    name: "Tiffany Dress",
    priceCents: 5926,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 0,
    slug: "women-tiffany-dress-description-rvys0ble7x1nw5qj",
  },
  {
    id: 12,
    name: "Raglan Croptop",
    priceCents: 4013,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 16,
    slug: "kids-raglan-croptop-description-lz19aqu99u8pmuiv",
  },
  {
    id: 13,
    name: "Young Green College Varsity Jacket",
    priceCents: 3257,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 0,
    slug: "men-young-green-college-varsity-jacket-description-5wwn0qm6zz52jhpc",
  },
  {
    id: 14,
    name: "Tiffany Dress",
    priceCents: 3859,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 25,
    slug: "women-tiffany-dress-description-52lczdko6cm0e6e9",
  },
  {
    id: 15,
    name: "Raglan Croptop",
    priceCents: 6860,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 0,
    slug: "kids-raglan-croptop-description-nn9t4cm7jksjbn8y",
  },
  {
    id: 16,
    name: "Young Green College Varsity Jacket",
    priceCents: 8051,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 0,
    slug: "men-young-green-college-varsity-jacket-description-allxo4j3siae0676",
  },
  {
    id: 17,
    name: "Tiffany Dress",
    priceCents: 3817,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 41,
    slug: "women-tiffany-dress-description-whoho3w5bi0dmnnp",
  },
  {
    id: 18,
    name: "Raglan Croptop",
    priceCents: 3281,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 20,
    slug: "kids-raglan-croptop-description-tyc2atct12ddfuqo",
  },
  {
    id: 19,
    name: "Young Green College Varsity Jacket",
    priceCents: 5587,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 45,
    slug: "men-young-green-college-varsity-jacket-description-os6jhl291q32d0lv",
  },
  {
    id: 20,
    name: "Tiffany Dress",
    priceCents: 5298,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 27,
    slug: "women-tiffany-dress-description-s31fk474ka8t6uum",
  },
  {
    id: 21,
    name: "Raglan Croptop",
    priceCents: 4293,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 16,
    slug: "kids-raglan-croptop-description-5q11im72gc5mswn9",
  },
  {
    id: 22,
    name: "Young Green College Varsity Jacket",
    priceCents: 1745,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 0,
    slug: "men-young-green-college-varsity-jacket-description-h3exi9oxtq6wsc13",
  },
  {
    id: 23,
    name: "Tiffany Dress",
    priceCents: 3030,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 0,
    slug: "women-tiffany-dress-description-uy2nvbcoeqbzfayb",
  },
  {
    id: 24,
    name: "Raglan Croptop",
    priceCents: 9033,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 48,
    slug: "kids-raglan-croptop-description-n2kbk8hvmkdab8ka",
  },
  {
    id: 25,
    name: "Young Green College Varsity Jacket",
    priceCents: 8094,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 0,
    slug: "men-young-green-college-varsity-jacket-description-o3bmykdzc77wpuut",
  },
  {
    id: 26,
    name: "Tiffany Dress",
    priceCents: 9436,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 0,
    slug: "women-tiffany-dress-description-ukalogmyzmfay4eo",
  },
  {
    id: 27,
    name: "Raglan Croptop",
    priceCents: 4342,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 5,
    slug: "kids-raglan-croptop-description-qfx4cu2rk6vz2icr",
  },
  {
    id: 28,
    name: "Young Green College Varsity Jacket",
    priceCents: 6605,
    images: ["/men.png", "/women.png", "/kids.png"],
    description: "description",
    category_id: 1,
    saleOff: 0,
    slug: "men-young-green-college-varsity-jacket-description-0ackzzxyop91dvk9",
  },
  {
    id: 29,
    name: "Tiffany Dress",
    priceCents: 8574,
    images: ["/women.png", "/men.png", "/kids.png"],
    description: "description",
    category_id: 2,
    saleOff: 27,
    slug: "women-tiffany-dress-description-d88vcdvn0skfvh06",
  },
  {
    id: 30,
    name: "Raglan Croptop",
    priceCents: 6863,
    images: ["/kids.png", "/women.png", "/men.png"],
    description: "description",
    category_id: 3,
    saleOff: 41,
    slug: "kids-raglan-croptop-description-b8kdpfkcomyq2slj",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "men",
    description:
      "Discover a collection of stylish, dynamic, and versatile fashion pieces for men, perfect for any occasion.",
  },
  {
    id: 2,
    name: "women",
    description:
      "Express your personality and unique style with elegant and modern designs crafted for women.",
  },
  {
    id: 3,
    name: "kids",
    description:
      "Explore adorable, comfortable, and safe collections for kids, perfect for everyday activities.",
  },
];

export const productSizes: ProductSize[] = [
  {
    id: 1,
    product_id: 1,
    size: "S",
    quantity: 50,
  },
  {
    id: 2,
    product_id: 1,
    size: "M",
    quantity: 30,
  },
  {
    id: 3,
    product_id: 2,
    size: "L",
    quantity: 20,
  },
  {
    id: 4,
    product_id: 3,
    size: "XL",
    quantity: 10,
  },
];

const mockOrders = [
  {
    id: "ShBg5PDzEFBrW3dT",
    products: [
      {
        src: "/men_1.png",
        name: "Young Green College Varsity Jacket",
        quantity: 2,
        priceCents: 4545,
      },
      {
        src: "/women_1.png",
        name: "Cardigan",
        quantity: 1,
        priceCents: 7000,
      },
    ],
  },
  {
    id: "7qSZpM7NQ2RMhzBP",
    products: [
      {
        src: "/women_2.png",
        name: "Tiffany Dress",
        quantity: 1,
        priceCents: 12000,
      },
    ],
  },
].map((order) => ({
  ...order,
  totalPriceCents: order.products.reduce(
    (total, product) => total + product.priceCents * product.quantity,
    0,
  ),
}));

const mockProducts = [
  {
    src: "/men_1.png",
    name: "Young Green College Varsity Jacket",
    priceCents: 4545,
    quantity: 2,
  },
  {
    src: "/women_1.png",
    name: "Cardigan",
    priceCents: 7000,
    quantity: 1,
  },
].map((product) => ({
  ...product,
  totalPriceCents: product.priceCents * product.quantity,
}));

export { mockOrders, mockProducts };
