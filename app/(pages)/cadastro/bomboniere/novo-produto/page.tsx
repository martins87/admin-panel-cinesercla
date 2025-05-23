"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Bomboniere } from "@/app/types/bomboniere";
import { createProduct } from "@/app/services/bomboniere";
import Switch from "@/components/ui/switch";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Input from "@/app/components/ui/Input";
import InputWrapper from "@/app/components/InputWrapper";
import ComboBox from "@/app/components/ui/ComboBox";
import ImageUpload from "@/app/components/ImageUpload";
import { useProductStore } from "@/app/store/product";
import PageBottomActionButtons from "@/app/components/PageBottomActionButtons";

const categoriaList = [
  { value: "pipocas", label: "Pipocas" },
  { value: "bebidas", label: "Bebidas" },
  { value: "doces", label: "Doces" },
  { value: "combos", label: "Combos" },
];

const NovoProdutoPage = () => {
  const router = useRouter();
  const { addProduct } = useProductStore();
  const [ativo, setAtivo] = useState<boolean>(true);
  const [categoria, setCategoria] = useState<string | boolean>("pipocas");
  const [nome, setNome] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [ordem, setOrdem] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleVoltar = () => router.push("/cadastro/bomboniere");

  const handleSalvar = async (sair?: boolean) => {
    let imageFileId: string;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || "Failed to upload image. Please try again."
          );
        }

        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        // TODO add a toast here
        alert(`Imagem enviada com sucesso: ${data.fileId}`);
        imageFileId = data.fileId;
      } catch (error) {
        console.error("Error uploading image:", error);
        alert(
          `Erro ao enviar a imagem: ${
            error instanceof Error ? error.message : "Erro desconhecido"
          }`
        );
        return;
      }

      try {
        const newProduct: Bomboniere = {
          categoria: String(categoria),
          nome,
          preco,
          imageFileId,
        };

        const createdProduct = await createProduct(newProduct);

        if (createdProduct) {
          addProduct(createdProduct);
          console.log("Product created successfully:", createdProduct);
          if (sair) router.push("/cadastro/bomboniere");
        } else {
          console.error("Failed to create product.");
        }
      } catch (error) {
        console.error("Error creating product:", error);
      }
    }
  };

  return (
    <Page
      title="Novo Produto"
      subtitle="Registre um novo item para a bomboniere com todas as especificações"
      backArrow
      rightColumn={
        <ImageUpload
          description="Anexe uma imagem do produto"
          file={file}
          setFile={setFile}
        />
      }
    >
      <Centered className="gap-x-2" items="center" justify="start">
        <Typography weight="500">Ativo</Typography>
        <Switch value={ativo} setValue={setAtivo} />
      </Centered>
      <InputWrapper label="Selecione uma categoria" obrigatoria>
        <ComboBox
          label="Selecione"
          list={categoriaList}
          value={categoria}
          setValue={setCategoria}
        />
      </InputWrapper>
      <InputWrapper label="Nome do produto" obrigatoria>
        <Input placeholder="Nome" value={nome} setValue={setNome} />
      </InputWrapper>
      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Preço do produto">
          <Input placeholder="R$" value={preco} setValue={setPreco} />
        </InputWrapper>
        <InputWrapper label="Ordem">
          <Input placeholder="1" value={ordem} setValue={setOrdem} />
        </InputWrapper>
      </Centered>
      <PageBottomActionButtons
        onConfirmFn={handleSalvar}
        onBackFn={handleVoltar}
        saveBtnDisabled={false}
        saveAndReturnBtnDisabled={false}
      />
    </Page>
  );
};

export default NovoProdutoPage;
