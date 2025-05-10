"use client"

import { useState } from "react"
import ImageSelectionModal from "@/app/components/ModalImages"
import Button from "@/app/components/ui/Button"

export default function DemoPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Tela de Demonstração</h1>
      <Button label="Abrir Modal" primary onClick={() => setShowModal(true)}/>
      {showModal && (
        <ImageSelectionModal gridSize="compact"/>
        // <ImageSelectionModal/> comfortable por padrão 3 itens caso compact são 4 itens por linha
      )}
    </div>
  )
}