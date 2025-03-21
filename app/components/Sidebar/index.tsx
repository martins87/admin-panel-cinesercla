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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Typography from "../ui/Typography";
import logo from "@/app/assets/icons/logo.svg";
import home from "@/app/assets/icons/home.svg";
import { sidebarMenuItems } from "@/app/constants/sidebarMenuItems";

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
          <SidebarGroupContent className="mb-2">
            <SidebarMenu>
              <SidebarMenuButton>
                <Image src={home} alt="sidebar icon" />
                <Typography className="text-sm text-white" weight="500">
                  SITE PÚBLICO
                </Typography>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupLabel className="mb-2">
            <Typography className="text-sm text-neutral/95" weight="500">
              ADMINISTRATIVO
            </Typography>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mb-2">
                    <Link href={item.url}>
                      <Image src={item.icon} alt="sidebar icon" />
                      <Typography className="text-sm text-white" weight="500">
                        {item.title}
                      </Typography>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {item?.subItems?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <Link href={subItem.url}>
                          <Typography
                            className="text-sm text-white/70 tracking-wider hover:text-white transition-colors ease-in-out duration-200"
                            weight="400"
                          >
                            {subItem.title}
                          </Typography>
                        </Link>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
