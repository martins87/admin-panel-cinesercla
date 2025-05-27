import { create } from "zustand";
import { Banner } from "@/app/types/banner";
import { getBannerList } from "../services/banner";

type BannerStore = {
  bannerList: Banner[];
  hasFetched: boolean;
  fetchBannerList: () => Promise<void>;
  getBannerById: (id: string) => Banner | undefined;
  updateBannerList: (updatedBanner: Banner) => void;
  addBanner: (newBanner: Banner) => void;
  removeBanner: (id: string) => void;
};

export const useBannerStore = create<BannerStore>((set, get) => ({
  bannerList: [],
  hasFetched: false,
  fetchBannerList: async () => {
    if (get().hasFetched) return;

    const list = await getBannerList();

    set({ bannerList: list, hasFetched: true });
  },
  getBannerById: (id: string) => get().bannerList.find((b) => b._id === id),
  updateBannerList: (updatedBanner: Banner) => {
    set((state) => ({
      bannerList: state.bannerList.map((b) =>
        b._id === updatedBanner._id ? updatedBanner : b
      ),
    }));
  },
  addBanner: (newBanner: Banner) => {
    set((state) => ({
      bannerList: [...state.bannerList, newBanner],
    }));
  },
  removeBanner: (id: string) => {
    set((state) => ({
      bannerList: state.bannerList.filter((b) => b._id !== id),
    }));
  },
}));
