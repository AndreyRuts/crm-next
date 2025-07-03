'use client';

import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
}
