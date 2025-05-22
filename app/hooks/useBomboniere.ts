import { useQuery } from "@tanstack/react-query";

import { getProductList } from "../services/bomboniere";

export const useBomboniere = () => {
  return useQuery({
    queryKey: ["bomboniere"],
    queryFn: getProductList,
    staleTime: 60000,
  });
};
