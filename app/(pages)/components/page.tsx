import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Link from "next/link";

const componentsList = [
  {
    label: "Button",
    path: "/components/button",
  },
  {
    label: "IconButton",
    path: "/components/icon-button",
  },
  {
    label: "Switch",
    path: "/components/switch",
  },
  {
    label: "ModalImage",
    path: "/components/modal-images",
  },
];

const ComponentsPage = () => {
  return (
    <Page title="Components">
      <Centered className="gap-y-2" direction="col" items="start">
        {componentsList.map((component) => (
          <Link key={component.path} href={component.path}>
            <Typography className="text-xl text-[#0057FC] hover:underline">
              {component.label}
            </Typography>
          </Link>
        ))}
      </Centered>
    </Page>
  );
};

export default ComponentsPage;
