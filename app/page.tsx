"use client"

import React, { useState, useEffect, useRef } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Palette, Rocket, Play, Square, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'

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
    title: "Switzerland Federal archives",
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
]

export default function Page() {
  const [isClient, setIsClient] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setIsClient(true)
    audioRef.current = new Audio('/music/claroquesi.mp3')
    audioRef.current.loop = true
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (!isClient) return null

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center justify-between px-5 md:px-8 transition-[width,height] ease-linear">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMusic}
                className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors ${
                  isPlaying 
                    ? 'text-destructive hover:bg-destructive/10' 
                    : 'text-primary hover:bg-primary/10'
                }`}
                title={isPlaying ? 'Stop' : 'Play'}
              >
                {isPlaying ? (
                  <Square className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
              <Link 
                href="https://open.spotify.com/intl-fr/artist/4XpUHzvyJso0zj6PUTgnic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground font-mono hover:text-primary transition-colors"
              >
                {isPlaying ? 'Now Playing' : '@Claro Que Si'}
              </Link>
            </div>
            <ThemeToggle className="w-8 h-8" />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-5 md:gap-8 px-5 md:px-8 py-5">
          <section className="min-h-fit rounded-xl bg-muted/50 p-4 md:p-8">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 shrink-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image 
                        src="/images/avatar.png"
                        alt="Avatar animé"
                        width={64}
                        height={64}
                        unoptimized={true}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </Avatar>
                  <div className="min-w-0">
                    <h1 className="text-2xl md:text-2xl font-bold truncate">Joey Montani</h1>
                    <p className="text-base md:text-base text-muted-foreground truncate">Creative Developer & Designer</p>
                  </div>
                </div>
                
                <div className="h-px bg-border/40" />
                
                <div className="text-base md:text-base text-muted-foreground flex flex-col gap-2 md:gap-3">
                  <p className="flex flex-wrap gap-2 items-center">
                    Hi, I&apos;m Joey, I create <Badge className="rounded-md font-normal bg-muted text-muted-foreground text-base inline-flex items-center gap-1 font-mono">
                      <Palette className="h-3 w-3" />digital experiences
                    </Badge> and develop <Badge className="rounded-md font-normal bg-muted text-muted-foreground text-base inline-flex items-center gap-1 font-mono">
                      <Rocket className="h-3 w-3" />innovative applications
                    </Badge>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-fit rounded-xl bg-muted/50 p-4 md:p-8">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-2xl md:text-xl font-bold">Projects</h2>
                <p className="text-base md:text-base text-muted-foreground">
                  Discover some of my recent work and experiments.
                </p>
              </div>
              
              <div className="relative w-full">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4 md:-ml-4">
                    {projects.map((project, index) => (
                      <CarouselItem key={index} className="pl-4 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                        <Card className="rounded-xl group">
                          <CardContent className="flex aspect-[9/16] sm:aspect-video items-center justify-center p-0 overflow-hidden rounded-xl relative">
                            <div className="absolute top-2 right-2 z-10 sm:hidden">
                              <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-white/50 hover:text-white/80 hover:bg-black/40 transition-colors">
                                <Info className="h-5 w-5" />
                              </div>
                            </div>
                            <Image 
                              src={project.image} 
                              alt={project.title}
                              fill
                              priority={index === 0}
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 p-4 flex flex-col justify-end transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                              <h3 className="text-white font-bold text-lg md:text-lg transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                {project.title}
                              </h3>
                              <p className="text-white/80 text-sm md:text-sm transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 mt-0.5 md:mt-1">
                                {project.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-4 mt-4">
                    <CarouselPrevious 
                      variant="ghost" 
                      className="relative static translate-y-0 hover:bg-primary/20"
                    />
                    <CarouselNext 
                      variant="ghost"
                      className="relative static translate-y-0 hover:bg-primary/20"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
        </div>

        <footer className="flex h-12 shrink-0 items-center justify-between px-5 md:px-8">
          <p className="text-sm text-muted-foreground">© 2024 Joey Montani</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
