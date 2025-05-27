import { Banner } from "../types/banner";

export const getBannerList = async (): Promise<Banner[]> => {
  try {
    const response = await fetch("/api/banner/", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch banner list. Status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.log("Error retrieving banner list", error);

    return [];
  }
};

export const createBanner = async (banner: Banner) => {
  try {
    const response = await fetch("/api/banner/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(banner),
    });

    if (!response.ok) {
      throw new Error(`Failed to create banner. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error creating banner", error);

    return null;
  }
};

// TODO edit banner

export const deleteBanner = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`/api/banner/${id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete banner. Status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.log("Error deleting banner", error);
    return false;
  }
};
