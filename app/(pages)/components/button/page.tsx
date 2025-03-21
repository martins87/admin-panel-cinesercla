import Page from "@/app/components/ui/Page";
import Button from "@/app/components/ui/Button";
import Centered from "@/app/components/ui/Centered";
import ComponentSample from "@/app/components/ui/ComponentSample";
import { plus } from "@/app/constants/icons";

const ButtonPage = () => {
  return (
    <Page title="Button">
      <Centered className="gap-y-2" direction="col" items="start">
        <ComponentSample label="Primary">
          <Button label="NOVO FILME" primary />
        </ComponentSample>
        <ComponentSample label="Primary with icon">
          <Button label="NOVO FILME" primary icon={plus} />
        </ComponentSample>
        <ComponentSample label="Primary full width">
          <Button label="NOVO FILME" primary full />
        </ComponentSample>
        <ComponentSample label="Secondary">
          <Button label="IMPORTAR PROGRAMAÇÃO" secondary />
        </ComponentSample>
        <ComponentSample label="Tertiary">
          <Button label="Ocultar" tertiary />
        </ComponentSample>
        <ComponentSample label="Disabled">
          <Button label="Ocultar" primary disabled />
        </ComponentSample>
      </Centered>
    </Page>
  );
};

export default ButtonPage;
