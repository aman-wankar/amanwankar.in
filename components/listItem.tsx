import { dataObj } from "@/lib/notion";
import format from "date-fns/format";
import ExtLink from "./ext-link";

export type Props = {
  data: {
    id: string;
    date: string;
    data: dataObj[];
  };
};

export function ListItem({ data }: Props) {
  const dateObject = Date.parse(data?.date!);
  const day = format(dateObject, "do");
  const month = format(dateObject, "MMMM");
  const year = format(dateObject, "yyyy");

  return (
    <div className="mb-8">
      <h3 className="text-md mb-2 font-semibold">
        Week of {month} {day}, {year}
      </h3>
      <ul className="list-inside list-disc">
        {data?.data.map((contentAndLinkObj, index) => (
          <li key={index}>
            {contentAndLinkObj.content}{" "}
            {contentAndLinkObj.link && (
              <ExtLink
                href={contentAndLinkObj.link}
                className="text-blue-500 hover:underline"
              >
                Link
              </ExtLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
