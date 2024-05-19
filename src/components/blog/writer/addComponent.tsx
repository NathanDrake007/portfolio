"use client";

import * as React from "react";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideIcon,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ContentType } from "@/lib/types";

type Status = {
  value: string;
  label: string;
  icon: LucideIcon;
};

const statuses: Status[] = [
  {
    value: "Paragraph",
    label: "Paragraph",
    icon: HelpCircle,
  },
  {
    value: "Heading",
    label: "Heading",
    icon: Circle,
  },
  {
    value: "Image",
    label: "Image",
    icon: ArrowUpCircle,
  },
  {
    value: "Link",
    label: "Link",
    icon: CheckCircle2,
  },
  {
    value: "Code",
    label: "Code",
    icon: XCircle,
  },
];

export function AddComponent({
  setContentType,
}: {
  setContentType: React.Dispatch<React.SetStateAction<ContentType>>;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center space-x-4 text-black">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="justify-start">
            +
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      console.log(value);
                      setContentType(value as ContentType);
                      setOpen(false);
                    }}
                  >
                    <status.icon className="mr-2 h-4 w-4" />
                    <span>{status.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
