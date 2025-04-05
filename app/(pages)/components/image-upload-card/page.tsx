import ImageUploadCard from "@/app/components/ui/ImageUploadCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <ImageUploadCard
        title="Institucional"
        subtitle="Saiba por que somos referência em cinemas no Brasil."
        label="CARREGAR CAPA"
        description="Imagem da capa do filme (362px)"
      // placeholderUrl="/images/default-cover.png" 
      // onImageSelected={(base64) => console.log("Base64:", base64)}
      />
    </main>
  )
}