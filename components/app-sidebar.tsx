"use client"

import * as React from "react"
import {
  Bot,
  BookOpen,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Skills
const data = {
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

export function AppSidebar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Sidebar 
      className={className}
      {...props}
    >
      <SidebarHeader>
        <div className="flex h-14 items-center px-4">
          <span className="font-semibold transition-all">
            Hello !
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
