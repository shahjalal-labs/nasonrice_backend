//
import { Prisma } from "@prisma/client";

export const airportSearchFilter = (
  search: string | null,
): Prisma.AirportWhereInput | undefined => {
  if (!search) return undefined;

  return {
    OR: [
      {
        airport: {
          contains: search,
          mode: Prisma.QueryMode.insensitive, // ✅ Correct enum type
        },
      },
      {
        city: {
          contains: search,
          mode: Prisma.QueryMode.insensitive,
        },
      },
      {
        code: {
          contains: search,
          mode: Prisma.QueryMode.insensitive,
        },
      },
      {
        country: {
          contains: search,
          mode: Prisma.QueryMode.insensitive,
        },
      },
    ],
  };
};
