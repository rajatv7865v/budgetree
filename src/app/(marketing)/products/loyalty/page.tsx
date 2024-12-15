import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Steper from "@/components/Steper";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../ContactForm";

const LinkShorteningPage = () => {
  const STATSTICS = [
    {
      name: "Rewards Facilitated",
      count: "400cr ",
    },

    {
      name: "Users",
      count: "2,200",
    },
    {
      name: "Brands",
      count: "300",
    },
  ];
  const Stepers = [
    {
      name: "Program Design",
      discriptions: (
        <ul className='list-disc pt-3 text-sm text-neutral-500 space-y-1'>
          <li>
            <b className='text-[#204BA2]'>Goal and outcome </b>planning of the
            program.
          </li>
          <li>
            Mapping relevant offers by{" "}
            <b className='text-[#204BA2]'> demographic, industry & region.</b>{" "}
          </li>
          <li>
            Explore <b className='text-[#204BA2]'>redemption models</b> based on
            the current stack & end goals.
          </li>
          <li>
            Final deliverables, project plan and{" "}
            <b className='text-[#204BA2]'>client sign-offs.</b>
          </li>
        </ul>
      ),
    },
    {
      name: "Solution Development",
      discriptions: (
        <ul className='list-disc pt-3 text-sm text-neutral-500 space-y-1'>
          <li>
            {" "}
            <b className='text-[#204BA2]'>Onboarding</b> new{" "}
            <b className='text-[#204BA2]'> merchant and offers.</b>
          </li>
          <li>
            Developing{" "}
            <b className='text-[#204BA2]'> customized tech solution.</b>{" "}
          </li>
          <li>
            {" "}
            <b className='text-[#204BA2]'> Train & prepare</b> operations and
            customer service teams.
          </li>
          <li>
            Quality checks and <b className='text-[#204BA2]'>program launch.</b>
          </li>
        </ul>
      ),
    },
    {
      name: "Quality checks and program launch",
      discriptions: (
        <ul className='list-disc pt-3 text-sm text-neutral-500 space-y-1'>
          <li>
            Ensure <b className='text-[#204BA2]'>data security</b> / follow all
            data protocols.
          </li>
          <li>
            Regular <b className='text-[#204BA2]'>tech upgrades.</b>
          </li>
          <li>
            Booking and{" "}
            <b className='text-[#204BA2]'> redemption management.</b>{" "}
          </li>
          <li>
            Periodic reporting &{" "}
            <b className='text-[#204BA2]'>customer support.</b>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <>
      <MaxWidthWrapper>
        <AnimationContainer delay={0.1} className='w-full'>
          <div className='flex flex-col items-center justify-center py-10 max-w-xl mx-auto'>
            <MagicBadge title='LoyaltyX' />
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight'>
              Unleash the power of loyalty with Budgetree's LoyaltyX platform.
            </h1>
            <p className='text-base md:text-lg mt-6 text-center text-muted-foreground'>
              Simplify your workflow with powerful rewards management tools.
              Create campaigns, track rewards, and optimize your strategy with
              ease.
            </p>
            <div className='flex items-center justify-center gap-x-4 mt-8'>
              <Button size='sm' asChild>
                <Link href='/dashboard'>Get started</Link>
              </Button>
              <Button size='sm' variant='outline' asChild>
                <Link href='/blog'>Learn more</Link>
              </Button>
            </div>
          </div>
    
        </AnimationContainer>

        <AnimationContainer
          delay={0.2}
          className='relative md:py-32 px-2 bg-transparent w-full'
        >
          <div className='absolute md:top-[10%] left-1/2 bg-gradient-to-r from-[#1D398D] to-[#2079D8] via-[#2079D8] w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow'></div>
          <div className='-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl'>
            <BorderBeam size={250} duration={12} delay={9} />
            <Image
              src='/assets/shorten-links.svg'
              alt='Dashboard'
              width={1200}
              height={1200}
              quality={100}
              className='rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border'
            />
            <div className='absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40'></div>
            <div className='absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8'>
            {STATSTICS.map((process: any, id: any) => (
              <AnimationContainer delay={0.2 * id} key={id}>
                <MagicCard className='group md:py-8'>
                  <div className='flex flex-col items-center justify-center gap-2 w-full'>
                    <h6 className='text-3xl font-bold'>{process.count}+</h6>
                    <p className='text-lg font-heading font-semibold uppercase text-center'>
                      {process?.name}
                    </p>
                  </div>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
        </AnimationContainer>

        <div className='pt-40'>
          <h6 className='text-3xl font-semibold'>
            Stack of Benefits. Extraordinary Offers.
          </h6>
          <p className='pt-2 text-'>
            The most diverse range of loyalty benefits that can be stitched
            together to give you a world of options to choose from, ensuring
            that your loyalty programs are fresh, unique, personalized and
            impactful.
          </p>
          <section className='grid grid-cols-3 gap-4 pt-10'>
            <div className='flex flex-col items-start h-min gap-6'>
              <AnimationContainer delay={0.2}>
                <MagicCard className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        Travel Benefits
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Elevating every journey into a premium travel experience
                        for your valued stakeholders
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Airport Transfers</li>
                        <li>Airport Dining</li>
                        <li>Priority Check-ins</li>
                        <li>Airport Lounge Access</li>
                      </ul>
                    </CardContent>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            </div>
            <div className='flex flex-col items-start h-min gap-6'>
              <AnimationContainer delay={0.2}>
                <MagicCard className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        Dining Benefits
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Global culinary experiences with a depth of local
                        flavors, served with the dash of convenience
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Deals & Offers</li>
                        <li>Digital Voucher</li>
                        <li>Offline & Retail Card Offers</li>
                      </ul>
                    </CardContent>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            </div>
            <div className='flex flex-col items-start h-min gap-6'>
              <AnimationContainer delay={0.2}>
                <MagicCard className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        Sports Benefits
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Give your esteemed partners a gift of fitness, enhanced
                        access to global sporting facilities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Golf Games & Coaching</li>
                        <li>Football Coaching</li>
                        <li>Basketball Coaching</li>
                        <li>Access Best Fitness Centers</li>
                      </ul>
                    </CardContent>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            </div>
            <div className='flex flex-col items-start h-min gap-6'>
              <AnimationContainer delay={0.2}>
                <MagicCard className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        Healthcare Benefits
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Care, comfort and convenience - everything is easily
                        accessible for your customer
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Doctor On Call</li>
                        <li>Senior Care</li>
                        <li>24/7 Ambulance</li>
                        <li>Pharmacy</li>
                      </ul>
                    </CardContent>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            </div>
            <div className='flex flex-col items-start h-min gap-6'>
              <AnimationContainer delay={0.2}>
                <MagicCard className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        Lifestyle Benefits
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Delight in knowing that your valued stakeholders'
                        wellbeing is nurtured, their leisure is exquisite.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Elite Spa Sessions</li>
                        <li>Yoga Sessions</li>
                        <li>HighStreet Shopping Offers</li>
                      </ul>
                    </CardContent>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            </div>
            <div className='flex flex-col items-start h-min gap-6'>
              <AnimationContainer delay={0.2}>
                <MagicCard className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        Digital Benefits
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Designed for the tech-savvy customer who's always
                        on-the-go
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Streaming Apps</li>
                        <li>Online Shopping Perks</li>
                        <li>Online Food & Essentials Ordering</li>
                        <li>Gaming Platform Offers</li>
                      </ul>
                    </CardContent>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            </div>
          </section>
          <section className='pt-40 w-full flex items-center gap-20'>
            <Steper Stepers={Stepers} />
            <ContactForm />
          </section>
        </div>
        <AnimationContainer delay={0.3} className='w-full'>
          <div className='py-14'>
            <div className='mx-auto px-4 md:px-8'>
              <h2 className='text-center text-sm font-medium font-heading text-neutral-400 uppercase'>
                Trusted by the best in the industry
              </h2>
              <div className='mt-8'>
                <ul className='flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8'>
                  {COMPANIES.map((company) => (
                    <li key={company.name}>
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        className='w-28 h-auto'
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='pt-20'>
        <AnimationContainer delay={0.4} className='w-full'>
          <LampContainer className='max-w-2xl mx-auto'>
            <div className='flex flex-col items-center justify-center relative w-full text-center'>
              <h2 className='text-black py-4 text-center text-4xl font-semibold font-heading tracking-tight md:text-5xl mt-8'>
                Powerup your loyalty strategy
              </h2>
              <p className='text-black mt-6 max-w-lg mx-auto text-base md:text-lg'>
                Take control of your rewards with advanced features and
                real-time insights. Simplify your workflow and achieve more
                engagement.
              </p>
              <div className='mt-6'>
                <Button asChild>
                  <Link href='/auth/sign-up' className='flex items-center'>
                    Get started for free
                    <ArrowRightIcon className='w-4 h-4 ml-2' />
                  </Link>
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>
    </>
  );
};

export default LinkShorteningPage;
