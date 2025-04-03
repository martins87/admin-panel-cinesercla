import { MovieDetails } from "@/app/components/ui/MoviDetails"


export default function Home() {

  // Dados de exemplo para o componente de detalhes do filme
  const movieData = {
    poster: "/placeholder.svg?height=200&width=150",
    title: "Capitão América: Admirável Mundo Novo",
    subtitle: "Captain America: Brave New World",
    genre: "Ação",
    classification: "12 Anos",
    duration: "2h20min",
    releaseDate: "13/02/2025",
    director: "Julius Onah",
    distributor: "Walt Disney",
    id: "1086",
    sessions: {
      location: "Shopping Norte",
      city: "Belo Horizonte/MG",
      rooms: [
        {
          name: "Sala 3",
          type: "Sessão 2D",
          times: ["14:20", "16:25", "18:30"],
          date: "23/01/2025 à 29/01/2025",
          status: "Dublado",
        },
        {
          name: "Sala 3",
          type: "Sessão 3D",
          times: ["16:10"],
          date: "23/01/2025 à 29/01/2025",
          status: "Legendado",
        },
      ],
    },
  }

  // Dados de exemplo para um segundo filme
  const movieData2 = {
    poster: "/placeholder.svg?height=200&width=150",
    title: "O Maravilhoso Mágico De Oz: Parte 1",
    subtitle: "The wizard of Esmerald City",
    genre: "Família",
    classification: "10 Anos",
    duration: "1h45min",
    releaseDate: "20/02/2025",
    director: "Igor Voloshin",
    distributor: "Paris Filmes",
    id: "1087",
    sessions: {
      location: "Shopping Norte",
      city: "Belo Horizonte/MG",
      rooms: [
        {
          name: "Sala 5",
          type: "Sessão 2D",
          times: ["13:30", "15:45", "18:00"],
          date: "23/01/2025 à 29/01/2025",
          status: "Dublado",
        },
      ],
    },
  }

  return (
    <main className="mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Movies Details</h1>
      <div className="space-y-6">
        <MovieDetails {...movieData} />
        <MovieDetails {...movieData2} />
      </div>
    </main>
  )
}

