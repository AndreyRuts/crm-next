'use client';

import Button from '@/app/components/button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from '@/app/components/company-form-modal';
import { useState } from 'react';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      ></CompanyFormModal>
    </>
  );
}
