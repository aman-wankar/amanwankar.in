import Image, { StaticImageData } from "next/image";
import ExtLink from "./ext-link";

export function ImagesGrid({
  ImageGridProps,
}: {
  ImageGridProps: { name: StaticImageData; link: string }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {ImageGridProps.map((obj, index) => (
        <li key={index}>
          <ExtLink href={obj.link}>
            <Image
              className="rounded-lg border-2 object-cover"
              src={obj.name}
              alt={`${obj.name} + _image`}
            />
          </ExtLink>
        </li>
      ))}
    </ul>
  );
}
