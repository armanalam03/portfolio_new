import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import {
  CSSIcon,
  HTMLIcon,
  JSIcon,
  NextIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
  WebpackIcon,
} from "../icons";
import Link from "next/link";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Technologies",
    hash: "#technologies",
  },
] as const;

export const skillsData = [
  {
    name: "innerCircle",
    skills: [
      { skillName: "HTML", skillIcon: <HTMLIcon /> },
      { skillName: "CSS", skillIcon: <CSSIcon /> },
      { skillName: "Javascript", skillIcon: <JSIcon /> },
    ],
  },
  {
    name: "outerCircle",
    skills: [
      {
        skillName: "React",
        skillIcon: <ReactIcon className="w-10 h-10 lg:w-12 lg:h-12" />,
      },
      {
        skillName: "Redux",
        skillIcon: <ReduxIcon className="w-10 h-10 lg:w-12 lg:h-12" />,
      },
      {
        skillName: "Next.js",
        skillIcon: <NextIcon className="w-10 h-10 lg:w-12 lg:h-12" />,
      },
    ],
  },
  {
    name: "outmostCircle",
    skills: [
      {
        skillName: "Typescipt",
        skillIcon: <TypeScriptIcon className="w-11 h-11 lg:w-16 lg:h-16" />,
      },
      {
        skillName: "Tailwind",
        skillIcon: <TailwindIcon className="w-16 h-16 lg:w-20 lg:h-20" />,
      },
      {
        skillName: "React Query",
        skillIcon: <ReactQueryIcon className="w-16 h-16 lg:w-20 lg:h-20" />,
      },
      {
        skillName: "Webpack",
        skillIcon: <WebpackIcon className="w-14 h-14 lg:w-20 lg:h-20" />,
      },
    ],
  },
] as const;

export const skills = [
  { src: "https://skillicons.dev/icons?i=html", label: "HTML5" },
  { src: "https://skillicons.dev/icons?i=css", label: "CSS3" },
  { src: "https://skillicons.dev/icons?i=js", label: "JavaScript" },
  { src: "https://skillicons.dev/icons?i=ts", label: "TypeScript" },
  { src: "https://skillicons.dev/icons?i=tailwind", label: "TailwindCSS" },
  { src: "https://skillicons.dev/icons?i=cpp", label: "C++" },
  { src: "https://skillicons.dev/icons?i=py", label: "Python" },
  { src: "https://skillicons.dev/icons?i=postgres", label: "PostgreSQL" },
  { src: "https://skillicons.dev/icons?i=react", label: "React.js" },
  { src: "https://skillicons.dev/icons?i=nextjs", label: "Next.js" },
  { src: "https://skillicons.dev/icons?i=django", label: "Django" },
  { src: "https://skillicons.dev/icons?i=nodejs", label: "Node.js" },
  { src: "https://skillicons.dev/icons?i=express", label: "Express" },
  { src: "https://skillicons.dev/icons?i=react", label: "React Native" },
  { src: "https://skillicons.dev/icons?i=graphql", label: "GraphQL" },
  { src: "https://skillicons.dev/icons?i=postman", label: "Postman" },
  { src: "https://skillicons.dev/icons?i=docker", label: "Docker" },
  { src: "https://skillicons.dev/icons?i=openstack", label: "OpenStack" },
  { src: "https://skillicons.dev/icons?i=dynamodb", label: "DynamoDB" },
  { src: "https://skillicons.dev/icons?i=aws", label: "AWS" },
  { src: "https://skillicons.dev/icons?i=cloudflare", label: "CloudFlare" },
  { src: "https://skillicons.dev/icons?i=firebase", label: "Firebase" },
  { src: "https://skillicons.dev/icons?i=git", label: "Git" },
  { src: "https://skillicons.dev/icons?i=github", label: "GitHub" },
  {
    src: "https://skillicons.dev/icons?i=githubactions",
    label: "GitHub Actions",
  },
] as const;

export const INFORMATION = {
  CONTACT: {
    MESSAGE: (
      <>
        Thanks for stopping by, I’m currently looking to join a new team of
        creative designers and developers. If you think we might be a good fit
        for one another, send me an{" "}
        <Link
          className="font-extrabold text-foreground"
          href={"mailto:goelparas.work@gmail.com"}
        >
          email
        </Link>{" "}
        &#128231;.
      </>
    ),
    SOCIALS: {
      github: "https://www.github.com/armanalam03",
      twitter: "https://x.com/armaanalam_",
      linkedin: "https://www.linkedin.com/in/armaanalam/",
      resume:
        "https://drive.google.com/file/d/1GrJdWwLfwnLC4jQPQQ8nQ4GEEHvCzwY-/view?usp=sharing",
    },
  },
};

