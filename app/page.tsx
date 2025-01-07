"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Palette, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

// Ajout d'un tableau d'objets pour les projets
const projects = [
  {
    image: "/images/projet_rolex.gif",
    title: "Rolex",
    description: "3D animation"
  },
  {
    image: "/images/projet_karun.gif",
    title: "Karun",
    description: "3D for Artist"
  },
  {
    image: "/images/projet_afs.jpg",
    title: "Swituerland Federal archives",
    description: "3D twin of Switzerland Federal Archives"
  },
  {
    image: "/images/projet_vrafs.jpg",
    title: "Switzerland Federal archives",
    description: "VR Experience for Switzerland Federal Archives"
  },
  {
    image: "/images/projet_tedx.jpg",
    title: "TedX",
    description: "Workshop VR & AR"
  }
];

export default function Page() {
  const [isClient, setIsClient] = useState(false)
  
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    slidesToScroll: 1,
    breakpoints: {
      '(max-width: 640px)': {
        slidesToScroll: 1,
        containScroll: 'keepSnaps'
      },
      '(min-width: 641px)': {
        slidesToScroll: 2,
        containScroll: 'trimSnaps'
      },
      '(min-width: 1024px)': {
        slidesToScroll: 3,
        containScroll: 'trimSnaps'
      }
    }
  }, [
    Autoplay({
      delay: 4000,
      stopOnInteraction: true
    })
  ])

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // ou un placeholder
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center justify-between px-8 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 px-8 py-4">
          <section className="min-h-fit rounded-xl bg-muted/50 p-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                <Avatar className="h-16 w-16">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/Avatar.gif"
                      alt="Avatar animé"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold md:text-2xl">Joey Montani</h1>
                  <p className="text-muted-foreground">Creative Developer & Designer</p>
                </div>
              </div>
              <div className="space-y-8">
                <p className="text-lg font-bold md:text-xl flex flex-col gap-4">
                  <span>Hi, I&apos;m Joey 👋</span>
                  <span>
                    I create <Badge className="rounded-md font-normal bg-muted text-muted-foreground text-base inline-flex items-center gap-1 font-mono">
                      <Palette className="h-4 w-4" />digital experiences
                    </Badge> and 
                    develop <Badge className="rounded-md font-normal bg-muted text-muted-foreground text-base inline-flex items-center gap-1 font-mono">
                      <Rocket className="h-4 w-4" />innovative applications
                    </Badge>
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section className="min-h-fit rounded-xl bg-muted/50 p-8">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <h2 className="text-lg font-bold md:text-xl">Projects</h2>
                <p className="text-muted-foreground">Discover some of my recent work and experiments.</p>
              </div>
              
              <div className="relative w-full">
                <Carousel 
                  ref={emblaRef}
                  className="w-full"
                  opts={{
                    align: 'start',
                    containScroll: 'trimSnaps',
                    dragFree: false,
                    slidesToScroll: 1
                  }}
                >
                  <CarouselContent className="-ml-2 md:-ml-2">
                    {projects.map((project, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-2 basis-full sm:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="rounded-xl group">
                            <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-xl relative">
                              <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                priority={index === 0}
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/60 p-4 flex flex-col justify-end transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <h3 className="text-white font-bold text-lg transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                  {project.title}
                                </h3>
                                <p className="text-white/80 text-sm transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                  {project.description}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </section>
        </div>

        <footer className="flex h-12 shrink-0 items-center justify-between px-8">
          <p className="text-sm text-muted-foreground">© 2024 Joey Montani</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
