"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
  { src: "/haircut-sample-01.jpg", alt: "Haircut sample 1" },
  { src: "/haircut-sample-02.jpg", alt: "Haircut sample 2" },
  { src: "/haircut-sample-03.jpg", alt: "Haircut sample 3" },
  { src: "/haircut-sample-04.jpg", alt: "Haircut sample 4" },
  { src: "/haircut-sample-05.jpg", alt: "Haircut sample 5" },
  { src: "/haircut-sample-06.jpg", alt: "Haircut sample 6" },
  { src: "/haircut-sample-07.jpg", alt: "Haircut sample 7" },
  { src: "/haircut-sample-08.jpg", alt: "Haircut sample 8" },
  { src: "/haircut-sample-09.jpg", alt: "Haircut sample 9" },
  { src: "/haircut-sample-10.jpg", alt: "Haircut sample 10" },
  { src: "/haircut-sample-11.jpg", alt: "Haircut sample 11" },
  { src: "/haircut-sample-12.jpg", alt: "Haircut sample 12" },
];

export function Gallery() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our latest hairstyles and transformations. Each cut is
          crafted with precision and care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer focus-visible">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-none w-screen h-screen p-0 m-0">
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
