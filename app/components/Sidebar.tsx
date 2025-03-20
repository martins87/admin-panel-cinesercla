// import { Calendar, Home, Inbox } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import logo from "@/app/assets/icons/logo.svg";
import home from "@/app/assets/icons/home.svg";
import cadastro from "@/app/assets/icons/cadastro.svg";
import dashboard from "@/app/assets/icons/dashboard.svg";
import settings from "@/app/assets/icons/settings.svg";
import Typography from "./ui/Typography";

// Menu items.
const items = [
  {
    title: "DASHBOARD",
    url: "/dashboard",
    icon: dashboard,
  },
  {
    title: "CADASTRO",
    url: "#",
    icon: cadastro,
  },
  {
    title: "OPERAÇÕES",
    url: "#",
    icon: settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-background-sidebar">
        <SidebarTrigger />
        <SidebarGroup>
          <SidebarGroupContent className="flex items-center justify-center">
            <Link href="/">
              <Image src={logo} alt="cinesercla logo" />
            </Link>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent className="bg-background-sidebar">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton>
                <Image src={home} alt="sidebar icon" />
                <Typography className="text-sm text-white" weight="500">
                  SITE PÚBLICO
                </Typography>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>
            <Typography className="text-sm text-neutral/90" weight="500">
              ADMINISTRATIVO
            </Typography>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <Image src={item.icon} alt="sidebar icon" />
                      {/* <span>{item.title}</span> */}
                      <Typography className="text-sm text-white" weight="500">
                        {item.title}
                      </Typography>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
