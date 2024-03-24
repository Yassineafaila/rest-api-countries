import { QueryCountries } from "@/api/actions";
import ContainerCountries from "@/components/ContainerCountries";
import CountryCard from "@/components/CountryCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
interface SearchParamsProps {
  searchParams: { [key: string]: string };
}
export default async function Home({ searchParams }: SearchParamsProps) {
  const data = await QueryCountries(searchParams.search, searchParams.region);
  return (
    <main className="flex flex-col gap-8 bg-light-background min-h-screen dark:bg-dark-background px-4">
      <div className="flex items-center justify-between container mx-auto max-w-[1390px] flex-wrap">
        <SearchBar />
        <FilterBar />
      </div>
      {data ? (
        <ContainerCountries>
          {data.length > 0
            ? data.map((item, index) => {
                return <CountryCard key={index} country={item} index={index} />;
              })
            : "No Data"}
        </ContainerCountries>
      ) : (
        <div className="container mx-auto max-w-[1390px] flex items-center justify-center">
          <p className=" text-light-text dark:text-dark-text">
            No Country With This Name :C {searchParams.search}
          </p>
        </div>
      )}
    </main>
  );
}
