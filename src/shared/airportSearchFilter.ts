//
import { Prisma } from "@prisma/client";

export const airportSearchFilter = (
  search: string | null,
): Prisma.AirportWhereInput | undefined => {
  if (!search) return undefined;

  return {
    OR: [
      { airport: { contains: search, mode: "insensitive" } },
      { city: { contains: search, mode: "insensitive" } },
      { code: { contains: search, mode: "insensitive" } },
      { country: { contains: search, mode: "insensitive" } },
    ],
  };
};
