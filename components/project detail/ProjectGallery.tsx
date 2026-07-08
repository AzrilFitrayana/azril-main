import Image from "next/image";

const images = ["/project/Group 1.jpg", "/project/Group 1.jpg", "/project/Group 1.jpg", "/project/Group 1.jpg",];

export default function ProjectGallery({ images }: { images: string[] }) {
  return (
    <section id="gallery">
      <h2 className="section-title">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`overflow-hidden border bg-white`}
          >
            <Image
              src={img}
              alt=""
              width={900}
              height={600}
              className="w-full hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
