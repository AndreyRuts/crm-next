import AddCompanyButton from '../components/add-company-button';
import CompanyRow from '../components/company-row';
import CompanyTable from '../components/company-table';
import Header from '../components/header';
import SearchInput from '../components/search-input';
import { Status } from '../components/status-label';
import Toolbar from '../components/toolbar';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.19.2023'}
        />
      </CompanyTable>
    </>
  );
}
