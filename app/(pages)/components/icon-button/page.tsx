"use client";

import { FC } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import ComponentSample from "@/app/components/ui/ComponentSample";
import IconButton from "@/app/components/ui/IconButton";
import { edit } from "@/app/constants/icons";

const SizeGroup: FC<{
  label: string;
  icon: StaticImport;
  variant: "primary" | "secondary" | "tertiary";
}> = ({ label, icon, variant }) => {
  const variantProps = {
    primary: variant === "primary",
    secondary: variant === "secondary",
    tertiary: variant === "tertiary",
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm text-gray-700 font-semibold">{label}</h3>
      <div className="flex gap-4 justify-center flex-wrap">
        <IconButton icon={icon} size="sm" tooltip="Small" {...variantProps} />
        <IconButton icon={icon} size="md" tooltip="Medium" {...variantProps} />
        <IconButton icon={icon} size="lg" tooltip="Large" {...variantProps} />
      </div>
    </div>
  );
};

const IconButtonPage = () => {
  return (
    <Page title="Icon Button">
      <Centered className="gap-y-8" direction="col" items="start">
        {/* Estilos básicos */}
        <div className="w-full">
          <h2 className="text-lg font-bold mb-4">Variantes Básicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ComponentSample label="Primary">
              <div className="flex gap-4 justify-center flex-wrap">
                <IconButton icon={edit} primary tooltip="Adicionar" />
                <IconButton icon={edit} primary tooltip="Editar" />
                <IconButton icon={edit} primary tooltip="Excluir" />
              </div>
            </ComponentSample>

            <ComponentSample label="Secondary">
              <div className="flex gap-4 justify-center flex-wrap">
                <IconButton icon={edit} secondary tooltip="Buscar" />
                <IconButton icon={edit} secondary tooltip="Download" />
                <IconButton icon={edit} secondary tooltip="Configurações" />
              </div>
            </ComponentSample>

            <ComponentSample label="Tertiary">
              <div className="flex gap-4 justify-center flex-wrap">
                <IconButton icon={edit} tertiary tooltip="Menu" />
                <IconButton icon={edit} tertiary tooltip="Compartilhar" />
                <IconButton icon={edit} tertiary tooltip="Favorito" />
              </div>
            </ComponentSample>
          </div>
        </div>

        {/* Botões com diferentes tamanhos */}
        <div className="w-full">
          <h2 className="text-lg font-bold mb-4">Tamanhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SizeGroup label="Primary" icon={edit} variant="primary" />
            <SizeGroup label="Secondary" icon={edit} variant="secondary" />
            <SizeGroup label="Tertiary" icon={edit} variant="tertiary" />
          </div>
        </div>

        {/* Botões arredondados */}
        <div className="w-full">
          <h2 className="text-lg font-bold mb-4">Botões Arredondados</h2>
          <ComponentSample label="Formato circular">
            <div className="flex gap-4 justify-center flex-wrap">
              <IconButton icon={edit} primary rounded tooltip="Adicionar" />
              <IconButton icon={edit} secondary rounded tooltip="Editar" />
              <IconButton icon={edit} tertiary rounded tooltip="Excluir" />
            </div>
          </ComponentSample>
        </div>

        {/* Estados */}
        <div className="w-full">
          <h2 className="text-lg font-bold mb-4">Estados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentSample label="Disabled">
              <div className="flex gap-4 justify-center flex-wrap">
                <IconButton
                  icon={edit}
                  primary
                  disabled
                  tooltip="Adicionar (desabilitado)"
                />
                <IconButton
                  icon={edit}
                  secondary
                  disabled
                  tooltip="Editar (desabilitado)"
                />
                <IconButton
                  icon={edit}
                  tertiary
                  disabled
                  tooltip="Excluir (desabilitado)"
                />
              </div>
            </ComponentSample>
          </div>
        </div>
      </Centered>
    </Page>
  );
};

export default IconButtonPage;
