'use client';

import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import Image from 'next/image';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { updateCabinSchema } from '@/lib/validator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Card, CardContent } from '@/components/ui/card';
import { UploadButton } from '@/lib/uploadthing';
import { updateCabin } from '@/lib/cabins/cabin.actions_xx';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const UpdateCabinForm_xx = ({
  cabin,
  cabinId,
}: {
  cabin: z.infer<typeof updateCabinSchema>;
  cabinId: string;
}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof updateCabinSchema>>({
    resolver: zodResolver(updateCabinSchema),
    defaultValues: cabin,
  });

  const onSubmit = async (values: z.infer<typeof updateCabinSchema>) => {
    try {
      // console.log('form values', values);
      if (!cabinId) {
        router.push('/admin/cabins');
        return;
      }

      const res = await updateCabin({ ...values, id: cabinId });

      if (!res.success) {
        toast.error('Updating Not Successful', {
          description: res.message,
        });
      } else {
        toast.success('Updating Successful', {
          description: res.message,
        });
        router.push('/admin/cabins');
      }
    } catch (error) {
      toast.error('There is an Error', {
        description: (error as Error).message,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        method='POST'
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        {form.formState.errors && (
          <div className='mb-4'>
            {Object.values(form.formState.errors).map((error) => (
              <p key={error.message} className='text-red-500'>
                {error.message}
              </p>
            ))}
          </div>
        )}
        <div className='flex flex-col md:flex-row gap-5'>
          {/* Name */}
          <FormField
            control={form.control}
            name='name'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof updateCabinSchema>,
                'name'
              >;
            }) => (
              <FormItem className='w-full'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter product name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* Category */}
          <FormField
            control={form.control}
            name='capacity'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof updateCabinSchema>,
                'capacity'
              >;
            }) => (
              <FormItem className='w-full'>
                <FormLabel>Max Capacity</FormLabel>
                <FormControl>
                  <div className='flex-between'>
                    <Input placeholder='Enter capacity' {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          {/* Price */}
          <FormField
            control={form.control}
            name='price'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof updateCabinSchema>,
                'price'
              >;
            }) => (
              <FormItem className='w-full'>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder='Enter price' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Discount */}
          <FormField
            control={form.control}
            name='discount'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof updateCabinSchema>,
                'discount'
              >;
            }) => (
              <FormItem className='w-full'>
                <FormLabel>Discount</FormLabel>
                <FormControl>
                  <Input placeholder='Enter discount' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          {/* Local Image */}
          <FormField
            control={form.control}
            name='local_img'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof updateCabinSchema>,
                'local_img'
              >;
            }) => (
              <FormItem className='w-full'>
                <FormLabel>Local Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter local url of the image'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          {/* Description */}
          <FormField
            control={form.control}
            name='description'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof updateCabinSchema>,
                'description'
              >;
            }) => (
              <FormItem className='w-full'>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Enter cabin description'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Add other fields similarly */}
        <div>
          <Button
            type='submit'
            size='lg'
            disabled={form.formState.isSubmitting}
            className='button col-span-2 w-full'
          >
            {form.formState.isSubmitting ? 'Submitting' : `Update Product`}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default UpdateCabinForm_xx;
