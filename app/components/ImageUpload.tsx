import Image from "next/image";
import { useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import Centered from "./ui/Centered";
import Button from "./ui/Button";
import Typography from "./ui/Typography";
import ImageFallback from "./ImageFallback";
import { upload } from "@/app/constants/icons";

const ImageUpload = () => {
  const [image, setImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("reader.result", reader.result);
        setImage(reader.result as string);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  return (
    <Centered className="relative w-fit gap-y-2" direction="col">
      <div className="relative w-[360px] h-[360px] rounded-lg overflow-hidden border">
        {file ? (
          <Image
            className="object-cover"
            fill
            src={image}
            alt="Imagem do produto"
            priority
          />
        ) : (
          <ImageFallback label="Anexe uma imagem do produto" />
        )}
      </div>
      <Typography className="text-[#6C757D]" weight="500">
        TAMANHO RECOMENDADO: XXXpx
      </Typography>
      <Input
        className="hidden"
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Button
        label="ENVIAR IMAGEM"
        tertiary
        icon={upload}
        className="w-full"
        textClassname="font-medium"
        onClick={handleClick}
      />
    </Centered>
  );
};

export default ImageUpload;
