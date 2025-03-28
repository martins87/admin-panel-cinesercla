import { Pergunta } from "@/app/types/Pergunta";
import Page from "@/app/components/ui/Page";
import PerguntaFrequente from "@/app/components/FAQ/PerguntaFrequente";
import Centered from "@/app/components/ui/Centered";
import { perguntasFrequentes } from "@/app/constants/faq";

const PerguntasFrequentesPage = () => {
  return (
    <Page
      title="Lista de Perguntas Frequentes"
      subtitle="Visualize e gerencie todas as perguntas frequentes"
    >
      <Centered direction="col" className="gap-y-4">
        {perguntasFrequentes.map((pergunta: Pergunta, index: number) => (
          <PerguntaFrequente key={index} pergunta={pergunta} />
        ))}
      </Centered>
    </Page>
  );
};

export default PerguntasFrequentesPage;
