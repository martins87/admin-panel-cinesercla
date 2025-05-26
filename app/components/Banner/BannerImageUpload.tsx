import { Dispatch, FC, SetStateAction } from "react";
import ImageUpload from "../ImageUpload";
import Centered from "../ui/Centered";

type BannerImageUploadProps = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  imgCarousel: File | null;
  setImgCarousel: Dispatch<SetStateAction<File | null>>;
  imgMobile: File | null;
  setImgMobile: Dispatch<SetStateAction<File | null>>;
};

const BannerImageUpload: FC<BannerImageUploadProps> = ({
  file,
  setFile,
  imgCarousel,
  setImgCarousel,
  imgMobile,
  setImgMobile,
}) => {
  return (
    <Centered className="w-fit gap-y-4" direction="col">
      <ImageUpload
        description="Selecione uma página e seção para ver a prévia"
        file={file}
        setFile={setFile}
      />
      <ImageUpload
        description="Envie uma imagem para exibir no carrossel"
        file={imgCarousel}
        setFile={setImgCarousel}
      />
      <ImageUpload
        description="Envie uma imagem para exibir em celulares"
        file={imgMobile}
        setFile={setImgMobile}
      />
    </Centered>
  );
};

export default BannerImageUpload;
