"use client";

import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import useCountries from "@/app/hooks/useCountries";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  catagory:
    | {
        label: string;
        icon: IconType;
        description: string;
      }
    | undefined;

  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  catagory,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <h1>Hosted by {user?.name}</h1>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 font-light text-neutral-600">
        <p>{guestCount} guest</p>
        <p>{roomCount} room</p>
        <p>{bathroomCount} bathroom</p>
      </div>
      <hr />
      {catagory && (
        <ListingCategory
          icon={catagory.icon}
          description={catagory.description}
          label={catagory.label}
        />
      )}
      <hr />
      <p className="text-lg font-light text-neutral-500">{description}</p>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
