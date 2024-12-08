import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL =
  "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
  {
    name: "Asana",
    logo: "/assets/redFM.png",
  },
  {
    name: "Tidal",
    logo: "/assets/download 1.png",
  },
  {
    name: "Innovaccer",
    logo: "/assets/images 1.png",
  },
  {
    name: "Linear",
    logo: "/assets/astral.png",
  },
 
] as const;

export const PROCESS = [
  {
    title: "Organize Your Links",
    description:
      "Efficiently categorize and tag your links for quick access and easy management.",
    icon: FolderOpenIcon,
  },
  {
    title: "Shorten and Customize",
    description:
      "Create concise, branded links that are easy to share and track.",
    icon: WandSparklesIcon,
  },
  {
    title: "Analyze and Optimize",
    description:
      "Gain insights into link performance and optimize for better engagement.",
    icon: BarChart3Icon,
  },
] as const;

export const FEATURES = [
  {
    title: "Link shortening",
    description: "Create short links that are easy to remember and share.",
  },
  {
    title: "Advanced analytics",
    description: "Track and measure the performance of your links.",
  },
  {
    title: "Password protection",
    description: "Secure your links with a password.",
  },
  {
    title: "Custom QR codes",
    description: "Generate custom QR codes for your links.",
  },
  {
    title: "Link expiration",
    description: "Set an expiration date for your links.",
  },
  {
    title: "Team collaboration",
    description: "Share links with your team and collaborate in real-time.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Jessica M., HR Manager",
    username: "@jessicam",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review:
      "Budgetree made our employee appreciation program effortless. The gifting options are fantastic, and the platform is super user-friendly.",
  },
  {
    name: "Rahul K., Business Development Head",
    username: "@rahulk",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review:
      "As a corporate partner, Budgetree has helped us create meaningful connections with our clients through personalized rewards.",
  },
  {
    name: "Anita P., Operations Manager",
    username: "@anitap",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    review:
      "Our team loves the flexibility and variety of rewards Budgetree offers. It’s never been easier to show our appreciation for their hard work.",
  },
  {
    name: "Steven L., Marketing Director",
    username: "@stevenl",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    review:
      "Budgetree makes gifting simple and impactful. Our clients love receiving these thoughtful rewards, and it’s strengthened our relationships significantly.",
  },
  {
    name: "Priya T., CEO",
    username: "@priyat",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
    review:
      "We saw an immediate boost in employee morale after implementing Budgetree’s reward system. It’s now a core part of our engagement strategy.",
  },
  {
    name: "John D., Product Manager",
    username: "@johnd",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    review:
      "The process of selecting and sending rewards through Budgetree is seamless. Their customer support is always there to assist, making it a hassle-free experience.",
  },
] as const;
