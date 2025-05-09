"use client"

import { useEffect, useState } from "react"

export default function GalleryPage() {
  const [files, setFiles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch("/api/files")
        const data = await res.json()
        setFiles(data)
      } catch (err) {
        console.error("Failed to load files", err)
      } finally {
        setLoading(false)
      }
    }

    fetchFiles()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Galeria de Arquivos</h1>
      {loading && <p>Carregando...</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {files.map((file) => (
          <div key={file.id} className="border rounded-lg overflow-hidden shadow-md">
            <img
              src={`/api/files/${file.id}`}
              alt={file.filename}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-sm text-center truncate">{file.filename}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
