'use server';

import { PrismaClient } from '@/lib/generated/prisma/client';
import { Prisma } from '@/lib/generated/prisma/client';
import { convertToPlainObject, formatError } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { insertCabinSchema, updateCabinSchema } from '../validator';

const prisma = new PrismaClient();

// Get all cabins
export async function getCabins() {
  const data = await prisma.cabin.findMany({
    orderBy: [{ name: 'asc' }],
  });

  return convertToPlainObject(data);
}

// Get single cabin by it's ID
export async function getCabinById(productId: string) {
  const data = await prisma.cabin.findFirst({
    where: { id: productId },
  });

  return convertToPlainObject(data);
}

// Delete a cabin
export async function deleteCabin(id: string) {
  try {
    await prisma.cabin.delete({ where: { id } });

    revalidatePath('/admin/users');

    return {
      success: true,
      message: 'User deleted successfully',
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

// Update a cabin
export async function updateCabin(data: z.infer<typeof updateCabinSchema>) {
  try {
    // console.log('updata form data', data);
    const cabin = updateCabinSchema.parse(data);
    // console.log('updata cabin', cabin);
    const cabinExists = await prisma.cabin.findFirst({
      where: { id: cabin.id },
    });

    // console.log('cabinExists', cabinExists);

    if (!cabinExists) throw new Error('Cabin not found');

    await prisma.cabin.update({
      where: { id: cabin.id },
      data: cabin,
    });

    revalidatePath('/admin/cabins');

    return {
      success: true,
      message: 'Cabin updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Create a cabin
export async function createCabin(data: z.infer<typeof insertCabinSchema>) {
  try {
    const cabin = insertCabinSchema.parse(data);
    console.log('cabin', cabin);
    await prisma.cabin.create({ data: cabin });

    revalidatePath('/admin/cabins');

    return {
      success: true,
      message: 'Cabin created successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