export const projects = [
  {
    title: "cssArena",
    imageKey: "cssarena",
    imageUrl:
      "https://private-user-images.githubusercontent.com/39340406/257930463-66c81410-f875-42d1-91e4-4b9d1f2d421b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY0MTM5NzcsIm5iZiI6MTcyNjQxMzY3NywicGF0aCI6Ii8zOTM0MDQwNi8yNTc5MzA0NjMtNjZjODE0MTAtZjg3NS00MmQxLTkxZTQtNGI5ZDFmMmQ0MjFiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE1VDE1MjExN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIzZGI1OTYxNjZlMjIzNGNhYWJkYjUzODAwOGQ0M2E3MTI2MDdkODc0ZGY1MTM3NDFlZTIxNDE0MzVkNGY0ZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.zn7ao2uUvv2OfUB8vumq_E_wz6Hxm4LiJkU0AwPD-VA",
    liveLink: "https://github.com/armanalam03/cssArena",
    description:
      "Competitive CSS platform with real-time challenges, scoring, and code evaluation.",
    longDescription:
      "cssArena is an engaging web platform designed for competitive CSS enthusiasts, where developers and designers can test and showcase their skills through challenging coding contests. Participants recreate given designs using HTML and CSS, aiming for precise accuracy and efficient code. The platform features real-time battle arenas where users can compete against friends, track their progress, and view others' solutions. With features such as code evaluation, design accuracy scoring, and comparison tools, .cssArena_ fosters a dynamic learning environment. Users can also select practice arenas to refine their skills at their own pace. The interactive nature of the platform promotes creativity, skill enhancement, and friendly competition, making it a valuable resource for those looking to advance their CSS expertise while having fun in a competitive setting.",
  },
  {
    title: "Fingerspell - An ASL Learning App",
    imageKey: "fingerspell",
    imageUrl:
      "https://private-user-images.githubusercontent.com/39340406/255223089-20d01b4a-7932-4fb4-99ae-f641fcfe992b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY0MTM5MzEsIm5iZiI6MTcyNjQxMzYzMSwicGF0aCI6Ii8zOTM0MDQwNi8yNTUyMjMwODktMjBkMDFiNGEtNzkzMi00ZmI0LTk5YWUtZjY0MWZjZmU5OTJiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE1VDE1MjAzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE3YzY1M2FlMmNkYmI3YzhhNmNmYWZlNmJjYjA0NzQyZmQ0Nzg0NjYwMmVkMjk4ZDkxYTMwODBmYmMyMjNmNDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xfJwFgRa0O0yE0C5ElFNZe5gSu-kqSOhz-Xg9RVZBx4",
    liveLink: "https://fingerspell.vercel.app/",
    description:
      "Real-time ASL practice app enhancing communication and learning.",
    longDescription:
      "FingerSpell is an innovative application designed to facilitate real-time learning and practice of American Sign Language (ASL). Utilizing cutting-edge technologies such as Python, Mediapipe, Fingerpose, React.js, TensorFlow.js, and OpenCV, FingerSpell provides an interactive platform for users to enhance their ASL skills. The application employs a machine learning model trained on a comprehensive dataset of hand posture images, enabling it to recognize all 26 letters of the ASL alphabet with 85% accuracy. This tool supports users with disabilities by improving communication and fostering inclusivity. The current goal is to elevate the model’s accuracy to 98%, ensuring more precise and reliable sign language recognition. By integrating advanced computer vision and machine learning techniques, FingerSpell offers a practical and effective resource for both beginners and advanced learners in the ASL community.",
  },
  {
    title: "OpeninApp B2B Platform",
    imageKey: "oia_b2b",
    imageUrl:
      "https://github.com/armanalam03/assets/blob/main/oia_b2b.png?raw=true",
    liveLink: "https://business.openinapp.com/",
    description: "Performance Tracking for Influencer Marketers",
    longDescription:
      "OpeninApp’s performance tracking solution is tailored for both influencer marketers and brands, offering a comprehensive approach to campaign management. Our sophisticated B2B dashboard empowers brands to meticulously track the performance of their advertisement links and monitor the traction driven to their products. By providing detailed insights into how effectively their products are being promoted through influencer partnerships, brands can make data-driven decisions to optimize their marketing strategies. This robust tool is already trusted by leading brands such as Boat, Mamaearth, and Durex, who rely on our dashboard to enhance their product campaigns. The platform not only provides real-time analytics but also offers advanced metrics and reporting features that help brands assess the impact of their influencer collaborations, adjust strategies, and maximize their ROI. OpeninApp ensures that brands can efficiently manage and refine their advertising efforts to achieve optimal results.",
  },
  {
    title: "IG-Cash",
    imageKey: "igcash",
    imageUrl:
      "https://raw.githubusercontent.com/goelparas/imFWEA/1ed1d158be8ce3c9bef6b7ded925227147e17245/webbuilder.svg",
    liveLink: "https://openinapp.com/ig-cash",
    description:
      "An AI-powered tool that identifies products in user images, generates affiliate links, and creates web stores for seamless integration into Instagram posts.",
    longDescription:
      "Our AI-powered tool transforms the way users interact with products in their images by offering a seamless and efficient solution for social commerce. It leverages advanced image recognition technology to identify products within user-uploaded photos, automatically generating accurate affiliate links that are seamlessly integrated into Instagram posts. This process eliminates manual effort, allowing users to quickly monetize their content and streamline their shopping experience. Additionally, the tool facilitates the creation of personalized web stores, where users can display and sell the identified products with ease. By integrating this tool into their Instagram posts, users can enhance their social media engagement and drive sales effortlessly. This cutting-edge technology not only simplifies the process of linking products but also provides a streamlined pathway for users to create and manage their own online stores, ultimately boosting their social commerce capabilities and maximizing revenue potential.",
  },

  {
    title: "Smartlinks",
    imageKey: "smartlinks",
    imageUrl:
      "https://github.com/armanalam03/assets/blob/main/smartlinks.png?raw=true",
    liveLink: "https://openinapp.com/dashboard",
    description:
      "OpeninApp's Smart Link Generator seamlessly redirects users from social media platforms to the appropriate apps, boosting engagement and efficiency.",
    longDescription:
      "OpeninApp's Smart Link Generator revolutionizes how users interact with content shared across social media platforms. By effortlessly redirecting users to the most relevant apps, it enhances the user journey and significantly boosts engagement. When a user clicks on a Smart Link, they are seamlessly guided to the intended app, whether it's for shopping, gaming, or any other activity, optimizing their experience and streamlining access. This intelligent redirection not only ensures that users are directed to the right place but also improves the efficiency of app usage, minimizing friction and maximizing user satisfaction. The Smart Link Generator is designed to integrate smoothly with various social media channels, providing a unified and intuitive experience. This innovation not only drives higher user engagement but also supports businesses by ensuring their content reaches the target audience in the most effective manner possible.",
  },
  {
    title: "Top Secret Links",
    imageKey: "top_secret_links",
    imageUrl:
      "https://raw.githubusercontent.com/goelparas/imFWEA/master/top-secret-whatsapp.avif",
    liveLink: "https://openinapp.com/topsecrets",
    description:
      "A media-sharing platform that enables content creators to monetize resources, generating over $50k in revenue.",
    longDescription:
      "Top Secret Links is a dynamic media-sharing platform designed to empower content creators by enabling them to monetize their work through microtransactions. Built with Next.js, the platform offers a secure and user-friendly environment for sharing valuable resources and generating revenue. Content creators can upload and sell their resources, while consumers can easily access and purchase these resources, facilitating a seamless transaction experience. The platform has successfully generated over $50k in revenue, underscoring its effectiveness in supporting creators' financial growth. Top Secret Links integrates secure payment gateways, ensuring that transactions are handled safely and efficiently. This project exemplifies my commitment to creating impactful solutions that enhance the digital content economy, providing a valuable tool for creators to monetize their work and connect with their audience.",
  },
];

