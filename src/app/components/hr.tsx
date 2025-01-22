import { cn } from "@/lib/utils";
import { FC } from "react";

interface HrProps {
  className?: string;
}

const Hr: FC<HrProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center h-10 w-full",
        className
      )}
    >
      <div className="absolute inset-0 flex items-center">
        <span className="w-[90%] mx-auto h-[3px] bg-gradient-to-r from-transparent via-foreground to-transparent"></span>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[calc(2.6rem+0.6vw)] h-7 bg-foreground border-[10px] border-background rounded-full" />
    </div>
  );
};

export default Hr;
