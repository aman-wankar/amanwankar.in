import Heading from "@/components/Heading";
import { ImagesGrid } from "@/components/ImagesGrid";
import Container from "@/components/container";
import {
  evogym,
  gamehub,
  gpt,
  hoobank,
  issuetracker,
  metaversus,
  vidly,
} from "../../public/project images";

const frontendProjects = [
  { name: metaversus, link: "https://metaversus-wheat.vercel.app" },
  { name: hoobank, link: "https://modern-bank-eight.vercel.app" },
  { name: gpt, link: "https://gpt-beige.vercel.app" },
  { name: evogym, link: "https://gym-sepia.vercel.app" },
];

const fullstackProjects = [
  { name: gamehub, link: "https://game-hub-beta-pearl.vercel.app" },
  { name: vidly, link: "https://vidly-frontend-three.vercel.app" },
  { name: issuetracker, link: "https://issue-tracker-seven-wine.vercel.app" },
];

const Projects = () => {
  return (
    <Container>
      <title>Aman Wankar | Projects</title>
      <Heading>Projects</Heading>
      <div className="my-6">
        <h2 className="font-playfair mb-4 text-3xl font-bold">
          Fullstack Projects
        </h2>
        <ImagesGrid ImageGridProps={fullstackProjects} />
      </div>
      <div className="my-6">
        <h2 className="font-playfair mb-4 text-3xl font-bold">
          Frontend Projects
        </h2>
        <ImagesGrid ImageGridProps={frontendProjects} />
      </div>
    </Container>
  );
};

export default Projects;
