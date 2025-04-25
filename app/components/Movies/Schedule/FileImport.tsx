"use client";

import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import Papa from "papaparse";

import { Schedule } from "@/app/types/schedule";
import { createSchedule } from "@/app/services/schedule";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import IconButton from "@/app/components/ui/IconButton";
import Button from "@/app/components/ui/Button";
import { close, uploadWhite } from "@/app/constants/icons";

type FileImportProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const FileImport: FC<FileImportProps> = ({ setOpen }) => {
  const router = useRouter();
  const [csvData, setCsvData] = useState<Schedule[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClose = () => setOpen(false);

  const handleFileUpload = () => fileInputRef.current?.click();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: false,
      skipEmptyLines: true,
      complete: (results) => setCsvData(results.data as Schedule[]),
    });
  };

  useEffect(() => {
    if (csvData.length > 0) {
      createSchedule(csvData)
        .then((response) => {
          if (response) {
            setOpen(false);
            router.push("/cadastro/filmes/programacao");
          } else {
            console.error("Failed to create schedule");
            // TODO add error handling
          }
        })
        .catch((err) => {
          console.error("Error importing schedule:", err);
        });
    }
  }, [csvData, router, setOpen]);

  return (
    <Centered
      className="h-full gap-y-4"
      direction="col"
      items="start"
      justify="start"
    >
      <Centered items="start" justify="between" className="my-4">
        <Typography weight="700" className="text-3xl">
          Importar Programação Via CSV
        </Typography>
        <IconButton icon={close} tertiary onClick={handleClose} />
      </Centered>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileChange}
      />
      <Button
        label="ENVIAR ARQUIVO"
        className="mx-auto my-auto min-h-12"
        primary
        icon={uploadWhite}
        onClick={handleFileUpload}
      />
    </Centered>
  );
};

export default FileImport;
