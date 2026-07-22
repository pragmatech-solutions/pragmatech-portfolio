import Image from "next/image";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  if (images.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {images.map((image, index) => (
        <div key={image} className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src={image}
            alt={`Abstract interface preview ${index + 1} for ${title}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
