import { QueryCountries } from "@/api/actions";
import ContainerCountries from "@/components/ContainerCountries";
import Image from "next/image";

export default async function Home() {
  const data = await QueryCountries();
  console.log(data);
  return (
    <main className="bg-light-background min-h-screen dark:bg-dark-background">
      <ContainerCountries>
        {data.map((item, index) => {
          return (
            <div className="" key={index}>
              <Image
                src={item.flags.png}
                width={300}
                height={300}
                alt={item.name.common}
              />
            </div>
          );
        })}
      </ContainerCountries>
    </main>
  );
}
