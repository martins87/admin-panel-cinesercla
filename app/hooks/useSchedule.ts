import { useQuery } from "@tanstack/react-query";

import { getSchedule } from "../services/schedule";

export const useSchedule = (idFilme?: string, idUnidade?: string) => {
  return useQuery({
    queryKey: ["schedule", idFilme, idUnidade],
    queryFn: () => getSchedule(idFilme, idUnidade),
    staleTime: 60000,
  });
};
