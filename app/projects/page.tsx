import Heading from "@/components/Heading";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import {
  evogym,
  gamehub,
  gpt,
  hoobank,
  issuetracker,
  metaversus,
  vidly,
} from "../../public/project images";

const projectsObj = [
  { name: metaversus, link: "https://gpt-beige.vercel.app" },
  { name: hoobank, link: "https://modern-bank-eight.vercel.app" },
  { name: gpt, link: "https://gpt-beige.vercel.app" },
  { name: evogym, link: "https://gym-sepia.vercel.app" },
  { name: vidly, link: "https://vidly-frontend-three.vercel.app" },
  { name: gamehub, link: "https://game-hub-beta-pearl.vercel.app" },
  { name: issuetracker, link: "https://issue-tracker-seven-wine.vercel.app" },
];

const Projects = () => {
  return (
    <Container>
      <title>Aman Wankar | Projects</title>
      <Heading>Projects</Heading>
      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projectsObj.map((obj, index) => (
          <Link href={obj.link} key={index}>
            <Image
              className="rounded-lg object-cover"
              src={obj.name}
              alt="Evogym Image"
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
