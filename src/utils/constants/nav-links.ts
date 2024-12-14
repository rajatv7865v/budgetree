import {
  HelpCircleIcon,
  LineChartIcon,
  Link2Icon,
  LockIcon,
  NewspaperIcon,
  QrCodeIcon,
} from "lucide-react";

export const NAV_LINKS = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Products",
    href: "/products",
    menu: [
      {
        title: "LoyaltyX", // https://thriwe.com/
        tagline: "Shorten links and track their performance.",
        href: "/products/loyalty",
        icon: Link2Icon,
      },
      {
        title: "UPI Reward", // https://www.sprintverify.in/kyc-verification-api.html
        tagline: "Secure your links with a password.",
        href: "/products/kyc360",
        icon: LockIcon,
      },
      {
        title: "Payout", // https://bulkpe.in
        tagline: "Gain insights into who is clicking your links.",
        href: "/products/payout",
        icon: LineChartIcon,
      },
      {
        title: "Rewards", //
        tagline: "Use QR codes to reach your audience.",
        href: "/products/rewards",
        icon: QrCodeIcon,
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "API Docs",
    href: "/resources",
    menu: [
      {
        title: "Blog",
        tagline: "Read articles on the latest trends in tech.",
        href: "/resources/blog",
        icon: NewspaperIcon,
      },
      {
        title: "Help",
        tagline: "Get answers to your questions.",
        href: "/resources/help",
        icon: HelpCircleIcon,
      },
    ],
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];
