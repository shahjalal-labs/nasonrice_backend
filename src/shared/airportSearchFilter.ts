//
export const airportSearchFilter = (search: string | null) => {
  if (!search) return undefined;

  return {
    OR: [
      { name: { contains: search, mode: "insensitive" } },
      { city: { contains: search, mode: "insensitive" } },
      { code: { contains: search, mode: "insensitive" } },
      { country: { contains: search, mode: "insensitive" } },
    ],
  };
};
