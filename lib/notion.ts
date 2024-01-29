import { Client } from "@notionhq/client";

export type dataObj = {
  content: string;
  link: string | null;
};

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function fetchBlock(id: string) {
  const { results } = await notion.blocks.children.list({ block_id: id });
  return results;
}

export async function fetchData() {
  const res = await fetchBlock(`${process.env.NOTION_PAGE_ID}`);

  const blockIdsWithDate = res
    .map((obj) => {
      if ("paragraph" in obj) {
        if (obj.has_children) {
          let data: dataObj[] = [];
          return {
            id: obj.id,
            date: obj.paragraph.rich_text[0].plain_text,
            data,
          };
        }
      }
    })
    .filter((id) => {
      if (id) {
        return id;
      }
    });

  for (const obj of blockIdsWithDate) {
    const blockRes = await fetchBlock(`${obj?.id}`);
    blockRes.map((blockObj) => {
      if ("bulleted_list_item" in blockObj && "block_id" in blockObj.parent) {
        const content = blockObj.bulleted_list_item.rich_text[0].plain_text;
        const link = blockObj.bulleted_list_item.rich_text[0].href;
        obj?.data.push({ content, link });
      }
    });
  }

  return blockIdsWithDate;
}
