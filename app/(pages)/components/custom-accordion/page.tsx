"use client";

import { CustomAccordion } from "@/app/components/ui/CustomAcordion"


function StateContent({ stateName }: { stateName: string }) {
  return (
    <div className="p-4 bg-white rounded-md">
      <h3 className="font-medium mb-2">Detalhes de {stateName}</h3>
      <p>Este é um componente React personalizado que exibe informações sobre {stateName}.</p>
      <ul className="list-disc pl-5 mt-2">
        <li>Item de exemplo 1</li>
        <li>Item de exemplo 2</li>
      </ul>
    </div>
  )
}

export default function Home() {
  const states = [
    {
      name: "Paraíba",
      count: 2,
      content: <StateContent stateName="Paraíba" />,
    },
    {
      name: "Rio de Janeiro",
      count: 2,
      content: <StateContent stateName="Rio de Janeiro" />,
    },
    {
      name: "São Paulo",
      count: 1,
      content: <StateContent stateName="São Paulo" />,
    },
    {
      name: "Sergipe",
      count: 2,
      content: <StateContent stateName="Sergipe" />,
    },
  ]

  return (
    <main className="max-w-3xl mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Lista de Unidades</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <CustomAccordion states={states} />
      </div>
    </main>
  )
}