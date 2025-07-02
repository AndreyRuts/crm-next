import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <Header>{`Company (${id})`}</Header>;
}
