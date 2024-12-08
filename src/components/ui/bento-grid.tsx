import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  CalendarIcon,
  Link2Icon,
  SearchIcon,
  WaypointsIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";

export const CARDS = [
  {
    Icon: Link2Icon,
    name: "LoyaltyX",
    description:
      "Process meticulously crafted to ensure seamless execution and exceptional outcomes.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className='absolute top-10 left-10 origin-top bg-[#f7fafb] rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0'>
        <CardHeader>
          <CardTitle className='text-neutral-800'>LoyaltyX</CardTitle>
          <CardDescription className='text-neutral-700'>
            Process meticulously crafted to ensure seamless execution and
            exceptional outcomes.
          </CardDescription>
        </CardHeader>
        <CardContent className='-mt-4'>
          <Label>Search for Automation</Label>
          <Input
            type='text'
            placeholder='Search for Automation...'
            className='w-full focus-visible:ring-0 focus-visible:ring-transparent'
          />
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: SearchIcon,
    name: "RewardX",
    description:
      "Get rewards in a form of digital gift cards from over 250 top brands.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Command className='absolute right-10 top-10 w-[70%] text-neutral-700 bg-[#f7fafb] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2'>
        <Input placeholder='Type to search...' />
        <div className='mt-1 cursor-pointer'>
          <div className='px-4 py-2 hover:bg-[#204ba2] hover:text-white rounded-md'>
            Amazon Gift Card
          </div>
          <div className='px-4 py-2 hover:bg-[#204ba2] hover:text-white rounded-md'>
            Amazon E-Gift Card
          </div>
          <div className='px-4 py-2 hover:bg-[#204ba2] hover:text-white rounded-md'>
            Flipkart E-Gift Card
          </div>
          <div className='px-4 py-2 hover:bg-[#204ba2] hover:text-white rounded-md'>
            Zomato E-Gift Card
          </div>
          <div className='px-4 py-2 hover:bg-[#204ba2] hover:text-white rounded-md'>
            Swiggy E-Gift Card
          </div>
        </div>
      </Command>
    ),
  },
  {
    Icon: WaypointsIcon,
    name: "Connect your apps",
    description: "Integrate with your favorite apps and services.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
    background: (
      <Integrations className='absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105' />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Payouts",
    description: "Send payouts to anyone, anywhere, without hassle.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode='single'
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className='absolute right-0 top-10 origin-top bg-[#f7fafb] text-black rounded-md border border-[#204BA2] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:text-[#204BA2]'
      />
    ),
  },
];

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
      "bg-gray shadow-sm",
      className
    )}
  >
    <div className=''>{background}</div>
    <div className='pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
      <Icon className='h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75' />
      <h3 className='text-xl font-semibold text-neutral-600'>{name}</h3>
      <p className='max-w-lg text-neutral-400'>{description}</p>
    </div>

    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Link
        href={href}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "cursor-pointer",
        })}
      >
        {cta}
        <ArrowRightIcon className='ml-2 h-4 w-4' />
      </Link>
    </div>
    <div className='pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10' />
  </div>
);

export { BentoCard, BentoGrid };
