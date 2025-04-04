import { Faq } from "@/app/types/Faq";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("Missing API_BASE_URL in environment variables.");
}

export const getFaqList = async (): Promise<Faq[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/faq/`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FAQ list. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error retrieving faq list", error);

    return [];
  }
};

export const updateFaq = async (faq: Faq): Promise<Faq | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/faq/${faq._id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(faq),
    });

    if (!response.ok) {
      throw new Error(`Failed to update FAQ. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error updating faq", error);

    return null;
  }
};

export const createFaq = async (faq: Omit<Faq, "_id">): Promise<Faq | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/faq/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(faq),
    });

    if (!response.ok) {
      throw new Error(`Failed to create FAQ. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error creating faq", error);

    return null;
  }
};

export const deleteFaq = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/faq/${id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete FAQ. Status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.log("Error deleting faq", error);
    return false;
  }
};
