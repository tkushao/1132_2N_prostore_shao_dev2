import { Metadata } from 'next';
import { getCabins, deleteCabin } from '@/lib/cabins/cabin.actions_xx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatId } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Pagination from '@/components/shared/pagination';
import { Badge } from '@/components/ui/badge';
import DeleteDialog from '@/components/shared/delete-dialog_xx';
import { requireAdmin } from '@/lib/auth.guard';

export const metadata: Metadata = {
  title: 'Admin Cabins',
};

const AdminCabinPage = async (props: {
  searchParams: Promise<{
    page: string;
    query: string;
  }>;
}) => {
  await requireAdmin();

  const { page = '1', query: searchText } = await props.searchParams;

  const cabins = await getCabins();
  console.log('cabins', cabins);

  return (
    <div className='space-y-2'>
      <div className='flex-between'>
        <div className='flex items-center gap-3'>
          <h1 className='h2-bold'>Cabins</h1>
          {searchText && (
            <div>
              Filtered by <i>&quot;{searchText}&quot;</i>{' '}
              <Link href='/admin/products'>
                <Button variant='outline' size='sm'>
                  Remove Filter
                </Button>
              </Link>
            </div>
          )}
        </div>
        <Button asChild variant='default'>
          <Link href='/admin/cabins/create'>Create Cabin</Link>
        </Button>
      </div>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Local Image</TableHead>
              {/* <TableHead>Description</TableHead> */}
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cabins.map((cabin) => (
              <TableRow key={cabin.id}>
                <TableCell>{formatId(cabin.id)}</TableCell>
                <TableCell>{cabin.name}</TableCell>
                <TableCell>{cabin.capacity}</TableCell>
                <TableCell>{cabin.price}</TableCell>
                <TableCell>{cabin.discount}</TableCell>
                <TableCell>{cabin.local_img}</TableCell>
                {/* <TableCell>{cabin.description}</TableCell> */}
                <TableCell>
                  <Button asChild variant='outline' size='sm'>
                    <Link href={`/admin/cabins/${cabin.id}`}>Edit</Link>
                  </Button>
                  <DeleteDialog id={cabin.id} action={deleteCabin} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminCabinPage;
