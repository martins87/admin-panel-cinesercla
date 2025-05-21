"use client";

import { useEffect, useState } from "react";

import { GridFSFile } from "@/app/types/gridfsFile";
import Image from "next/image";

export default function GalleryPage() {
  const [files, setFiles] = useState<GridFSFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch("/api/files");
        const data = await res.json();
        console.log("data", data);
        setFiles(data);
      } catch (err) {
        console.error("Failed to load files", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Galeria de Arquivos</h1>
      {loading && <p>Carregando...</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {files.map((file, index: number) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md relative w-full h-60"
          >
            <Image
              src={`/api/files/${file._id}`}
              alt={file.filename}
              className="object-cover"
              fill
            />
            <div className="absolute w-full bottom-0 p-2 text-sm text-center truncate z-20 bg-white">
              {file.filename}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
