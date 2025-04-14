import Image from "next/image";

import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import NoMovieFound from "@/app/assets/images/no-movie-found.svg";

const TMDBNoResult = () => (
  <Centered className="w-1/2 gap-y-4 my-auto mx-auto" direction="col">
    <Image src={NoMovieFound} alt="tmdb search icons" />
    <Typography
      className="w-4/5 text-2xl text-[#6C757D] text-center"
      weight="500"
    >
      Nenhum resultado encontrado
    </Typography>
    <Typography className="w-4/5 text-lg text-[#99A0A6] text-center -mt-2">
      Verifique os termos digitados e tente novamente
    </Typography>
  </Centered>
);

export default TMDBNoResult;
