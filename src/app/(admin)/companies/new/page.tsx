'use client';

import CompanyForm from '@/app/components/company-form';

export default function Page() {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
