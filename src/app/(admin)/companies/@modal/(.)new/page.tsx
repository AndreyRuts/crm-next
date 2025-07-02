'use client';

import CompanyForm from '@/app/components/company-form';
import Modal from '@/app/components/modal';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
