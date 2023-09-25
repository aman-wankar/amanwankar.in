import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function fetchBlock(id: string) {
  const { results } = await notion.blocks.children.list({ block_id: id })
  return results;
}
