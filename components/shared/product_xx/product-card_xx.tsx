import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Rating_xx from './rating_xx';
import ProductPrice_xx from './product-price_xx';

const ProductCard_xx = ({ product }: { product: any }) => {
  // console.log('product', product);
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            height={300}
            width={300}
            alt={product.name}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div className='text-xs'>{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <Rating_xx value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice_xx value={Number(product.price)} />
          ) : (
            <p className='text-destructive'>Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard_xx;
