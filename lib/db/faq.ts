const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getFaqList = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/faq/`, {
      cache: "no-store",
    });

    const faqList = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch faq list");
    } else {
      console.log("Faq list retrieved successfully");

      return faqList;
    }
  } catch (error) {
    console.log("Error retrieving faq list", error);
  }
};

export const updatePergunta = async (
  id: string,
  pergunta: string,
  resposta: string,
  cadastro: string,
  cliques: string,
  ordem: string,
  categoria: string,
  principalDuvida: boolean,
  ordemPrincipalDuvida: string,
  ativa: boolean
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/faq/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id,
        pergunta,
        resposta,
        // cadastro
        // cliques,
        ordem,
        categoria,
        principalDuvida,
        ordemPrincipalDuvida,
        ativa,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update faq");
    } else {
      console.log("Faq updated successfully");
      return response.json();
    }
  } catch (error) {
    console.log("Error updating faq", error);
  }
};
