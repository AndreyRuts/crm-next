import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string[] }>;
}

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <>
      <Header>Companies ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}

// folder naming important [id] or [...id]
