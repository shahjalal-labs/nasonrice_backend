//

import { Prisma } from "@prisma/client";

export const airportSearchFilter = (
  search?: string | null,
): Prisma.AirportWhereInput | undefined => {
  if (!search?.trim()) return undefined;

  const q = search.trim();

  return {
    OR: [
      { airport: { contains: q, mode: Prisma.QueryMode.insensitive } },
      { city: { contains: q, mode: Prisma.QueryMode.insensitive } },
      { code: { contains: q, mode: Prisma.QueryMode.insensitive } },
      { country: { contains: q, mode: Prisma.QueryMode.insensitive } },
    ],
  };
};
