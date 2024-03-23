import { QueryCountry } from "@/api/actions";
import BackButton from "@/components/BackButton";
import Image from "next/image";
export default async function Home({ params }: { params: { name: string } }) {
  const data = await QueryCountry(params.name);
  return (
    <main className="bg-light-backgroundflex flex-col gap-8 bg-light-background min-h-screen dark:bg-dark-background px-4">
      <div className="container mx-auto max-w-[1390px]">
        <BackButton/>
        {data ? (
          <div className="flex justify-between w-full">
            {data.map((detail) => (
              <div key={detail.name.common}>{detail.name.common}</div>
            ))}
          </div>
        ) : (
          <div>No Data</div>
        )}
      </div>
    </main>
  );
}
