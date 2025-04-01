"use client";

import { useEffect } from "react";

import { Faq } from "@/app/types/Faq";
import { useFaqStore } from "@/app/store/faq";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import PerguntaFrequente from "@/app/components/FAQ/PerguntaFrequente";

const FaqPage = () => {
  const { faqList, fetchFaqList } = useFaqStore();

  useEffect(() => {
    const fetchFaq = async () => {
      await fetchFaqList();
    };

    fetchFaq();
  }, [fetchFaqList]);

  return (
    <Page
      title="Lista de Perguntas Frequentes"
      subtitle="Visualize e gerencie todas as perguntas frequentes"
    >
      <Centered direction="col" className="gap-y-4">
        {faqList.map((faq: Faq, index: number) => (
          <PerguntaFrequente key={index} faq={faq} />
        ))}
      </Centered>
    </Page>
  );
};

export default FaqPage;
