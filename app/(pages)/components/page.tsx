import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Link from "next/link";

const ComponentsPage = () => {
  return (
    <Page title="Components">
      <Centered className="gap-y-2" direction="col" items="start">
        <Link href="/components/button">
          <Typography className="text-xl text-[#0057FC] hover:underline">
            Button
          </Typography>
        </Link>
        <Link href="/components/icon-button">
          <Typography className="text-xl text-[#0057FC] hover:underline">
            IconButtonProps 
          </Typography>
        </Link>
        <Link href="/components/confirmation-modal">
          <Typography className="text-xl text-[#0057FC] hover:underline">
            ConfirmationModalProps 
          </Typography>
        </Link>
        <Link href="/components/search-bar">
          <Typography className="text-xl text-[#0057FC] hover:underline">
            SearchBar 
          </Typography>
        </Link>
        <Link href="/components/data-table">
          <Typography className="text-xl text-[#0057FC] hover:underline">
            DataTable
          </Typography>
        </Link>
      </Centered>
    </Page>
  );
};

export default ComponentsPage;
