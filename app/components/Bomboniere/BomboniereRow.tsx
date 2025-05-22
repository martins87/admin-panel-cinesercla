"use client";

import { FC } from "react";
import Image from "next/image";

import { Bomboniere } from "@/app/types/bomboniere";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";
import { arrowDown, arrowUp, edit, trash } from "@/app/constants/icons";

type BomboniereRowProps = {
  product: Bomboniere;
};

const BomboniereRow: FC<BomboniereRowProps> = ({
  product,
  // setModalOpen,
  // setToDeleteId,
}) => {
  // const router = useRouter();

  const handleEdit = () =>
    // router.push(`/cadastro/filmes/editar/${movie.tmdbId}`);
    {};

  const handleDelete = () => {
    // setToDeleteId(movie._id!);
    // setModalOpen(true);
  };

  return (
    <Centered className="h-auto border border-[#CED4DA] rounded-lg pl-2 pr-4 py-2 gap-x-10">
      <Image
        width={94}
        height={140}
        className="rounded-sm"
        src={`/api/files/${product.imageFileId}`}
        alt=""
      />
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
          <IconButton tertiary icon={arrowDown} />
          <IconButton tertiary icon={arrowUp} />
          <IconButton tertiary icon={edit} onClick={handleEdit} />
          <IconButton tertiary icon={trash} onClick={handleDelete} />
        </Centered>
        <Button className="w-[184px] ml-auto" label="Ocultar" secondary />
      </Centered>
    </Centered>
  );
};

export default BomboniereRow;
