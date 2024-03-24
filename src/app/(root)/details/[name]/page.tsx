import { QueryCountry } from "@/api/actions";
import BackButton from "@/components/BackButton";
import Image from "next/image";
export default async function Home({ params }: { params: { name: string } }) {
  const data = await QueryCountry(params.name);
  return (
    <main className=" flex flex-col gap-8 bg-light-background min-h-screen dark:bg-dark-background px-4">
      <div className="container mx-auto max-w-[1380px] flex flex-col gap-12">
        <BackButton />
        {data ? (
          <div className="flex justify-between w-full my-4">
            {data.map((detail) => (
              <div
                key={detail.name.common}
                className="flex flex-col lg:flex-row md:gap-10"
              >
                <Image
                  src={detail.flags.svg}
                  width={500}
                  height={700}
                  className="w-full md:w-1/2"
                  alt={detail.name.common}
                />
                <div className="body flex flex-col gap-5">
                  <h1 className="text-light-text dark:text-dark-text font-black mt-5 text-xl md:text-3xl">
                    {detail.name.common}
                  </h1>
                  <div className="flex flex-col md:flex-row gap-12">
                    <ul className="flex flex-col gap-4">
                      <li>
                        <span className="text-light-text dark:text-dark-text font-semibold text-base">
                          Native Name :
                        </span>
                        <span className="text-light-input">
                          {detail.name.official}
                        </span>
                      </li>
                      <li>
                        <span className="text-light-text dark:text-dark-text font-semibold text-base">
                          Population :
                        </span>
                        <span className="text-light-input">
                          {detail.population.toLocaleString()}
                        </span>
                      </li>
                      <li>
                        <span className="text-light-text dark:text-dark-text font-semibold text-base">
                          Region :
                        </span>
                        <span className="text-light-input">
                          {detail.region}
                        </span>
                      </li>
                      <li>
                        <span className="text-light-text dark:text-dark-text font-semibold text-base">
                          Sub Region :{" "}
                        </span>
                        <span className="text-light-input">
                          {detail.subregion}
                        </span>
                      </li>
                      <li>
                        <span className="text-light-text dark:text-dark-text font-semibold text-base">
                          Capital :
                        </span>
                        <span className="text-light-input">
                          {detail.capital || "No Capital"}
                        </span>
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <span className="text-light-text dark:text-dark-text font-semibold text-base">
                          Top Level Domain :{" "}
                        </span>
                        <span className="text-light-input">
                          {detail.tld[0]}
                        </span>
                      </li>
                      <li>
                        <span className="text-light-text dark:text-dark-text font-semibold text-base">
                          Currencies :{" "}
                        </span>
                        <span className="text-light-input">
                          {detail.currencies &&
                          Object.values(detail.currencies).length > 0
                            ? Object.values(detail.currencies)
                                .map((currency: any) => currency.name)
                                .join(", ")
                            : "No Currency"}
                        </span>
                      </li>
                      <li>
                        <span className="text-light-text dark:text-dark-text font-semibold text-base">
                          Languages :{" "}
                        </span>
                        <span className="text-light-input">
                          {detail.languages &&
                          Object.values(detail.languages).length > 0
                            ? Object.values(detail.languages)
                                .map((language: any) => language)
                                .join(", ")
                            : "No Language"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center">
                    <span className="text-light-text dark:text-dark-text font-semibold">
                      Borders Countries :
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {detail.borders?.length > 0 ? (
                        detail.borders.map((border) => (
                          <span
                            key={border}
                            className="px-5 py-2 bg-light-secondary dark:bg-dark-primary text-light-text dark:text-dark-text shadow-md"
                          >
                            {border}
                          </span>
                        ))
                      ) : (
                        <span>No Borders</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No Data</div>
        )}
      </div>
    </main>
  );
}
