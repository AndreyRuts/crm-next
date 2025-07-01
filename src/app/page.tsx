import ClientComponent from '@/app/components/client-component';
import ServerComponent from '@/app/components/server-component';
import ServerComponentCopy from '@/app/components/server-component copy';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Home page</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
