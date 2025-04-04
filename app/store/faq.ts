import { create } from "zustand";
import { Faq } from "../types/Faq";
import { getFaqList } from "@/lib/db/faq";

type FaqStore = {
  faqList: Faq[];
  hasFetched: boolean;
  fetchFaqList: () => Promise<void>;
  getFaqById: (id: string) => Faq | undefined;
  updateFaqList: (faq: Faq) => void;
  addFaq: (faq: Faq) => void;
  removeFaq: (id: string) => void;
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
  updateFaqList: (updatedFaq: Faq) => {
    set((state) => ({
      faqList: state.faqList.map((faq) =>
        faq._id === updatedFaq._id ? updatedFaq : faq
      ),
    }));
  },
  addFaq: (newFaq: Faq) => {
    set((state) => ({
      faqList: [...state.faqList, newFaq],
    }));
  },
  removeFaq: (id: string) => {
    set((state) => ({
      faqList: state.faqList.filter((faq) => faq._id !== id),
    }));
  },
}));
