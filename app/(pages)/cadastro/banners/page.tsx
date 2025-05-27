"use client";

import { Banner } from "@/app/types/banner";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import BannerRow from "@/app/components/Banner/BannerRow";
import BannerTopActions from "@/app/components/Banner/BannerTopActions";
import { useBanner } from "@/app/hooks/useBanner";

const BannersPage = () => {
  const { data: bannerList } = useBanner();
  console.log("banner list", bannerList);

  return (
    <Page
      title="Lista de Banners"
      subtitle="Visualize e gerencie todos os banners cadastrados"
      topActions={<BannerTopActions />}
    >
      {bannerList ? (
        <Centered direction="col" className="gap-y-4">
          {bannerList.map((banner: Banner, index: number) => (
            <BannerRow key={banner._id} banner={banner} index={index} />
          ))}
        </Centered>
      ) : null}
    </Page>
  );
};

export default BannersPage;
