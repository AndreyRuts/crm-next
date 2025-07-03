import DashboardCard from '@/app/components/dashboard-card';
import { getCompanies, getCountries } from '@/app/lib/api';
import getCountById from '@/app/lib/utils/getCountById';

import clsx from 'clsx';
import Image from 'next/image';

export default async function Page() {
  const countries = await getCountries();
  const companies = await getCompanies();
  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div>
          {countries.map(({ id, title }) => (
            <p
              key={id}
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
            >{`${title} - ${counts[id]}`}</p>
          ))}
        </div>
        <Image width={395} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
}
