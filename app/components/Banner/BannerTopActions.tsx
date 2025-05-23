import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Centered from "../ui/Centered";

const BannerTopActions = () => {
  const router = useRouter();

  const handleNovoBanner = () => router.push("/cadastro/banners/novo");

  return (
    <Centered justify="start">
      <Button label="NOVO BANNER" primary onClick={handleNovoBanner} />
    </Centered>
  );
};

export default BannerTopActions;
