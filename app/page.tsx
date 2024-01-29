import Heading from "@/components/Heading";
import Container from "@/components/container";
import profile_pic from "@/public/profile.webp";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <title>Aman Wankar</title>
      <div className="space-y-6">
        <Heading>Aman Wankar</Heading>
        <p className="text-[18px]">
          Hi, my name is Aman. I&apos;m currently working at <b>Wipro</b> as a{" "}
          <b>Project Engineer</b>. Here, I work on <b>Google Cloud Platform</b>{" "}
          to help customers <b>migrate their applications</b> on <b>Cloud</b> in
          most effective way. We are bunch of folks in a team, and I like
          working with my team. They are simply amazing.
        </p>
        <Image
          className="rounded-full"
          src={profile_pic}
          width={128}
          height={128}
          alt="profile_pic"
        />
        <p className="text-[18px]">
          I like to <b>develope</b> for web with <b>React</b>. I have built a
          few frontend and full stack projects using React and <b>NodeJs</b>. I
          enjoyed building this portfolio site with <b>NextJs</b>. For
          animations I used <b>Framer Motion</b> library. I am having lots of
          fun maintaining this site.
        </p>
        <p className="pb-6 text-[18px]">
          I&apos;m looking out for new opportunities in my career.{" "}
          <a href="mailto:amanwankar07@gmail.com">
            <u className="text-blue-500">Contact me</u>
          </a>{" "}
          if you think I&apos;d be a good fit for job.
        </p>
      </div>
    </Container>
  );
}
