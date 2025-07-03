'use client';

import Modal from '@/app/components/modal';
import PromotionForm from '@/app/components/promotion-form';
import { useParams, useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  return (
    <Modal show onClose={() => router.back()}>
      <PromotionForm companyId={id} onSubmit={() => router.back()} />
    </Modal>
  );
}
