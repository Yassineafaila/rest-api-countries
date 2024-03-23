import { Root } from "@/constants/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/animation/MotionDiv";
interface IProps {
  country: Root;
  index: number;
}
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const CountryCard: React.FC<IProps> = ({ country, index }) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeIn", duration: 0.5 }}
      className="bg-light-secondary dark:bg-dark-primary shadow-md rounded overflow-hidden pb-6"
    >
      <Link href={`/details/${country.name.common}`}>
        <Image
          src={country.flags.svg}
          width={0}
          height={0}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          alt={country.name.common}
        />
      </Link>
      <div className="px-4 pb-6 pt-5">
        <h2 className="font-black text-lg text-light-text dark:text-dark-text">
          {country.name.common}
        </h2>
        <div className="mt-3">
          <p className="mt-1">
            <span className="text-light-text dark:text-dark-text font-semibold">
              Population :
            </span>
            <span className="ms-2 dark:text-light-background">
              {country.population}
            </span>
          </p>
          <p className="mt-1">
            <span className="text-light-text dark:text-dark-text font-semibold">
              Region :
            </span>
            <span className="ms-2 dark:text-light-background">
              {country.region}
            </span>
          </p>
          <p className="mt-1">
            <span className="text-light-text dark:text-dark-text font-semibold">
              Capital :
            </span>
            <span className="ms-2 dark:text-light-background">
              {country.capital}
            </span>
          </p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default CountryCard;
