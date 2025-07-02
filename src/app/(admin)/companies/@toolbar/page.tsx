import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

export default function Page() {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
