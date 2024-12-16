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
        title: "LoyaltyX", // https:// .com/
        tagline: "Loyalty Stack for engagement",
        href: "/products/loyalty",
        icon: Link2Icon,
      },
      {
        title: "UPI Rewards", // https://www.sprintverify.in/kyc-verification-api.html
        tagline: "UPI Rewards stack.",
        href: "/products/kyc360",
        icon: LockIcon,
      },
      {
        title: "Payout", // https://bulkpe.in
        tagline: "Corporate payments solution.",
        href: "/products/payout",
        icon: LineChartIcon,
      },
      {
        title: "RewardX", //
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
        title: "API",
        tagline: "Comprehensive API documentation",
        href: "/resources/blog",
        icon: NewspaperIcon,
      },
      {
        title: "Blogs",
        tagline: "Get answers to your questions.",
        href: "/resources/help",
        icon: HelpCircleIcon,
      },
    ],
  },

];
