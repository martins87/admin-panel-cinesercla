"use client";

import { Banner } from "@/app/types/banner";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import BannerRow from "@/app/components/Banner/BannerRow";
import BannerTopActions from "@/app/components/Banner/BannerTopActions";
import { banners } from "@/app/constants/banners";

const BannersPage = () => {
  return (
    <Page
      title="Lista de Banners"
      subtitle="Visualize e gerencie todos os banners cadastrados"
      topActions={<BannerTopActions />}
    >
      <Centered direction="col" className="gap-y-4">
        {banners.map((banner: Banner, index: number) => (
          <BannerRow key={banner._id} banner={banner} index={index} />
        ))}
      </Centered>
    </Page>
  );
};

export default BannersPage;
