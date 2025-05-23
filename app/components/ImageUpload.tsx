import Image from "next/image";
import { FC, useRef, useState } from "react";

import Centered from "./ui/Centered";
import Button from "./ui/Button";
import Typography from "./ui/Typography";
import ImageFallback from "./ImageFallback";
import { upload } from "@/app/constants/icons";

type ImageUploadProps = {
  description: string;
  file: File | null;
  setFile: (file: File | null) => void;
};

const ImageUpload: FC<ImageUploadProps> = ({ description, file, setFile }) => {
  const [image, setImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      reader.onloadend = () => setImage(reader.result as string);
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
          <ImageFallback description={description} />
        )}
      </div>
      <Typography className="text-[#6C757D]" weight="500">
        TAMANHO RECOMENDADO: XXXpx
      </Typography>
      <input
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
