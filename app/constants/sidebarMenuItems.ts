import cadastro from "@/app/assets/icons/cadastro.svg";
import dashboard from "@/app/assets/icons/dashboard.svg";
import settings from "@/app/assets/icons/settings.svg";

export const sidebarMenuItems = [
  {
    title: "DASHBOARD",
    url: "/dashboard",
    icon: dashboard,
  },
  {
    title: "CADASTRO",
    url: "#",
    icon: cadastro,
    subItems: [
      {
        title: "BANNERS",
        url: "/cadastro/banners",
      },
      {
        title: "BOMBONIERE",
        url: "/cadastro/bomboniere",
      },
      {
        title: "FILMES",
        url: "/cadastro/filmes",
      },
      {
        title: "PERGUNTAS FREQUENTES",
        url: "/cadastro/perguntas-frequentes",
      },
      {
        title: "UNIDADES",
        url: "/cadastro/unidades",
      },
      {
        title: "TRABALHE CONOSCO",
        url: "/cadastro/trabalhe-conosco",
      },
      {
        title: "LEIS",
        url: "/cadastro/leis",
      },
    ],
  },
  {
    title: "OPERAÇÕES",
    url: "#",
    icon: settings,
    subItems: [
      {
        title: "NEWSLETTER",
        url: "/operacoes/newsletter",
      },
      {
        title: "CONTATOS",
        url: "/operacoes/contatos",
      },
    ],
  },
];
