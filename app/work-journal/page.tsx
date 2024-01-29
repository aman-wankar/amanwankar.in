import Heading from "@/components/Heading";
import Container from "@/components/container";
import List from "@/components/list";
import { fetchData } from "../../lib/notion";

export default async function page() {
  const blockIdsWithDate = await fetchData();

  return (
    <Container>
      <title>Aman Wankar | Work Journal</title>
      <Heading>Work Journal</Heading>
      <div className="my-6">
        <List dataArray={blockIdsWithDate} />
      </div>
    </Container>
  );
}
