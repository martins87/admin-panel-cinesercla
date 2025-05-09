"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Upload, FileUp, CheckCircle, AlertCircle } from "lucide-react"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [uploadResult, setUploadResult] = useState<{
    success: boolean
    fileId?: string
    filename?: string
    error?: string
  } | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setUploadResult(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setProgress(0)
    setUploadResult(null)

    const formData = new FormData()
    formData.append("file", file)

    try {
      // Simular progresso de upload (na vida real, você usaria XMLHttpRequest com eventos de progresso)
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 5, 95)
          return newProgress
        })
      }, 200)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)
      setProgress(100)

      const result = await response.json()
      setUploadResult(result)
    } catch (error) {
      setUploadResult({
        success: false,
        error: "Falha ao fazer upload do arquivo",
      })
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload de Arquivos com GridFS
          </CardTitle>
          <CardDescription>Faça upload de arquivos grandes para o MongoDB Atlas usando GridFS</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Input type="file" id="file-upload" className="hidden" onChange={handleFileChange} disabled={uploading} />
            <label htmlFor="file-upload" className="flex flex-col items-center justify-center cursor-pointer">
              <FileUp className="h-10 w-10 text-gray-400 mb-2" />
              <span className="text-sm font-medium">{file ? file.name : "Clique para selecionar um arquivo"}</span>
              {file && <span className="text-xs text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</span>}
            </label>
          </div>

          {uploading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-center text-gray-500">Enviando arquivo... {progress}%</p>
            </div>
          )}

          {uploadResult && (
            <div
              className={`p-3 rounded-md ${
                uploadResult.success
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              <div className="flex items-start">
                {uploadResult.success ? (
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                )}
                <div>
                  <p className="text-sm font-medium">{uploadResult.success ? "Upload concluído!" : "Erro no upload"}</p>
                  {uploadResult.success ? (
                    <div className="mt-1 text-xs">
                      <p>Nome: {uploadResult.filename}</p>
                    </div>
                  ) : (
                    <p className="text-xs mt-1">{uploadResult.error}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleUpload} disabled={!file || uploading} className="w-full">
            {uploading ? "Enviando..." : "Fazer Upload"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}