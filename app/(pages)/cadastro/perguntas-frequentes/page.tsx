"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Faq } from "@/app/types/Faq";
import { useFaqStore } from "@/app/store/faq";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import PerguntaFrequente from "@/app/components/FAQ/PerguntaFrequente";
import Button from "@/app/components/ui/Button";
import AlertModal from "@/app/components/AlertModal";
import { deleteFaq } from "@/lib/db/faq";

const FaqPage = () => {
  const router = useRouter();
  const { faqList, fetchFaqList, removeFaq } = useFaqStore();
  const [toDeleteFaqId, setToDeleteFaqId] = useState<string>("");
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // TODO treat database fetch error
    const fetchFaq = async () => await fetchFaqList();

    fetchFaq();
  }, [fetchFaqList]);

  const handleDelete = async () => {
    setDeleteModalOpen(false);
    setToDeleteFaqId("");

    // TODO add loading...
    const deleted = await deleteFaq(toDeleteFaqId);

    // TODO handle error
    if (deleted) removeFaq(toDeleteFaqId);
  };

  return (
    <>
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
            <PerguntaFrequente
              key={index}
              faq={faq}
              setModalOpen={setDeleteModalOpen}
              setToDeleteFaqId={setToDeleteFaqId}
            />
          ))}
        </Centered>
      </Page>
      <AlertModal
        isOpen={deleteModalOpen}
        title="Deseja mesmo excluir?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="EXCLUIR"
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        hideOnOutsideClick={true}
      />
    </>
  );
};

export default FaqPage;
