import { Dispatch, FC, SetStateAction } from "react";
import ImageUpload from "../ImageUpload";
import Centered from "../ui/Centered";
import ImageFallback from "../ImageFallback";

type BannerImageUploadProps = {
  pagina: string | boolean;
  secao: string | boolean;
  img1: File | null;
  setImg1: Dispatch<SetStateAction<File | null>>;
  img2: File | null;
  setImg2: Dispatch<SetStateAction<File | null>>;
  img3: File | null;
  setImg3: Dispatch<SetStateAction<File | null>>;
};

const BannerImageUpload: FC<BannerImageUploadProps> = ({
  pagina,
  secao,
  img1,
  setImg1,
  img2,
  setImg2,
  img3,
  setImg3,
}) => {
  return (
    <>
      {pagina && secao ? (
        <Centered className="w-fit gap-y-4" direction="col">
          <ImageUpload
            description="Selecione uma página e seção para ver a prévia"
            file={img1}
            setFile={setImg1}
          />
          <ImageUpload
            description="Envie uma imagem para exibir no carrossel"
            file={img2}
            setFile={setImg2}
          />
          <ImageUpload
            description="Envie uma imagem para exibir em celulares"
            file={img3}
            setFile={setImg3}
          />
        </Centered>
      ) : (
        <ImageFallback description="Selecione uma página e seção para ver a prévia" />
      )}
    </>
  );
};

export default BannerImageUpload;
