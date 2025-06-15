import * as React from "react";
import { cn } from "@/lib/utils";
import { FolderIcon, TagIcon } from "lucide-react";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "category";
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
          variant === "default"
            ? "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20"
            : "bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-500/10 dark:text-purple-400 dark:ring-purple-500/20",
          className
        )}
        {...props}
      >
        {variant === "category" ? (
          <FolderIcon className="h-3 w-3" />
        ) : (
          <TagIcon className="h-3 w-3" />
        )}
        {children}
      </span>
    );
  }
);
Tag.displayName = "Tag";

export { Tag };
