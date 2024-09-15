"use client";

import React, { useEffect } from "react";
import SectionHeading from "../section-heading";
import Heading from "../common/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card-effect";
import { Drawer, DrawerContent } from "../common/Drawer";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import loadingLottie from "@/components/animation/loading-lottie.json";
import { projects } from "@/lib/constants/data";
import dynamic from "next/dynamic";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { ScreenSize } from "@/lib/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { useRouter } from "next/navigation";
const TinderCard = dynamic(() => import("react-tinder-card"), { ssr: false });
export default function MyProjects() {
  const { ref } = useSectionInView("Projects");
  const [detailModal, setDetailModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<number>(0);
  const [swipedCards, setSwipedCards] = React.useState(new Set());
  const [restore, setRestore] = React.useState(false);
  const [cards, setCards] = React.useState(projects);
  const router = useRouter();
  const onSwipe = (direction: string, identifier: number) => {
    setSwipedCards((prev) => new Set(prev).add(identifier));
  };

  const onCardLeftScreen = (identifier: number) => {
    setCards((prev) => prev.filter((_, index) => index !== identifier));
  };

  const restoreCards = () => {
    setCards(projects);
    setSwipedCards(new Set());
    setRestore(false);
  };

  useEffect(() => {
    if (swipedCards.size === projects.length) {
      setRestore(true);
    }
  }, [swipedCards]);

  useEffect(() => {
    if (restore) {
      setTimeout(() => {
        restoreCards();
      }, 3000);
    }
  }, [restore]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 1.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 7,
      },
    },
  };

  return (
    <>
      <Heading text="My Projects"></Heading>
      <section
        id="projects"
        ref={ref}
        className=" w-full px-10 lg:px-10 h-[70vh]"
      >
        <div className="relative flex items-center justify-center h-full w-full antialiased">
          {cards.map((card, index) => (
            <TinderCard
              key={index}
              preventSwipe={["up", "down"]}
              swipeThreshold={0.5}
              className="absolute top-16  w-fit "
              onSwipe={(dir) => onSwipe(dir, index)}
              onCardLeftScreen={() => onCardLeftScreen(index)}
            >
              <div
                className={cn(
                  "w-full px-4 shadow-lg text-black select-none bg-cover bg-center rounded-3xl hover:-translate-y-12 transition-transform duration-300 ease-in-out",
                  {
                    "rotate-[-4deg]": index === 0,
                    "rotate-[4deg]": index === 1,
                  }
                )}
                style={{
                  transformOrigin: "center 200%",
                }}
              >
                <CardContainer className="w-full h-full">
                  <CardBody className="relative group/card hover:shadow-2xl shadow-emerald-500/[0.1] bg-black border-white/[0.2] max-[460px]:w-[15rem]   w-[20rem] h-[22rem] md:h-[24rem]  rounded-xl p-4 sm:p-6 border-2 overflow-hidden">
                    <CardItem
                      translateZ="50"
                      className="text-lg sm:text-xl font-bold  text-white"
                    >
                      {card.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className=" text-xs sm:text-sm max-w-sm mt-2 text-neutral-300"
                    >
                      {card.description}
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      className="w-full mt-4 overflow-hidden rounded-2xl relative"
                    >
                      <div className="overflow-hidden relative h-40 flex items-center justify-center">
                        <div className="absolute inset-0 blur-[10px] -z-1 rounded-lg scale-110 overflow-hidden">
                          <img
                            src={card.imageUrl}
                            alt="Image"
                            className="w-full h-full rounded-lg select-none"
                            draggable={false}
                          />
                        </div>
                        <img
                          src={card.imageUrl}
                          className="w-full object-contain z-10 relative rounded-2xl group-hover/card:shadow-xl aspect-square"
                          alt="thumbnail"
                        />
                      </div>
                    </CardItem>
                    <CardItem as="button" translateZ="60" className="mt-4">
                      <button
                        className="bg-black text-white  text-xs rounded-lg font-semibold hover:bg-black/[0.8] hover:shadow-lg"
                        onTouchStart={() => {
                          setSelectedCard(index);
                          setDetailModal(true);
                        }}
                        onClick={() => {
                          setSelectedCard(index);
                          setDetailModal(true);
                        }}
                      >
                        View Project
                      </button>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </TinderCard>
          ))}
          {restore && (
            <Lottie
              animationData={loadingLottie}
              play
              loop
              className="absolute h-28 w-28 bg-transparent"
            />
          )}
        </div>

        <GlassMorphedDrawer open={detailModal} onOpenChange={setDetailModal}>
          <motion.div
            className="text-white flex relative h-dvh flex-col justify-start items-start gap-4 overflow-hidden scrollbar-hide "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="text-3xl font-bold my-4"
              variants={childVariants}
            >
              <SectionHeading
                text={projects[selectedCard].title}
                className="text-3xl"
                right={false}
              />
            </motion.div>

            <motion.img
              src={projects[selectedCard].imageUrl}
              alt="thumbnail"
              className="rounded-2xl  w-full overflow-x-hidden select-none min-h-[180px] h-fit"
              draggable={false}
            />

            <motion.p
              className="text-sm mb-2 text-justify rounded-xl text-white py-4  font-markpro h-4/5 overflow-y-scroll scrollbar-hide "
              variants={childVariants}
            >
              {projects[selectedCard].longDescription}
            </motion.p>

            <motion.button
              role="link"
              variants={childVariants}
              className="px-3 py-2  text-lg sm:text-sm mb-6 w-full md:w-fit font-condensed !rounded-xl font-bold sm:font-semibold bg-white hover:bg-purple   text-black mt-4 md:mt-0"
              onClick={() => {
                window.open(projects[selectedCard].liveLink, "_blank");
              }}
            >
              View Live
            </motion.button>
          </motion.div>
        </GlassMorphedDrawer>
      </section>
    </>
  );
}

type GlassMorphedDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children?: React.ReactNode;
};

const GlassMorphedDrawer = ({
  open,
  onOpenChange,
  ...props
}: GlassMorphedDrawerProps) => {
  const { width } = useWindowSize();
  if (!width) return null;

  return (
    <>
      {width < ScreenSize.MOBILE ? (
        <Drawer open={open} onOpenChange={onOpenChange} direction="right">
          <DrawerContent
            className="h-full w-full bg-black rounded-md overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none    px-6 sm:px-[20%]"
            showPill={false}
          >
            {props.children}
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogClose className="outline-none" />
          <DialogContent className="border-none bg-transparent rounded-2xl bg-black  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
            <DialogHeader>
              <DialogDescription className="border-none">
                {props.children}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
