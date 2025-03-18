// import { Calendar, Home, Inbox } from "lucide-react";

import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import cadastro from "@/app/assets/icons/cadastro.svg";
import dashboard from "@/app/assets/icons/dashboard.svg";
import settings from "@/app/assets/icons/settings.svg";
import Typography from "./ui/Typography";

// Menu items.
const items = [
  {
    title: "DASHBOARD",
    url: "#",
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
      <SidebarContent className="bg-background-sidebar">
        <SidebarGroup>
          <SidebarTrigger className="" />
        </SidebarGroup>
        <SidebarGroup className="">
          <SidebarGroupLabel>
            <Typography className="text-sm text-neutral/90" weight="500">
              ADMINISTRATIVO
            </Typography>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="">
                  <SidebarMenuButton asChild className="">
                    <a href={item.url}>
                      <Image src={item.icon} alt="sidebar icon" />
                      {/* <span>{item.title}</span> */}
                      <Typography className="text-sm text-white" weight="500">
                        {item.title}
                      </Typography>
                    </a>
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
