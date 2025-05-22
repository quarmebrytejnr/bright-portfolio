import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  active?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ active, icon, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative timeline-item",
          active && "timeline-item-active",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-secondary border-4 border-white dark:border-gray-900">
            {icon}
          </div>
        )}
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

interface TimelineProps {
  children?: React.ReactNode;
  className?: string;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative pl-8 border-l-2 border-primary/20 dark:border-gray-700 space-y-12",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

export { Timeline, TimelineItem };
