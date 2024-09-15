"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { FaCircleXmark } from "react-icons/fa6";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    false
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative  overflow-hidden w-full md:px-[20%]">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-transparent  h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid  place-items-center z-[100] h-dvh">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-1 z-50 right-0 lg:hidden items-center justify-center bg-black  rounded-full h-12 w-12"
              onClick={() => setActive(null)}
            >
              <FaCircleXmark size={40} stroke="#000" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-dvh md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="p-3 h-2/5"
              >
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className={cn(
                    "w-full h-[180px] lg:h-80 !rounded-3xl object-contain object-center",
                    active.imageStyle
                  )}
                />
              </motion.div>
              <div className="h-4/5">
                <div className="flex justify-between items-start p-4 h-[20%]">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title} <br />
                      <span className="text-[10px] sm:text-xs font-condensed ">
                        {active.time}
                      </span>
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                    <motion.p
                      layoutId={`description-${active.skills}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-xs mt-2"
                    >
                      {active.skills}
                    </motion.p>
                  </div>

                  {active.ctaLink && (
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-8 py-2 text-md !rounded-xl font-condensed font-bold bg-white shrink-0 text-black"
                    >
                      Link
                    </motion.a>
                  )}
                </div>
                <div className="relative px-4 h-[90%] scrollbar-hide overflow-y-scroll">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400   overflow-y-scroll pb-32  h-full md:h-80 scrollbar-hide"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="flex flex-col  w-full gap-12">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between  w-full items-start sm:items-center min-w-fit hover:bg-neutral-700  rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row w-full ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={150}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className={cn(
                    `h-44 w-full md:h-16 md:w-24 !rounded-2xl object-contain object-center `,
                    card.imageStyle
                  )}
                />
              </motion.div>
              <div className="flex justify-between items-center rounded-xl p-1 sm:w-full">
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-start md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-start md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="py-3 px-2 text-sm    w-fit  sm:w-28 md:w-fit font-condensed  !rounded-[8px] sm:!rounded-xl font-semibold sm:font-semibold bg-white hover:bg-purple   text-black mt-4 md:mt-0"
                >
                  {card.ctaText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="#000"
      stroke="#000"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Full Stack Development",
    title: "Google Summer of Code 2024 w/ INCF",
    src: "https://summerofcode.withgoogle.com/assets/media/logo.svg",
    imageStyle: "bg-white opacity-90",
    ctaText: "Read More",
    ctaLink:
      "https://summerofcode.withgoogle.com/programs/2024/projects/yvnc5UQy",
    time: "May 2024 - August 2024",
    skills:
      "Next.js, TypeScript, React Query, CI/CD, Django, PostgreSQL, AWS, Jest, Django Tests",
    content: () => {
      return (
        <p className="!text-lg">
          In the Google Summer of Code 2024, I contributed to the SciCommons
          project under INCF, a social web tool that facilitates rating and
          commenting on research reports. My primary focus was enhancing the
          platform’s performance, scalability, and user experience.
          <p>
            I transitioned the entire frontend from React.js to Next.js,
            integrated TypeScript, and redesigned the pages using Pixso for
            better responsiveness. I implemented key features like public,
            private, and locked communities, which enabled controlled access and
            ensured user anonymity. Additional functionalities included the
            ability to post, rate, and comment on research articles using
            hashtags.
          </p>
          <p>
            On the backend, I introduced rate-limiting to API endpoints for
            better resource management. I deployed both the frontend and backend
            on separate instances of Arbutus Compute Canada, utilizing Docker
            for containerization, PM2 for frontend management, and Nginx for
            routing. PostgreSQL was hosted on DigitalOcean, while Arbutus Object
            Storage was integrated to manage files like PDFs and images.
          </p>
          <p>
            To enhance security and performance, I set up a Cloudflare reverse
            proxy, which helped in managing SSL certificates and mitigating
            potential security threats. Future work includes database indexing,
            caching mechanisms, and adding Celery for asynchronous task
            management. This project not only improved the platform’s usability
            but also provided valuable experience in full-stack development,
            cloud deployment, and security.
          </p>
        </p>
      );
    },
  },
  {
    description: "Frontend Developer",
    title: "OpeninApp",
    src: "https://raw.githubusercontent.com/goelparas/imFWEA/946b4a6de51a7816fe7f19d912d0a8e4dbcff5b8/openinap.svg",
    imageStyle: "bg-white opacity-90",
    ctaText: "Read More",
    ctaLink: "https://www.Openinapp.com",
    time: "August 2024 - Present",
    skills: "Next.js, TypeScript, Redux, ShadCn and AWS CloudFront",
    content: () => {
      return (
        <p className="!text-lg">
          As a Frontend Developer at OpenInApp, Bangalore, I have played a
          pivotal role in leading the development of innovative solutions that
          have made a significant impact on content creators.
          <p>
            One of the standout projects I have worked on is TopSecret Links, a
            Next.js-based media-sharing platform that has been a game-changer
            for content creators. This platform was designed to enable creators
            to securely share private content with their audience, ensuring that
            their work remains protected while still being accessible to those
            who have the right permissions. The emphasis on security was a core
            aspect of the development process, as it was crucial to build a
            system that creators could trust with their valuable content.
          </p>
          <p>
            The results speak for themselves. TopSecret Links has seen over
            20,000 uploads, with creators from various fields using the platform
            to share their work with a select audience. The platform's success
            is further underscored by the significant revenue it has
            generated—over $50,000. This revenue growth is a testament to the
            platform's effectiveness in meeting the needs of content creators
            and providing them with a secure, reliable space to share their
            work.
          </p>
          <p>
            In addition to TopSecret Links, I also played a key role in
            developing IG Cash, an AI-powered tool designed to enhance
            e-commerce experiences on social media. IG Cash identifies products
            within user-uploaded images, generates affiliate links, and creates
            seamless web stores that can easily be integrated into Instagram
            posts. This tool simplifies the process for creators and influencers
            to monetize their content, providing them with effortless ways to
            showcase products directly within their posts.
          </p>
          <p>
            Both platforms have had a significant impact on their users,
            offering secure, scalable, and user-friendly solutions. I ensured
            that the platforms could scale efficiently by optimizing image
            loading, implementing lazy loading for media content, and using
            efficient caching strategies to reduce server load as traffic and
            content uploads increased. These optimizations ensured that the user
            experience remained smooth, even as the platforms gained popularity.
          </p>
        </p>
      );
    },
  },
  {
    description: "Junior Frontend Developer",
    title: "OpeninApp ",
    imageStyle: "bg-white opacity-90",
    src: "https://raw.githubusercontent.com/goelparas/imFWEA/946b4a6de51a7816fe7f19d912d0a8e4dbcff5b8/openinap.svg",
    ctaText: "Read More",
    ctaLink: "https://www.Openinapp.com",
    time: "Feb 2023 - August 2024",
    skills: "Next.js, TypeScript, Redux, ShadCn and AWS CloudFront",
    content: () => {
      return (
        <p className="!text-lg">
          <p>
            During my internship at OpenInApp, I played a pivotal role in the
            development of various innovative solutions aimed at content
            creators and brands. One of the standout tools I worked on was the
            Smart Link Generator, which seamlessly redirects users from social
            media platforms to the appropriate apps, boosting engagement and
            efficiency. This tool has proven invaluable in enhancing user
            experience, providing creators and brands with a reliable way to
            drive traffic to their content or products.
          </p>
          <p>
            Another significant project was IG Cash, an AI-powered tool that
            identifies products in user images, generates affiliate links, and
            creates web stores for seamless integration into Instagram posts.
            This tool, along with the Smart Link Generator, has not only
            benefited creators but has also helped brands optimize their
            advertising strategies.
          </p>
          <p>
            OpenInApp’s focus extends beyond content creators, as it also
            provides brands with a sophisticated B2B dashboard through which
            they can monitor their advertisement links and analyze traction
            driven to their products. Brands such as Boat, Mamaearth, and Durex
            are already leveraging this dashboard for their product campaigns.
            This platform, along with others, has contributed to the growing
            user base of OpenInApp, which now boasts over 2M+ monthly active
            users and 50,000+ daily active users.
          </p>
          <p>
            Furthermore, I developed a caching layer using AWS CloudFront, which
            reduced the bundle size by 24%, significantly boosting the
            platform’s performance, including a 20% improvement in Lighthouse
            scores. Platforms like IG Cash and TopSecret Links, which now see
            2,000+ daily active users, have generated over $1,000 in earnings
            per day. The CDN caching solution further optimized performance
            across the board.
          </p>
        </p>
      );
    },
  },
  {
    description: "Full Stack Developer Intern",
    title: "Shink",
    imageStyle: "bg-white",
    src: "https://media.licdn.com/dms/image/v2/D4D0BAQE0mPzCRB3fHw/company-logo_200_200/company-logo_200_200/0/1720037287096?e=1734566400&v=beta&t=QKQjqMBG0M0h8gjPpkkFIQjiWtoLoee65MgqX5bVoEk",
    ctaText: "Read More",
    time: "September 2023 - Feb 2023",
    skills: "React Native, AWS, WebRTC, WebSockets",
    content: () => {
      return (
        <p className="overflow-scroll h-full !text-lg">
          During my internship at Shink, I played a key role in building a
          dating app for both Android and iOS using React Native. I designed and
          implemented the backend architecture on AWS, leveraging services like
          DynamoDB, S3, Lambda, and GraphQL to create a scalable and efficient
          infrastructure. One of my primary achievements was engineering an
          on-demand image delivery system using Sharp, Lambda, S3, and
          CloudFront. This innovation reduced image load times from 500ms to
          under 100ms, drastically improving the app’s performance.
          Additionally, I integrated real-time messaging, video, and audio
          calling features using WebSockets and WebRTC, which enhanced user
          interaction. I also set up in-app and push notifications using AWS SQS
          and Amplify, ensuring seamless user engagement. This experience helped
          me strengthen my skills in full-stack development and cloud
          architecture, while working in a fast-paced, dynamic environment.
        </p>
      );
    },
  },
];
