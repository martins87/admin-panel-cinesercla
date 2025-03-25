import Page from "@/app/components/ui/Page";
import { perguntasFrequentes } from "@/app/constants/perguntasFrequentes";
import PerguntaFrequente from "../../../components/FAQ/PerguntaFrequente";
import { Pergunta } from "@/app/types/Pergunta";
import Centered from "@/app/components/ui/Centered";

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
