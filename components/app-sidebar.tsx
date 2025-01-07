"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
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
    avatar: "/images/Avatar.png",
  },
  teams: [
    {
      name: "Aptiq",
      logo: GalleryVerticalEnd,
      plan: "Design3D",
    },
    {
      name: "Weblaw",
      logo: AudioWaveform,
      plan: "LegalTech",
    },
    {
      name: "Joenvyme",
      logo: Command,
      plan: "Dev",
    },
  ],
  navMain: [
    {
      title: "Dev",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
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
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
