"use client";

import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";

import { Bomboniere } from "@/app/types/bomboniere";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";
import { arrowDown, arrowUp, edit, trash } from "@/app/constants/icons";

type BomboniereRowProps = {
  product: Bomboniere;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setToDeleteId: Dispatch<SetStateAction<string>>;
};

const BomboniereRow: FC<BomboniereRowProps> = ({
  product,
  setModalOpen,
  setToDeleteId,
}) => {
  // const router = useRouter();

  const handleEdit = () =>
    // router.push(`/cadastro/filmes/editar/${movie.tmdbId}`);
    {};

  const handleDelete = () => {
    setToDeleteId(product._id!);
    setModalOpen(true);
  };

  return (
    <Centered className="h-auto border border-[#CED4DA] rounded-lg pl-2 pr-4 py-2 gap-x-10">
      <div className="relative w-64 aspect-square">
        <Image
          className="rounded-sm"
          fill
          src={`/api/files/${product.imageFileId}`}
          alt=""
        />
      </div>
      <Centered direction="col" items="start" justify="between">
        <Typography className="text-lg text-[#212529]" weight="500">
          {product.nome}
        </Typography>
        <Typography className="text-base text-[#767676]">
          {product.categoria}
        </Typography>
        <Typography className="text-base text-[#343A40]">
          {product.preco}
        </Typography>
      </Centered>
      <Centered className="gap-y-2" direction="col">
        <Centered className="flex-1 ml-auto gap-x-2" justify="end">
          <IconButton tertiary icon={arrowDown} disabled />
          <IconButton tertiary icon={arrowUp} disabled />
          <IconButton tertiary icon={edit} onClick={handleEdit} disabled />
          <IconButton tertiary icon={trash} onClick={handleDelete} />
        </Centered>
        <Button
          className="w-[184px] ml-auto"
          label="Ocultar"
          secondary
          disabled
        />
      </Centered>
    </Centered>
  );
};

export default BomboniereRow;
