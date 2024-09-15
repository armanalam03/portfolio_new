import { cn } from "@/lib/utils";
import { SquareMenuIcon } from "lucide-react";
import { IconType } from "react-icons";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  strokeWidth?: number;
}

const defaultClasses = "text-lg";
const defaultStrokeWidth = 2;
export function IconComponent(Icon: React.ComponentType<IconProps>) {
  const WrappedIcon: React.FC<IconProps> = ({
    className,
    strokeWidth = defaultStrokeWidth,
    ...props
  }) => (
    <Icon
      className={cn(defaultClasses, className)}
      strokeWidth={strokeWidth}
      {...props}
    />
  );

  // Assign a display name for better debugging
  WrappedIcon.displayName = `IconComponent(${
    Icon.displayName || Icon.name || "Icon"
  })`;

  return WrappedIcon;
}

export const Hamburger = IconComponent(SquareMenuIcon as IconType);
