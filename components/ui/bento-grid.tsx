import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
  layoutId,
  id,
}: {
  id: string;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  layoutId?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "row-span-1 rounded-xl group/bento shadow-input shadow-none p-4 bg-black border-white/[0.2]  border  justify-between flex flex-col space-y-4",
        className
      )}
      layoutId={layoutId}
      onClick={onClick}
    >
      {header}
      <motion.div className="">
        {icon}
        <motion.div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </motion.div>
        <motion.div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
