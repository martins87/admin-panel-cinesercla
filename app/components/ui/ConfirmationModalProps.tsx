
"use client";

import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import Typography from "./Typography";
import { ReactNode } from "react";
import Button from "./Button";

// Tipos para as props do ConfirmationModal
type ConfirmationModalProps = {
    isOpen: boolean;
    logo?: StaticImageData | string;
    title?: string | ReactNode;
    message?: string | ReactNode;
    cancelText?: string;
    confirmText?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    confirmButtonPrimary?: boolean;
    confirmButtonSecondary?: boolean;
    confirmButtonTertiary?: boolean;
    cancelButtonPrimary?: boolean;
    cancelButtonSecondary?: boolean;
    cancelButtonTertiary?: boolean;
    className?: string;
    contentClassName?: string;
    logoClassName?: string;
    buttonsContainerClassName?: string;
    hideOnOutsideClick?: boolean;
};

const ConfirmationModal = ({
    isOpen,
    logo,
    title = "Deseja mesmo exluir?",
    message = "Ao confirmar, ação não poderá ser desfeita.",
    cancelText = "CANCELAR",
    confirmText = "EXCLUIR",
    onCancel,
    onConfirm,
    confirmButtonPrimary = true,
    confirmButtonSecondary = false,
    confirmButtonTertiary = false,
    cancelButtonPrimary = false,
    cancelButtonSecondary = false,
    cancelButtonTertiary = true,
    className,
    contentClassName,
    logoClassName,
    buttonsContainerClassName,
    hideOnOutsideClick = false,
}: ConfirmationModalProps) => {
    if (!isOpen) return null;

    const handleOutsideClick = () => {
        if (hideOnOutsideClick && onCancel) {
            onCancel();
        }
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            className={twMerge(
                "fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center p-4 z-50 transition-opacity duration-200 ease-in-out",
                className
            )}
            onClick={handleOutsideClick}
        >
            <div
                className={twMerge(
                    "bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden",
                    contentClassName
                )}
                onClick={handleContentClick}
            >
                <div className="p-6 flex flex-col items-center">
                    {/* Logo (opcional) */}
                    {logo && (
                        <div className={twMerge("mb-8", logoClassName)}>
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-12 w-auto"
                                width={180}
                                height={48}
                            />
                        </div>
                    )}

                    {/* Conteúdo */}
                    {typeof title === "string" ? (
                        <Typography weight="700">
                            {title}
                        </Typography>
                    ) : (
                        title
                    )}

                    {typeof message === "string" ? (
                        <Typography className="text-gray-600 text-center mb-8">
                            {message}
                        </Typography>
                    ) : (
                        <div className="mb-8">{message}</div>
                    )}

                    {/* Botões */}
                    <div className={twMerge("flex w-full gap-4", buttonsContainerClassName)}>
                        <Button
                            label={cancelText}
                            onClick={onCancel}
                            primary={cancelButtonPrimary}
                            secondary={cancelButtonSecondary}
                            tertiary={cancelButtonTertiary}
                            full
                        />
                        <Button
                            label={confirmText}
                            onClick={onConfirm}
                            primary={confirmButtonPrimary}
                            secondary={confirmButtonSecondary}
                            tertiary={confirmButtonTertiary}
                            full
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;