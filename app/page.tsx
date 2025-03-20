import Centered from "./components/ui/Centered";
import Typography from "./components/ui/Typography";

export default function Home() {
  return (
    <Centered direction="col" items="start">
      <Typography className="text-4xl">Neue Montreal</Typography>
      <Typography className="text-4xl" font="proxima-nova">
        Proxima Nova
      </Typography>
    </Centered>
  );
}
