import Image from "next/image";

import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import TMDBSearchIcons from "@/app/assets/images/tmdb-search-icons.png";

const TMDBResultPlaceholder = () => (
  <Centered className="w-1/2 gap-y-4 my-auto mx-auto" direction="col">
    <Image src={TMDBSearchIcons} alt="tmdb search icons" />
    <Typography
      className="w-4/5 text-2xl text-[#6C757D] text-center"
      weight="500"
    >
      Digite o nome do filme e selecione uma opção da lista.
    </Typography>
  </Centered>
);

export default TMDBResultPlaceholder;
