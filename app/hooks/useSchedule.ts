import { useQuery } from "@tanstack/react-query";

import { getSchedule } from "../services/schedule";

export const useSchedule = (idERP?: string, idUnidade?: string) => {
  return useQuery({
    queryKey: ["schedule", idERP, idUnidade],
    queryFn: () => getSchedule(idERP, idUnidade),
    staleTime: 60000,
  });
};
