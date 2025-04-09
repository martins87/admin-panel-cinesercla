import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";
import Link from "next/link";

const FilmesPage = () => {
  return (
    <Page title="Lista de Filmes" subtitle="Lista de Filmes / Estatísticas">
      <Typography>FilmesPage</Typography>
      <Link href="/cadastro/filmes/novo/">
            <Typography className="text-xl text-[#0057FC] hover:underline">
              Novo
            </Typography>
          </Link>
    </Page>
  );
};

export default FilmesPage;
