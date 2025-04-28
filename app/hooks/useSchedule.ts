import { useQuery } from "@tanstack/react-query";

import { getSchedule } from "../services/schedule";

export const useSchedule = () => {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: getSchedule,
    staleTime: 60000,
  });
};
