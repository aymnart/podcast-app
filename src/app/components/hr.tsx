import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface HrProps {
  className?: string;
  children?: ReactNode;
  style?: string;
}

const Hr: FC<HrProps> = ({ className, children, style = "default" }) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center h-10 w-full",
        className
      )}
    >
      {/* styles */}
      <div className="absolute inset-0 flex items-center">
        {style === "gradient" && (
          <span className="w-[90%] mx-auto h-[3px] bg-gradient-to-r from-transparent via-foreground to-transparent" />
        )}
        {style === "default" && (
          <span className="w-[90%] mx-auto h-[3px] bg-foreground rounded-full" />
        )}
      </div>
      {/* types */}

      {
        <div className="absolute flex items-center justify-center bg-background w-10 h-10 rounded-full">
          {children}
        </div>
      }
    </div>
  );
};

export default Hr;
