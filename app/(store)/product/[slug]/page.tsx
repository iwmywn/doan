import type { Metadata } from "next";
import { categories, products } from "@/lib/placeholder-data";
import ProductDetails from "@/ui/product/details";
import SimilarProducts from "@/ui/product/similar";
import BreadCrumbs from "@/ui/breadcrumbs";
import { capitalizeFirstLetter } from "@/utils/format-text";
import { Product } from "@/lib/definition";
import NotFound from "@/not-found";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const productSlug = (await params).slug;
  const name = products.find((p) => p.slug === productSlug)?.name;

  return {
    title: !name ? "NOT FOUND" : name,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const productSlug = (await params).slug;
  const product = products.find((p) => p.slug === productSlug);

  if (!product) return <NotFound />;

  const category = categories.find((cat) => cat.id === product.category_id)!;
  const similarProducts: Product[] = products.filter(
    (p) => p.category_id === category.id && p.slug !== productSlug,
  );
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "All Products", href: "/products" },
    {
      label: capitalizeFirstLetter(category.name),
      href: `/category/${category.name}`,
    },
    { label: product.name },
  ];

  return (
    <div className="min-h-[90vh]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />

      <ProductDetails product={product} />

      <SimilarProducts similarProducts={similarProducts} />
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}