export const AVATAR =
  "https://raw.githubusercontent.com/goelparas/imFWEA/master/avatar.jpg";

export const COMPANY_NAME = [
  {
    name: "IntegraConnect",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1668"
        height="245"
        viewBox="0 0 1668 245"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_51"
              data-name="Rectangle 51"
              width="1668"
              height="245"
              transform="translate(1919 1846)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </clipPath>
          <clipPath id="clip-path-2">
            <rect
              id="Rectangle_50"
              data-name="Rectangle 50"
              width="1808"
              height="364"
              transform="translate(0.381 -0.46)"
            />
          </clipPath>
        </defs>
        <g
          id="Mask_Group_7"
          data-name="Mask Group 7"
          transform="translate(-1919 -1846)"
          clip-path="url(#clip-path)"
        >
          <g
            id="logo-integra-connect"
            transform="translate(1848.619 1786.459)"
            clip-path="url(#clip-path-2)"
          >
            <g
              id="Group_616"
              data-name="Group 616"
              transform="translate(72.148 61.802)"
            >
              <g
                id="Group_615"
                data-name="Group 615"
                transform="translate(0 0)"
              >
                <path
                  id="Path_172"
                  data-name="Path 172"
                  d="M93.4,150.708,58.785,90.77,24.174,150.708v.056l29.568,51.213A17.478,17.478,0,0,0,68.88,210.72h59.136v-.056Z"
                  transform="translate(7.846 29.198)"
                  fill="#c42a24"
                />
                <path
                  id="Path_173"
                  data-name="Path 173"
                  d="M215.038,136.133H76.576l34.62,59.956v.056h59.136A17.477,17.477,0,0,0,185.47,187.4l29.568-51.214Z"
                  transform="translate(24.675 43.792)"
                  fill="#ed7a00"
                />
                <path
                  id="Path_174"
                  data-name="Path 174"
                  d="M227.822,96.633,198.217,45.364h0v.056h-.065l-34.583,59.938-34.611,59.956h69.3v.056h0L227.86,114.1a17.478,17.478,0,0,0,0-17.478Z"
                  transform="translate(41.524 14.602)"
                  fill="#15548c"
                />
                <path
                  id="Path_175"
                  data-name="Path 175"
                  d="M177.045,8.744A17.478,17.478,0,0,0,161.907,0H102.771V.056l34.62,59.956L172,119.968l34.611-59.956v-.056Z"
                  transform="translate(33.128)"
                  fill="#4090c6"
                />
                <path
                  id="Path_176"
                  data-name="Path 176"
                  d="M32.016,45.419h-.075v-.056h0L2.336,96.632a17.487,17.487,0,0,0,0,17.478l29.605,51.269h0v-.056h.065l34.62-59.956L101.238,45.41Z"
                  transform="translate(0.004 14.593)"
                  fill="#22a392"
                />
                <path
                  id="Path_177"
                  data-name="Path 177"
                  d="M128.049.056V0H68.876A17.478,17.478,0,0,0,53.738,8.743L24.17,59.956v.056h138.5Z"
                  transform="translate(7.813)"
                  fill="#bdc500"
                />
                <path
                  id="Path_178"
                  data-name="Path 178"
                  d="M281.978,175.851h-26.5V33.921h26.5Z"
                  transform="translate(82.225 10.916)"
                  fill="#fff"
                />
                <path
                  id="Path_179"
                  data-name="Path 179"
                  d="M297.138,166.176V65.5h14.821a5.956,5.956,0,0,1,6.18,4.419l1.668,7.951a55.4,55.4,0,0,1,6.432-5.7,44.9,44.9,0,0,1,7.169-4.418,36.582,36.582,0,0,1,8.1-2.843,42.6,42.6,0,0,1,9.425-.979,36.108,36.108,0,0,1,14.625,2.8,28.9,28.9,0,0,1,10.655,7.858,34.538,34.538,0,0,1,6.479,12.118,51.255,51.255,0,0,1,2.209,15.464v64H360.664V102.044a21.518,21.518,0,0,0-4.27-14.28,15.846,15.846,0,0,0-12.808-5.052,25.254,25.254,0,0,0-11.773,2.843,42.226,42.226,0,0,0-10.4,7.756v72.867Z"
                  transform="translate(95.626 20.627)"
                  fill="#fff"
                />
                <path
                  id="Path_180"
                  data-name="Path 180"
                  d="M415.454,174.891a26.482,26.482,0,0,1-20.125-7.457,28.441,28.441,0,0,1-7.066-20.508V90.764H378.009a4.661,4.661,0,0,1-4.81-5.108V76.045L389.391,73.4l5.108-27.48a4.845,4.845,0,0,1,1.817-3.039A5.752,5.752,0,0,1,399.9,41.8h12.64V73.491h26.5V90.764h-26.5v54.559a10.7,10.7,0,0,0,2.358,7.364,7.989,7.989,0,0,0,6.283,2.647,11.418,11.418,0,0,0,3.775-.541,20.729,20.729,0,0,0,2.647-1.128q1.128-.587,2.014-1.128a3.375,3.375,0,0,1,1.762-.541,2.8,2.8,0,0,1,1.771.541,8.306,8.306,0,0,1,1.472,1.622l7.262,11.773a36.7,36.7,0,0,1-12.174,6.674,45.333,45.333,0,0,1-14.252,2.284Z"
                  transform="translate(120.023 13.451)"
                  fill="#fff"
                />
                <path
                  id="Path_181"
                  data-name="Path 181"
                  d="M479.4,63.932a48.929,48.929,0,0,1,17.525,3.039,38.4,38.4,0,0,1,13.787,8.883,40.606,40.606,0,0,1,9.032,14.327,54.067,54.067,0,0,1,3.244,19.389,35.167,35.167,0,0,1-.243,4.568,7.309,7.309,0,0,1-.886,2.843,3.579,3.579,0,0,1-1.715,1.473,7.316,7.316,0,0,1-2.75.438h-62.23a34.678,34.678,0,0,0,8.343,22.773,26,26,0,0,0,19.239,7.261,33.34,33.34,0,0,0,10.16-1.37,47.733,47.733,0,0,0,7.457-3.048q3.188-1.668,5.593-3.039a9.386,9.386,0,0,1,4.661-1.37,5.278,5.278,0,0,1,2.554.587,5.705,5.705,0,0,1,1.864,1.669l7.066,8.837a40.394,40.394,0,0,1-9.033,7.9,50.55,50.55,0,0,1-10.449,5.108,57.068,57.068,0,0,1-11.093,2.7,79.437,79.437,0,0,1-10.944.783A53.8,53.8,0,0,1,461.01,164.2a43.671,43.671,0,0,1-15.707-10.31A48.309,48.309,0,0,1,434.8,137.013a65.321,65.321,0,0,1-3.831-23.3A55.732,55.732,0,0,1,434.3,94.32a46.612,46.612,0,0,1,9.574-15.847A45.054,45.054,0,0,1,459.09,67.819,50.149,50.149,0,0,1,479.4,63.932Zm.494,17.375A22.373,22.373,0,0,0,463.3,87.291a29.532,29.532,0,0,0-7.653,16.984H501.2a30.287,30.287,0,0,0-1.277-8.883,20.507,20.507,0,0,0-3.925-7.317,18.641,18.641,0,0,0-6.674-4.959,22.765,22.765,0,0,0-9.424-1.808Z"
                  transform="translate(138.627 20.559)"
                  fill="#fff"
                />
                <path
                  id="Path_182"
                  data-name="Path 182"
                  d="M551.209,63.776A53.526,53.526,0,0,1,563.384,65.1a41.491,41.491,0,0,1,10.4,3.878H602.74v9.014a5,5,0,0,1-1.174,3.533,6.982,6.982,0,0,1-4.027,1.771l-9.033,1.669a31.36,31.36,0,0,1,1.519,5.4,32.245,32.245,0,0,1,.542,5.985A29.665,29.665,0,0,1,579.334,120.1a38.214,38.214,0,0,1-12.462,6.525,51.1,51.1,0,0,1-15.66,2.312,56.273,56.273,0,0,1-11.093-1.081q-4.716,2.871-4.707,6.423a4.745,4.745,0,0,0,2.8,4.5,22.756,22.756,0,0,0,7.364,2.023,81.105,81.105,0,0,0,10.356.6q5.789,0,11.875.494a93.109,93.109,0,0,1,11.876,1.724,34.856,34.856,0,0,1,10.356,3.887,20.77,20.77,0,0,1,7.364,7.243,22.283,22.283,0,0,1,2.8,11.764A27.772,27.772,0,0,1,596.9,179.5a34.958,34.958,0,0,1-9.518,11.186,49.794,49.794,0,0,1-15.259,7.923,65.247,65.247,0,0,1-20.61,3A79.348,79.348,0,0,1,531.6,199.4a46.48,46.48,0,0,1-13.982-5.891,25.526,25.526,0,0,1-8.3-8.492,19.9,19.9,0,0,1-2.75-10.011,17.124,17.124,0,0,1,4.316-11.876,29.6,29.6,0,0,1,11.978-7.653,16.677,16.677,0,0,1-5.984-5.5,15.984,15.984,0,0,1-2.256-8.93,14.952,14.952,0,0,1,.783-4.661,18.669,18.669,0,0,1,2.405-4.763,23.441,23.441,0,0,1,4.074-4.465,28.006,28.006,0,0,1,5.788-3.785,31.767,31.767,0,0,1-12.044-10.9,29.352,29.352,0,0,1-4.362-16.1,29.558,29.558,0,0,1,11.334-23.8,38.079,38.079,0,0,1,12.659-6.525,53.863,53.863,0,0,1,15.949-2.284Zm26.6,106.7a6.926,6.926,0,0,0-1.763-4.912,11.6,11.6,0,0,0-4.81-2.955,34.908,34.908,0,0,0-7.113-1.557,70.779,70.779,0,0,0-8.641-.5h-9.424a40.208,40.208,0,0,1-9.377-1.081,21.953,21.953,0,0,0-6.628,5.351,10.991,10.991,0,0,0-2.5,7.122,9.791,9.791,0,0,0,1.323,4.959,11.078,11.078,0,0,0,4.223,3.971,25.1,25.1,0,0,0,7.5,2.6,58.094,58.094,0,0,0,11.289.932,56.394,56.394,0,0,0,11.68-1.053,27.728,27.728,0,0,0,8.1-2.908,12.384,12.384,0,0,0,4.661-4.409A10.977,10.977,0,0,0,577.813,170.48Zm-26.6-57.067a22.689,22.689,0,0,0,7.849-1.23A15.376,15.376,0,0,0,564.6,108.8a13.922,13.922,0,0,0,3.337-5.2,19.084,19.084,0,0,0,1.126-6.674A15.786,15.786,0,0,0,564.6,85.095a22.735,22.735,0,0,0-26.8,0,15.784,15.784,0,0,0-4.464,11.829,18.735,18.735,0,0,0,1.127,6.581,14.4,14.4,0,0,0,3.337,5.248,14.987,14.987,0,0,0,5.593,3.44A22.782,22.782,0,0,0,551.209,113.414Z"
                  transform="translate(163.008 20.518)"
                  fill="#fff"
                />
                <path
                  id="Path_183"
                  data-name="Path 183"
                  d="M589.364,166.259V65.587H603.6a7.635,7.635,0,0,1,5.2,1.37,7.915,7.915,0,0,1,1.966,4.708l1.473,12.174A47.838,47.838,0,0,1,624.9,69.11a26.649,26.649,0,0,1,16.293-5.4,21.066,21.066,0,0,1,12.37,3.44L650.42,85.311a3.724,3.724,0,0,1-1.277,2.508,4.322,4.322,0,0,1-2.646.736,16.5,16.5,0,0,1-4.028-.69,26.97,26.97,0,0,0-6.776-.69,20.556,20.556,0,0,0-12.957,4.176,32.1,32.1,0,0,0-9.126,12.22v62.687Z"
                  transform="translate(189.629 20.461)"
                  fill="#fff"
                />
                <path
                  id="Path_184"
                  data-name="Path 184"
                  d="M723.742,166.224h-10.9a11.757,11.757,0,0,1-5.4-1.035,6.626,6.626,0,0,1-2.945-4.176l-2.163-7.168a82.638,82.638,0,0,1-7.514,6.041,45.641,45.641,0,0,1-7.606,4.372,38.767,38.767,0,0,1-8.39,2.647,50.136,50.136,0,0,1-9.815.885,38.6,38.6,0,0,1-11.782-1.724,25.387,25.387,0,0,1-9.321-5.174,23.448,23.448,0,0,1-6.041-8.566,30.472,30.472,0,0,1-2.163-11.913,23.55,23.55,0,0,1,2.992-11.279,28.206,28.206,0,0,1,9.964-10.039,63.535,63.535,0,0,1,18.55-7.457,118.564,118.564,0,0,1,28.757-2.955v-5.845A22.5,22.5,0,0,0,695.7,87.755a15.584,15.584,0,0,0-12.417-4.894,30.049,30.049,0,0,0-9.815,1.37,38.08,38.08,0,0,0-6.823,3.1q-2.9,1.715-5.351,3.095a10.839,10.839,0,0,1-5.4,1.37,7.018,7.018,0,0,1-4.223-1.277,10.013,10.013,0,0,1-2.843-3.141l-4.418-7.756a59.893,59.893,0,0,1,41.946-15.9,40.514,40.514,0,0,1,15.753,2.9,33.486,33.486,0,0,1,11.728,8.044,34.487,34.487,0,0,1,7.307,12.314,47.281,47.281,0,0,1,2.508,15.707ZM676.63,151.1a32.7,32.7,0,0,0,6.871-.68,26.374,26.374,0,0,0,5.938-2.032,31.611,31.611,0,0,0,5.4-3.328,48.929,48.929,0,0,0,5.248-4.661V123.569a98.4,98.4,0,0,0-17.711,1.333,46.854,46.854,0,0,0-11.437,3.412,14.726,14.726,0,0,0-6.133,4.847,10.753,10.753,0,0,0-1.818,6.031,10.643,10.643,0,0,0,3.775,9.191,16.291,16.291,0,0,0,9.872,2.768Z"
                  transform="translate(205.72 20.495)"
                  fill="#fff"
                />
                <path
                  id="Path_185"
                  data-name="Path 185"
                  d="M820.4,142.779a4.958,4.958,0,0,1,3.729,1.669l10.4,11.288a57.124,57.124,0,0,1-21.253,16.387,73.222,73.222,0,0,1-30.286,5.7,71.549,71.549,0,0,1-28.412-5.4A62.59,62.59,0,0,1,733.034,157.4a65.718,65.718,0,0,1-13.693-22.968,86.148,86.148,0,0,1-4.764-29.149,78.493,78.493,0,0,1,5.3-29.3A66.185,66.185,0,0,1,757.82,38.1a79.122,79.122,0,0,1,29.6-5.351A69.914,69.914,0,0,1,815.045,37.8a64.668,64.668,0,0,1,20.264,13.395l-8.836,12.267a8.043,8.043,0,0,1-2.013,2.06,5.71,5.71,0,0,1-3.384.886,7.719,7.719,0,0,1-4.661-1.771,57.262,57.262,0,0,0-5.985-3.831,48.913,48.913,0,0,0-9.172-3.831,53.011,53.011,0,0,0-32.485,1.715,40.924,40.924,0,0,0-14.429,9.965,45.84,45.84,0,0,0-9.424,15.753,60.529,60.529,0,0,0-3.384,20.862,62.191,62.191,0,0,0,3.384,21.3,46.835,46.835,0,0,0,9.182,15.707,39.155,39.155,0,0,0,13.646,9.769,42.18,42.18,0,0,0,16.882,3.384,73.6,73.6,0,0,0,9.768-.587,41.557,41.557,0,0,0,8.044-1.865,35.686,35.686,0,0,0,6.963-3.29,43.348,43.348,0,0,0,6.526-4.959,9.336,9.336,0,0,1,2.06-1.426,5.2,5.2,0,0,1,2.405-.522Z"
                  transform="translate(229.902 10.514)"
                  fill="#ccc"
                />
                <path
                  id="Path_186"
                  data-name="Path 186"
                  d="M862.56,63.929a55.188,55.188,0,0,1,20.507,3.635,44.142,44.142,0,0,1,15.651,10.31A45.678,45.678,0,0,1,908.73,94.168a67.477,67.477,0,0,1,0,43.094,46.6,46.6,0,0,1-10.01,16.4,43.481,43.481,0,0,1-15.651,10.4,59.657,59.657,0,0,1-41.015,0,43.864,43.864,0,0,1-15.754-10.4,46.821,46.821,0,0,1-10.114-16.4,66.565,66.565,0,0,1,0-43.094A45.83,45.83,0,0,1,826.3,77.874a44.526,44.526,0,0,1,15.752-10.31,55.571,55.571,0,0,1,20.507-3.636Zm0,85.1A21.328,21.328,0,0,0,881.2,140.59a42.32,42.32,0,0,0,6.04-24.74A42.807,42.807,0,0,0,881.2,91.018a21.236,21.236,0,0,0-18.643-8.539,21.525,21.525,0,0,0-18.849,8.585,42.568,42.568,0,0,0-6.086,24.786,42.092,42.092,0,0,0,6.087,24.684A21.615,21.615,0,0,0,862.56,149.026Z"
                  transform="translate(261.452 20.561)"
                  fill="#ccc"
                />
                <path
                  id="Path_187"
                  data-name="Path 187"
                  d="M900.826,166.176V65.5h14.821a5.957,5.957,0,0,1,6.181,4.419l1.669,7.951a55.2,55.2,0,0,1,6.432-5.7A44.972,44.972,0,0,1,937.1,67.76a36.534,36.534,0,0,1,8.1-2.843,42.594,42.594,0,0,1,9.424-.979,36.114,36.114,0,0,1,14.626,2.8A28.9,28.9,0,0,1,979.9,74.592a34.467,34.467,0,0,1,6.479,12.118,51.293,51.293,0,0,1,2.209,15.464v64H964.353V102.044a21.514,21.514,0,0,0-4.27-14.281,15.848,15.848,0,0,0-12.809-5.052,25.254,25.254,0,0,0-11.782,2.843,42.257,42.257,0,0,0-10.4,7.755v72.866Z"
                  transform="translate(289.826 20.627)"
                  fill="#ccc"
                />
                <path
                  id="Path_188"
                  data-name="Path 188"
                  d="M983.78,166.176V65.5H998.6a5.956,5.956,0,0,1,6.18,4.419l1.669,7.951a55.267,55.267,0,0,1,6.433-5.7,44.958,44.958,0,0,1,7.168-4.418,36.559,36.559,0,0,1,8.1-2.843,42.572,42.572,0,0,1,9.424-.979,36.11,36.11,0,0,1,14.625,2.8,28.894,28.894,0,0,1,10.654,7.858,34.547,34.547,0,0,1,6.479,12.118,51.323,51.323,0,0,1,2.21,15.464v64h-24.236V102.044a21.514,21.514,0,0,0-4.269-14.281,15.849,15.849,0,0,0-12.809-5.052,25.252,25.252,0,0,0-11.772,2.843,42.189,42.189,0,0,0-10.4,7.755v72.867Z"
                  transform="translate(316.512 20.627)"
                  fill="#ccc"
                />
                <path
                  id="Path_189"
                  data-name="Path 189"
                  d="M1110.006,63.931a48.917,48.917,0,0,1,17.524,3.039,38.4,38.4,0,0,1,13.8,8.883,40.6,40.6,0,0,1,9.032,14.327,54.055,54.055,0,0,1,3.244,19.389,35,35,0,0,1-.241,4.568,7.319,7.319,0,0,1-.887,2.843,3.6,3.6,0,0,1-1.716,1.473,7.34,7.34,0,0,1-2.75.438h-62.24a34.674,34.674,0,0,0,8.391,22.772,26,26,0,0,0,19.238,7.262,33.34,33.34,0,0,0,10.162-1.37,47.819,47.819,0,0,0,7.455-3.048q3.19-1.669,5.594-3.039a9.379,9.379,0,0,1,4.661-1.37,5.274,5.274,0,0,1,2.554.587,5.672,5.672,0,0,1,1.863,1.669l7.067,8.836a40.382,40.382,0,0,1-9.031,7.9,50.552,50.552,0,0,1-10.452,5.108,57.1,57.1,0,0,1-11.091,2.7,79.416,79.416,0,0,1-10.942.783,53.8,53.8,0,0,1-19.575-3.486,43.7,43.7,0,0,1-15.708-10.31,48.311,48.311,0,0,1-10.5-16.881,65.314,65.314,0,0,1-3.831-23.3,55.7,55.7,0,0,1,3.337-19.389,46.633,46.633,0,0,1,9.564-15.846,45.072,45.072,0,0,1,15.213-10.655A50.133,50.133,0,0,1,1110.006,63.931Zm.494,17.375a22.371,22.371,0,0,0-16.593,5.985,29.529,29.529,0,0,0-7.655,16.984H1131.8a30.244,30.244,0,0,0-1.286-8.874,20.492,20.492,0,0,0-3.925-7.318,18.645,18.645,0,0,0-6.674-4.958A22.758,22.758,0,0,0,1110.5,81.307Z"
                  transform="translate(341.538 20.559)"
                  fill="#ccc"
                />
                <path
                  id="Path_190"
                  data-name="Path 190"
                  d="M1217.038,86.808a12.066,12.066,0,0,1-2.106,2.163,4.874,4.874,0,0,1-2.992.783,6.658,6.658,0,0,1-3.636-1.128q-1.77-1.128-4.223-2.554a31.555,31.555,0,0,0-5.836-2.554,26.857,26.857,0,0,0-8.39-1.128,25.594,25.594,0,0,0-11.185,2.3,21.194,21.194,0,0,0-8,6.627,29.829,29.829,0,0,0-4.765,10.449,56.043,56.043,0,0,0-1.564,13.889,54.357,54.357,0,0,0,1.715,14.327,30.659,30.659,0,0,0,4.96,10.551,21.361,21.361,0,0,0,7.857,6.479,23.78,23.78,0,0,0,10.4,2.209,25.764,25.764,0,0,0,9.377-1.426,29.471,29.471,0,0,0,6.031-3.142q2.451-1.715,4.27-3.141a6.438,6.438,0,0,1,4.073-1.426,4.926,4.926,0,0,1,4.419,2.256l6.973,8.836a43.839,43.839,0,0,1-8.734,7.9,47.2,47.2,0,0,1-9.769,5.108,49.587,49.587,0,0,1-10.448,2.7,74.3,74.3,0,0,1-10.7.783A44.673,44.673,0,0,1,1167.2,164.2a40.941,40.941,0,0,1-14.382-10.16,48.933,48.933,0,0,1-9.713-16.341,63.107,63.107,0,0,1-3.578-22.036,64.064,64.064,0,0,1,3.187-20.563,46.608,46.608,0,0,1,9.368-16.388,43.013,43.013,0,0,1,15.315-10.85,52.78,52.78,0,0,1,21.01-3.924,49.978,49.978,0,0,1,19.781,3.635,48.369,48.369,0,0,1,15.259,10.4Z"
                  transform="translate(366.628 20.548)"
                  fill="#ccc"
                />
                <path
                  id="Path_191"
                  data-name="Path 191"
                  d="M1249.358,174.891a26.479,26.479,0,0,1-20.124-7.457,28.451,28.451,0,0,1-7.066-20.507V90.764h-10.254a4.661,4.661,0,0,1-4.81-5.108V76.045L1223.3,73.4l5.1-27.48a4.858,4.858,0,0,1,1.817-3.039,5.763,5.763,0,0,1,3.579-1.081h12.566V73.491h26.5V90.764h-26.464v54.559a10.7,10.7,0,0,0,2.359,7.364,7.987,7.987,0,0,0,6.283,2.647,11.416,11.416,0,0,0,3.775-.541,20.684,20.684,0,0,0,2.647-1.128q1.126-.587,2.012-1.128a3.377,3.377,0,0,1,1.762-.541,2.8,2.8,0,0,1,1.771.541,8.346,8.346,0,0,1,1.473,1.622l7.262,11.773a36.67,36.67,0,0,1-12.173,6.674,45.33,45.33,0,0,1-14.207,2.284Z"
                  transform="translate(388.29 13.451)"
                  fill="#ccc"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Openinapp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="612px"
        height="161.36px"
        viewBox="0 0 612 161.36"
        xmlSpace="preserve"
      >
        <path
          className="st0"
          d="M190.89,97.17c-3.62-2.03-6.53-4.88-8.65-8.55c-2.12-3.66-3.23-7.73-3.23-12.41c0-4.58,1.11-8.65,3.23-12.31  c2.12-3.66,5.03-6.51,8.65-8.55c3.64-2.03,7.65-3.05,11.98-3.05c4.44,0,8.36,1.02,11.98,3.05c3.62,2.03,6.44,4.88,8.56,8.55  c2.12,3.66,3.13,7.73,3.13,12.31s-1.01,8.75-3.13,12.41c-2.12,3.66-4.94,6.51-8.65,8.55c-3.64,2.03-7.65,3.05-11.98,3.05  C198.55,100.23,194.53,99.21,190.89,97.17z M210.22,89.95c2.12-1.32,3.83-3.05,5.04-5.49c1.21-2.34,1.81-5.09,1.81-8.24  c0-3.15-0.6-5.9-1.81-8.24c-1.21-2.34-2.82-4.17-5.04-5.39c-2.1-1.22-4.63-1.83-7.35-1.83c-2.82,0-5.23,0.61-7.44,1.83  c-2.12,1.22-3.83,3.05-5.04,5.39c-1.21,2.34-1.81,5.09-1.81,8.24c0,3.15,0.6,5.9,1.81,8.24c1.21,2.34,2.92,4.17,5.04,5.49  c2.1,1.32,4.62,1.93,7.44,1.93S208.12,91.17,210.22,89.95z"
        />
        <path
          className="st0"
          d="M247.78,63.7c2.1-1.12,4.53-1.73,7.25-1.73c3.11,0,6.03,0.82,8.56,2.34c2.51,1.53,4.53,3.76,6.03,6.72  c1.51,2.85,2.22,6.21,2.22,10.07c0,3.87-0.71,7.22-2.22,10.07c-1.51,2.95-3.52,5.19-6.03,6.82c-2.53,1.63-5.45,2.44-8.56,2.44  c-2.72,0-5.14-0.61-7.14-1.73c-2.02-1.12-3.73-2.54-5.04-4.27v23.1h-9.26V62.58h9.26v5.39C244.05,66.24,245.66,64.82,247.78,63.7z   M260.95,75.2c-0.91-1.63-2.1-2.85-3.62-3.76c-1.51-0.81-3.11-1.32-4.82-1.32c-1.72,0-3.23,0.41-4.73,1.32  c-1.52,0.92-2.72,2.14-3.62,3.76c-0.91,1.63-1.42,3.56-1.42,5.8c0,2.24,0.51,4.17,1.42,5.8c0.91,1.63,2.1,2.95,3.62,3.76  c1.51,0.92,3.01,1.32,4.73,1.32c1.71,0,3.32-0.41,4.82-1.32c1.52-0.92,2.72-2.14,3.62-3.87c0.91-1.63,1.42-3.66,1.42-5.9  C262.27,78.76,261.86,76.83,260.95,75.2z"
        />
        <path
          className="st0"
          d="M312.59,83.95h-26.88c0.2,2.65,1.11,4.78,2.82,6.31c1.62,1.53,3.62,2.24,6.05,2.24c3.42,0,5.93-1.53,7.35-4.48  h10.06c-1.11,3.56-3.13,6.51-6.14,8.85c-3.02,2.34-6.75,3.46-11.07,3.46c-3.53,0-6.75-0.81-9.57-2.34  c-2.82-1.63-5.04-3.87-6.54-6.72c-1.61-2.95-2.31-6.31-2.31-10.07c0-3.87,0.8-7.22,2.31-10.17c1.51-2.95,3.72-5.19,6.54-6.72  c2.82-1.53,6.03-2.34,9.67-2.34c3.52,0,6.63,0.71,9.35,2.24c2.82,1.53,4.94,3.66,6.44,6.51c1.52,2.85,2.32,6,2.32,9.67  C312.8,81.71,312.7,82.93,312.59,83.95z M303.14,77.64c0-2.44-0.91-4.38-2.63-5.8c-1.71-1.42-3.72-2.14-6.14-2.14  c-2.31,0-4.22,0.71-5.84,2.14c-1.61,1.42-2.51,3.36-2.91,5.9h17.52V77.64z"
        />
        <path
          className="st0"
          d="M350.65,66.24c2.72,2.85,4.02,6.72,4.02,11.7v21.88h-9.25V79.16c0-2.95-0.71-5.19-2.22-6.82  c-1.51-1.63-3.42-2.34-5.94-2.34c-2.62,0-4.63,0.81-6.03,2.34c-1.51,1.63-2.22,3.87-2.22,6.82v20.55h-9.26V62.58H329v4.68  c1.21-1.63,2.82-2.85,4.73-3.76c1.91-0.92,4.03-1.42,6.34-1.42C344.41,61.97,347.93,63.39,350.65,66.24z"
        />
        <path
          className="st1"
          d="M364.13,56.58c-1.11-1.02-1.61-2.34-1.61-3.97c0-1.53,0.5-2.85,1.61-3.97c1.11-1.12,2.42-1.63,4.13-1.63  c1.61,0,3.01,0.51,4.12,1.63c1.11,1.02,1.61,2.34,1.61,3.97c0,1.53-0.5,2.85-1.61,3.97c-1.11,1.02-2.41,1.63-4.12,1.63  C366.64,58.1,365.24,57.59,364.13,56.58z M372.89,62.58v37.24h-9.26V62.58H372.89z"
        />
        <path
          className="st1"
          d="M413.05,66.24c2.72,2.85,4.03,6.72,4.03,11.7v21.88h-9.26V79.16c0-2.95-0.71-5.19-2.22-6.82  c-1.51-1.63-3.42-2.34-5.93-2.34c-2.63,0-4.63,0.81-6.05,2.34c-1.51,1.63-2.21,3.87-2.21,6.82v20.55h-9.26V62.58h9.26v4.68  c1.2-1.63,2.81-2.85,4.72-3.76c1.91-0.92,4.03-1.42,6.35-1.42C406.81,61.97,410.34,63.39,413.05,66.24z"
        />
        <path
          className="st0"
          d="M454.42,90.87H435.9l-3.01,8.95h-9.77l16.71-47.01h10.87l16.71,47.01h-9.86L454.42,90.87z M451.91,83.34  l-6.75-19.64l-6.74,19.64H451.91z"
        />
        <path
          className="st0"
          d="M487.85,63.7c2.12-1.12,4.53-1.73,7.25-1.73c3.13,0,6.03,0.82,8.56,2.34c2.51,1.53,4.53,3.76,6.03,6.72  c1.51,2.85,2.22,6.21,2.22,10.07c0,3.87-0.71,7.22-2.22,10.07c-1.51,2.95-3.52,5.19-6.03,6.82c-2.53,1.63-5.43,2.44-8.56,2.44  c-2.72,0-5.13-0.61-7.14-1.73c-2.02-1.12-3.73-2.54-5.04-4.27v23.1h-9.26V62.58h9.26v5.39C484.12,66.24,485.73,64.82,487.85,63.7z   M501.04,75.2c-0.92-1.63-2.12-2.85-3.64-3.76c-1.51-0.81-3.11-1.32-4.82-1.32c-1.71,0-3.23,0.41-4.73,1.32  c-1.52,0.92-2.72,2.14-3.62,3.76c-0.91,1.63-1.42,3.56-1.42,5.8c0,2.24,0.51,4.17,1.42,5.8c0.91,1.63,2.11,2.95,3.62,3.76  c1.51,0.92,3.02,1.32,4.73,1.32c1.71,0,3.32-0.41,4.82-1.32c1.52-0.92,2.72-2.14,3.64-3.87c0.91-1.63,1.4-3.66,1.4-5.9  C502.34,78.76,501.94,76.83,501.04,75.2z"
        />
        <path
          className="st0"
          d="M532.94,63.7c2.12-1.12,4.53-1.73,7.25-1.73c3.13,0,6.03,0.82,8.56,2.34c2.51,1.53,4.53,3.76,6.03,6.72  c1.51,2.85,2.22,6.21,2.22,10.07c0,3.87-0.71,7.22-2.22,10.07c-1.51,2.95-3.52,5.19-6.03,6.82c-2.53,1.63-5.43,2.44-8.56,2.44  c-2.72,0-5.13-0.61-7.14-1.73c-2.02-1.12-3.72-2.54-5.04-4.27v23.1h-9.26V62.58H528v5.39C529.11,66.24,530.82,64.82,532.94,63.7z   M546.03,75.2c-0.91-1.63-2.12-2.85-3.62-3.76c-1.52-0.81-3.13-1.32-4.83-1.32s-3.23,0.41-4.73,1.32c-1.51,0.92-2.72,2.14-3.62,3.76  c-0.91,1.63-1.42,3.56-1.42,5.8c0,2.24,0.51,4.17,1.42,5.8c0.91,1.63,2.12,2.95,3.62,3.76s3.02,1.32,4.73,1.32s3.32-0.41,4.83-1.32  c1.51-0.92,2.72-2.14,3.62-3.87c0.91-1.63,1.4-3.66,1.4-5.9C547.43,78.76,546.94,76.83,546.03,75.2z"
        />
        <path
          className="st1"
          d="M151.84,47.83c0-1.53-0.1-3.05-0.2-4.48c-0.4-3.87-1.11-7.53-2.31-11.09c-3.53-1.02-7.26-1.63-11.07-1.83  c-0.71,0-1.42-0.1-2.12-0.1c-12.88,0-24.56,5.19-33.12,13.63c-3.42-0.81-6.85-1.22-10.47-1.22c-9.76,0-18.82,2.95-26.37,8.04  c-3.13,2.14-6.03,4.58-8.56,7.33c0.8,3.77,2.02,7.33,3.62,10.68C67.09,81,77.86,90.26,90.94,94.12  c4.13,12.21,12.88,22.18,24.26,27.68c3.21,1.63,6.74,2.85,10.36,3.66c2.63-2.54,5.04-5.49,7.05-8.65  c4.73-7.53,7.55-16.38,7.55-25.95c0-3.56-0.41-7.02-1.11-10.28C147.01,72.04,151.84,60.44,151.84,47.83z M88.43,78.55  c0,1.53,0.1,3.05,0.2,4.48c-9.36-4.27-16.71-12.11-20.33-21.98c6.54-5.39,14.99-8.75,24.15-8.75c1.21,0,2.32,0.1,3.53,0.2  C91.25,60.04,88.43,68.99,88.43,78.55z M98.7,85.98c-0.51-2.44-0.71-4.88-0.71-7.43c0-8.95,3.02-17.09,8.06-23.61  c10.36,3.97,18.52,12.31,22.24,22.79c-6.53,5.39-14.99,8.75-24.15,8.75C102.32,86.29,100.51,86.18,98.7,85.98z M122.56,114.57  c-8.97-3.46-16.21-10.07-20.54-18.62c0.7,0,1.4,0.1,2.12,0.1c9.76,0,18.82-2.95,26.37-8.04c0.1,1.02,0.1,1.93,0.1,2.95  C130.6,99.82,127.68,107.96,122.56,114.57z M113.4,47.62c6.34-4.78,14.19-7.63,22.75-7.63c1.91,0,3.73,0.1,5.43,0.41  c0.5,2.44,0.7,4.88,0.7,7.43c0,8.24-2.51,15.87-6.94,22.08C130.71,60.24,122.95,52.3,113.4,47.62z"
        />
        <path
          className="st1"
          d="M92.55,105.42c0,0-0.4-4.07-4.73-8.24c-4.32-4.17-8.34-4.48-8.34-4.48c-28.09-5.29-23.36,37.65-23.36,37.65  S98.7,133.6,92.55,105.42z M65.18,120.78c0,0-0.7-20.15,12.39-18.72c0,0,1.91,0,3.81,1.83c1.91,1.83,1.91,3.76,1.91,3.76  C85.1,120.78,65.18,120.78,65.18,120.78z"
        />
      </svg>
    ),
  },
];

export const words = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "HTML/CSS",
  "Firebase",
  "React Query",
  "Redux",
  "Framer Motion",
];
