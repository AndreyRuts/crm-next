export interface PageProps {
  params: Promise<{ id: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}
