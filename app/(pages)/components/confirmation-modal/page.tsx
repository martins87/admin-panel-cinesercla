"use client";

import { useState } from "react";
import ConfirmationModal from "@/app/components/ui/ConfirmationModalProps";
import { logo } from "@/app/constants/icons";


export default function ConfirmationModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    console.log("Item excluído!");
    setIsModalOpen(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Exemplo de Modal</h1>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Abrir Modal de Exclusão
      </button>
      
      <ConfirmationModal
        isOpen={isModalOpen}
        logo={logo}
        title="Deseja mesmo exluir?"
        message="Ao confirmar, ação não poderá ser desfeita."
        cancelText="CANCELAR"
        confirmText="EXCLUIR"
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        confirmButtonPrimary={true}
        className="backdrop-blur-sm"
        hideOnOutsideClick={true}
      />
    </div>
  );
}