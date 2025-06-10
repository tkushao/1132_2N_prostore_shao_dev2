import { UsersIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

function CabinCard_xx({ cabin }: any) {
  const { id, name, capacity, price, discount, local_img } = cabin;

  console.log('CabinCard_xx', cabin);

  return (
    <div className='flex border-primary-800 border'>
      <div className='relative flex-1'>
        <Image
          src={local_img}
          fill
          sizes='100vw'
          alt={`Cabin ${name}`}
          className='object-cover border-r border-primary-800'
        />
      </div>

      <div className='flex-grow'>
        <div className='pt-5 pb-4 px-7 bg-primary-950'>
          <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
            Cabin {name}
          </h3>

          <div className='flex gap-3 items-center mb-2'>
            <UsersIcon className='h-5 w-5 text-primary-600' />
            <p className='text-lg text-primary-200'>
              For up to <span className='font-bold'>{capacity}</span> guests
            </p>
          </div>

          <p className='flex gap-3 justify-end items-baseline'>
            {discount > 0 ? (
              <>
                <span className='text-3xl font-[350]'>${price - discount}</span>
                <span className='line-through font-semibold text-primary-600'>
                  ${price}
                </span>
              </>
            ) : (
              <span className='text-3xl font-[350]'>${price}</span>
            )}
            <span className='text-primary-200'>/ night</span>
          </p>
        </div>

        <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
          <a
            href={`/cabins_xx/${id}`}
            className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinCard_xx;
