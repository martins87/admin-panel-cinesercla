"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { upload } from "@/app/constants/icons"
import { header } from "@/app/constants/icons"
import Image from "next/image";


import Button from "./Button"

type ImageUploadCardProps = {
  placeholderUrl?: string
  label?: string
  description?: string
  onImageSelected?: (base64: string) => void
  title?: string
  subtitle?: string
}

export default function ImageUploadCard({
  placeholderUrl = "https://placehold.co/362x162/",
  label = "NOVO FILME",
  description = "TAMANHO RECOMENDADO: 362px",
  onImageSelected,
  title,
  subtitle,
}: ImageUploadCardProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const base64 = await toBase64(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
      onImageSelected?.(base64 as string)
    }
  }

  const toBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Card className="w-full max-w-md border border-gray-200 rounded-lg overflow-hidden p-0 pb-5">
      <div className="relative bg-gray-100 cursor-pointer" onClick={handleImageClick}>
        <Image
          src={previewUrl || placeholderUrl}
          alt="Preview da imagem carregada"
          width={500}
          height={300} 
          className="w-full h-full object-cover"
        />
        {/* TODO: Ver a melhor forma de fazer adicionar o header */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          <Image src={header} alt="button icon" width={435} />
          {/* Largura fixa */}
        </div>
        {(title || subtitle) && (
          <div className="absolute bottom-0 left-0 w-full px-10 py-3">
            {title && <h5 className="text-base font-bold">{title}</h5>}
            {subtitle && <p className="text-[6px]">{subtitle}</p>}

          </div>
        )}
      </div>
      <CardContent>
        <p className="text-center text-gray-700 font-medium mb-2">{description}</p>
        <Button label={label} tertiary full icon={upload} onClick={handleImageClick} />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </CardContent>
    </Card>
  )
}
