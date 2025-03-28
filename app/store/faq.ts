import { create } from "zustand";
import { Faq } from "../types/Faq";
import { getFaqList } from "@/lib/db/faq";

type FaqStore = {
  faqList: Faq[];
  hasFetched: boolean;
  fetchFaqList: () => Promise<void>;
  getFaqById: (id: string) => Faq | undefined;
};

export const useFaqStore = create<FaqStore>((set, get) => ({
  faqList: [],
  hasFetched: false,
  fetchFaqList: async () => {
    if (get().hasFetched) return;

    const list = await getFaqList();

    set({ faqList: list, hasFetched: true });
  },
  getFaqById: (id: string) => get().faqList.find((faq: Faq) => faq._id === id),
}));
