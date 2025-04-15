"use client"

import { useState } from "react"
import { X, Check } from "lucide-react"
import Button from "./ui/Button"
import IconButton from "./ui/IconButton"
import { close } from "@/app/constants/icons";


type GridSize = "comfortable" | "compact"

interface ImageSelectionModalProps {
  gridSize?: GridSize
  onClose?: () => void
}

export default function ImageSelectionModal({
  gridSize = "comfortable",
  onClose,
}: ImageSelectionModalProps) {
  const [open, setOpen] = useState(true)
  const [selectedImage, setSelectedImage] = useState(4)

  const images = Array(13).fill("image")

  const getGridColumns = () => {
    switch (gridSize) {
      case "compact":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      case "comfortable":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      default:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    }
  }

  const handleClose = () => {
    setOpen(false)
    if (onClose) onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-slate-100 rounded-xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-lg overflow-hidden">

        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-2xl font-bold text-gray-800">Escolha uma nova imagem da lista</h2>
          <IconButton icon={close} tertiary onClick={() => handleClose()} />
        </div>

        <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className={`grid gap-4 ${getGridColumns()}`}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden cursor-pointer border-4 ${selectedImage === index ? "border-blue-600" : "border-transparent"
                  }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md"
                />
                {selectedImage === index && (
                  <div className="absolute top-2 right-2 bg-blue-600 rounded-full p-1 shadow-md">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t">
          <p className="text-gray-600 text-sm">{images.length} resultados encontrados</p>
          <Button label="SELECIONAR IMAGEM" primary />
        </div>
      </div>
    </div>
  )
}
