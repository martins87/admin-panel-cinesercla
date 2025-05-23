"use client";

import { FC, useState } from "react";
import AlertModal from "./AlertModal";
import Centered from "./ui/Centered";
import Button from "./ui/Button";

type PageBottomActionButtonsProps = {
  onConfirmFn: (sair?: boolean) => void;
  onBackFn: () => void;
  saveBtnDisabled?: boolean;
  saveAndReturnBtnDisabled?: boolean;
};

const PageBottomActionButtons: FC<PageBottomActionButtonsProps> = ({
  onConfirmFn,
  onBackFn,
  saveBtnDisabled,
  saveAndReturnBtnDisabled,
}) => {
  const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false);
  const [salvarESairModalOpen, setSalvarESairModalOpen] =
    useState<boolean>(false);

  return (
    <>
      <Centered className="gap-x-2" justify="end">
        <Button
          label="SALVAR"
          primary
          onClick={() => setSalvarModalOpen(true)}
          disabled={saveBtnDisabled}
        />
        <Button
          label="SALVAR E SAIR"
          secondary
          onClick={() => setSalvarESairModalOpen(true)}
          disabled={saveAndReturnBtnDisabled}
        />
        <Button label="CANCELAR" secondary onClick={onBackFn} />
      </Centered>
      <AlertModal
        isOpen={salvarModalOpen}
        title="Deseja salvar?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR"
        onCancel={() => setSalvarModalOpen(false)}
        onConfirm={() => onConfirmFn(false)}
        hideOnOutsideClick
      />
      <AlertModal
        isOpen={salvarESairModalOpen}
        title="Deseja salvar e sair?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR E SAIR"
        onCancel={() => setSalvarESairModalOpen(false)}
        onConfirm={() => onConfirmFn(true)}
        hideOnOutsideClick
      />
    </>
  );
};

export default PageBottomActionButtons;
