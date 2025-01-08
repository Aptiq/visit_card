"use client"

import * as React from "react"
import {
  Bot,
  BookOpen,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Joey Montani",
    email: "joey.montani@aptiq.ch",
    avatar: "/images/avatar.png",
  },
  navMain: [
    {
      title: "Dev",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "VR, AR, Games",
          url: "#",
        },
        {
          title: "Web",
          url: "#",
        },
        {
          title: "Apps",
          url: "#",
        },
        {
          title: "AI",
          url: "#",
        },
      ],
    },
    {
      title: "Design",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "3D",
          url: "#",
        },
        {
          title: "Illustrations",
          url: "#",
        },
        {
          title: "Photography",
          url: "#",
        },
      ],
    },
    {
      title: "Art",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "3D",
          url: "#",
        },
        {
          title: "AR, VR",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex h-14 items-center px-4">
          <span className="font-semibold">Hello !</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
