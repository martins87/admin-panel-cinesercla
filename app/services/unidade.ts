import { Unidade } from "@/app/types/unidade";

export const getUnidadeList = async (): Promise<Unidade[]> => {
  try {
    const response = await fetch("/api/unidade/", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch unidade list. Status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.log("Error retrieving unidade list", error);

    return [];
  }
};

export const createUnidade = async (Unidade: Unidade) => {
  try {
    const response = await fetch("/api/unidade/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Unidade),
    });

    if (!response.ok) {
      throw new Error(`Failed to create unidade. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error creating unidade", error);

    return null;
  }
};

// export const editUnidade = async (Unidade: Unidade): Promise<Unidade | null> => {
//   try {
//     const response = await fetch(`/api/Unidades/${Unidade.tmdbId}`, {
//       method: "PUT",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(Unidade),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to edit Unidade. Status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.log("Error editing Unidade", error);

//     return null;
//   }
// };

export const deleteUnidade = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`/api/unidade/${id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete unidade. Status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.log("Error deleting unidade", error);
    return false;
  }
};
