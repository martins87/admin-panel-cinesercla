"use client";

import { useState } from "react";
import Image from "next/image";
import ConfirmationModal from "@/app/components/ui/ConfirmationModalProps";
import { edit } from "@/app/constants/icons";
import { ActionButton, ColumnDefinition } from "@/app/components/ui/DataTable/DataTableTypes";
import DataTable from "@/app/components/ui/DataTable/DataTable";


// Tipo para os dados de filme
type Movie = {
  id: number;
  title: string;
  originalTitle: string;
  coverImage: string;
  registerDate: string;
  order: number;
};

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: 1087,
      title: "Dragon Ball DAIMA",
      originalTitle: "Dragon Ball DAIMA",
      coverImage: "/covers/dragon-ball.jpg",
      registerDate: "25/11/2024",
      order: 1
    },
    {
      id: 1088,
      title: "Lilo & Stitch (2025)",
      originalTitle: "Lilo & Stitch",
      coverImage: "/covers/dragon-ball.jpg",
      registerDate: "25/11/2024",
      order: 2
    },
    {
      id: 1090,
      title: "Capitão América: Admirável Mundo Novo",
      originalTitle: "Captain America: Brave New World",
      coverImage: "/covers/dragon-ball.jpg",
      registerDate: "25/11/2024",
      order: 3
    },
    {
      id: 1091,
      title: "O Maravilhoso Mágico De Oz: Parte 1",
      originalTitle: "The wizard of Esmerald City",
      coverImage: "/covers/dragon-ball.jpg",
      registerDate: "25/11/2024",
      order: 4
    },
    {
      id: 1092,
      title: "Ainda Estou Aqui",
      originalTitle: "Ainda Estou Aqui",
      coverImage: "/covers/dragon-ball.jpg",
      registerDate: "25/11/2024",
      order: 5
    }
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Definição das colunas
  const columns: ColumnDefinition<Movie>[] = [
    {
      key: "coverImage",
      header: "Capa",
      render: (item) => (
        <div className="w-20 h-28 relative">
          <Image 
            // src={item.coverImage || "https://placehold.co/100x120"} 
            src={"https://placehold.co/100x120"} 
            alt={item.title}
            fill
            className="object-cover rounded"
          />
        </div>
      )
    },
    {
      key: "title",
      header: "Nome",
      render: (item) => (
        <div>
          <div className="font-medium">{item.title}</div>
          <div className="text-gray-500 text-sm">{item.originalTitle}</div>
        </div>
      )
    },
    {
      key: "registerDate",
      header: "Cadastro",
      sortable: true,
      filterComponent: (
        <button className="text-gray-400">
          <span>⌄</span>
        </button>
      )
    },
    {
      key: "id",
      header: "ID",
      sortable: true,
      filterComponent: (
        <button className="text-gray-400">
          <span>⌄</span>
        </button>
      )
    }
  ];

  // Handlers para ações
  const handleMoveUp = (movie: Movie) => {
    if (movie.order <= 1) return;
    
    setMovies(prev => 
      prev.map(m => {
        if (m.id === movie.id) return { ...m, order: m.order - 1 };
        if (m.order === movie.order - 1) return { ...m, order: m.order + 1 };
        return m;
      }).sort((a, b) => a.order - b.order)
    );
  };

  const handleMoveDown = (movie: Movie) => {
    if (movie.order >= movies.length) return;
    
    setMovies(prev => 
      prev.map(m => {
        if (m.id === movie.id) return { ...m, order: m.order + 1 };
        if (m.order === movie.order + 1) return { ...m, order: m.order - 1 };
        return m;
      }).sort((a, b) => a.order - b.order)
    );
  };

  const handleEdit = (movie: Movie) => {
    console.log("Editar filme:", movie.title);
    // Implementar navegação para página de edição
  };

  const handleDelete = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedMovie) {
      setMovies(prev => prev.filter(m => m.id !== selectedMovie.id));
      setShowDeleteModal(false);
      setSelectedMovie(null);
    }
  };

  const handleHide = (movie: Movie) => {
    console.log("Ocultar filme:", movie.title);
    // Lógica para ocultar o filme
  };

  const actionButtons: ActionButton[] = [
    {
      icon: edit, // Caminho da imagem como string
      onClick: (item: any, index: any) => console.log("Editar", item, index),
      tooltip: "Editar",
    },
    {
      icon: edit, // StaticImageData importado
      onClick: (item: any, index: any) => console.log("Excluir", item, index),
      tooltip: "Excluir",
    },
  ];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Catálogo de Filmes</h1>
      
      <DataTable
        data={movies}
        columns={columns}
        keyExtractor={(item) => item.id}
        actionColumnLabel="Ordem"
        actions={actionButtons}
        defaultActions={{
          moveDown: true,
          moveUp: true,
          edit: true,
          delete: true,
          hide: true
        }}
        onMoveDown={handleMoveDown}
        onMoveUp={handleMoveUp}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onHide={handleHide}
        actionButtonsContainerClassName="flex flex-col gap-2 items-center"
      />
      
      <ConfirmationModal
        isOpen={showDeleteModal}
        title={`Excluir ${selectedMovie?.title}?`}
        message="Esta ação não poderá ser desfeita. Tem certeza que deseja continuar?"
        confirmText="Excluir"
        cancelText="Cancelar"
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteModal(false)}
        confirmButtonPrimary={false}
        confirmButtonSecondary={false}
        confirmButtonTertiary={false}
        className="backdrop-blur-sm"
      />
    </div>
  );
}