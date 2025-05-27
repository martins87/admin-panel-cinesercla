import { useQuery } from "@tanstack/react-query";

import { getBannerList } from "../services/banner";

export const useBanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: getBannerList,
    staleTime: 60000,
  });
};
