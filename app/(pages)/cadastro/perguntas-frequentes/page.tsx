"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Faq } from "@/app/types/Faq";
import { useFaqStore } from "@/app/store/faq";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import PerguntaFrequente from "@/app/components/FAQ/PerguntaFrequente";
import Button from "@/app/components/ui/Button";

const FaqPage = () => {
  const router = useRouter();
  const { faqList, fetchFaqList } = useFaqStore();

  useEffect(() => {
    // TODO treat database fetch error here
    const fetchFaq = async () => await fetchFaqList();

    fetchFaq();
  }, [fetchFaqList]);

  return (
    <Page
      title="Lista de Perguntas Frequentes"
      subtitle="Visualize e gerencie todas as perguntas frequentes"
    >
      <Centered justify="start">
        <Button
          label="NOVA PERGUNTA FREQUENTE"
          primary
          onClick={() => router.push("/cadastro/perguntas-frequentes/nova")}
        />
      </Centered>
      <Centered direction="col" className="gap-y-4">
        {faqList.map((faq: Faq, index: number) => (
          <PerguntaFrequente key={index} faq={faq} />
        ))}
      </Centered>
    </Page>
  );
};

export default FaqPage;
