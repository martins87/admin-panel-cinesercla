"use client";

import { Banner } from "@/app/types/banner";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import BannerRow from "@/app/components/Banner/BannerRow";
import BannerTopActions from "@/app/components/Banner/BannerTopActions";
import { useBanner } from "@/app/hooks/useBanner";
import Loading from "@/app/components/Loading";
import Typography from "@/app/components/ui/Typography";

const BannersPage = () => {
  const { data: bannerList, isFetching } = useBanner();
  console.log("banner list", bannerList);

  return (
    <Page
      title="Lista de Banners"
      subtitle="Visualize e gerencie todos os banners cadastrados"
      topActions={<BannerTopActions />}
    >
      {isFetching ? (
        <Loading />
      ) : bannerList ? (
        <Centered direction="col" className="gap-y-4">
          {bannerList.map((banner: Banner, index: number) => (
            <BannerRow key={banner._id} banner={banner} index={index} />
          ))}
        </Centered>
      ) : (
        <Typography className="text-xl">Nenhum banner cadastrado.</Typography>
      )}
    </Page>
  );
};

export default BannersPage;
