"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery">
      <h2 className="section-title">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(img)}
            aria-label={`Zoom gallery image ${index + 1}`}
            className="overflow-hidden border bg-white cursor-zoom-in"
          >
            <Image
              src={img}
              alt={`Project gallery image ${index + 1}`}
              width={900}
              height={600}
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
              className="w-full transition duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute rounded-md right-4 top-4 z-10 flex size-11 items-center justify-center bg-white text-black hover:bg-neutral-200"
            onClick={() => setSelectedImage(null)}
          >
            <X aria-hidden="true" size={22} />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Zoomed project gallery image"
              width={1800}
              height={1200}
              sizes="100vw"
              quality={80}
              className="max-h-[90vh] w-auto max-w-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
