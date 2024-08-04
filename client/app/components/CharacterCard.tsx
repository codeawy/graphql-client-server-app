import { Character } from "@/types/Character";
import Image from "next/image";
import Link from "next/link";

export const CharacterCard = ({ id, name, image, species }: Character) => {
  return (
    <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
      <div className="relative mb-5">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
        />
      </div>
      <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
        <Link href={`/characters/${id}`}>{name}</Link>
      </h4>
      <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
        {species}
      </span>
    </div>
  );
};
