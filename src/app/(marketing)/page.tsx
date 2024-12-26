import {
  AnimationContainer,
  MaxWidthWrapper,
  PricingCards,
  Wrapper,
  Container,
} from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
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
import { cn, COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { currentUser } from "@clerk/nextjs/server";
import {
  ArrowRightIcon,
  CreditCardIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import TypingEffect from "./Type";
import Marquee from "@/components/ui/marquee";
// import { Container } from "postcss";

const HomePage = async () => {
  const reviews = [
    {
      logo: "/assets/integrations/zoom.jpeg",
      title: "Zoom revolutionizes video communication.",
    },
    {
      logo: "/assets/integrations/bamboohr.png",
      title: "BambooHR is a leading HR software solution.",
    },
    {
      logo: "/assets/integrations/hubspot.png",
      title: "HubSpot is an all-in-one CRM platform",
    },
    {
      logo: "/assets/integrations/salesforce.png",
      title:
        "Salesforce is a powerful CRM platform for managing customer relationships",
    },
    {
      logo: "/assets/integrations/typeform.webp",
      title: "Typeform makes data collection engaging ",
    },
    {
      logo: "/assets/integrations/salesforce.png",
      title:
        "Salesforce is a powerful CRM platform for managing customer relationships",
    },
    {
      logo: "/assets/integrations/bamboohr.png",
      title: "BambooHR is a leading HR software solution.",
    },
    {
      logo: "/assets/integrations/typeform.webp",
      title: "Typeform makes data collection engaging .",
    },
    {
      logo: "/assets/integrations/zapiier.webp",
      title: "Zapier connects your apps and automates workflows.",
    },
    {
      logo: "/assets/integrations/zoho.png",
      title: "Zoho offers a suite of cloud-based applications .",
    },
    {
      logo: "/assets/integrations/zoom.jpeg",
      title: "Zoom revolutionizes video communication",
    },
  ];

  const user = await currentUser();
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <div className='overflow-x-hidden scrollbar-hide size-full  bg-transparent '>
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background'>
          <AnimationContainer className='flex flex-col items-center justify-center w-full text-center '>
            <button className='group relative grid overflow-hidden rounded-full bg-white px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200'>
              <span>
                <span className="spark mask-gradient absolute text-black inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className=' absolute inset-[1px] bg-white  rounded-full bg-white-800 text-white transition-colors duration-200 group-hover:bg-blue-800 group-hover:text-white' />
              <span className='h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20'></span>
              <span className='z-10 py-0.5 text-sm flex text-black items-center justify-center gap-1 group-hover:text-white'>
                ✨ Deliver Instant Rewards
                <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              </span>
            </button>
            <h1 className='text-foreground   text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-7xl !leading-[1.15] w-full font-heading'>
              Your Gateway to{" "}
              <span className=''>
                <TypingEffect />
              </span>
            </h1>
            <p className='mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance'>
              Create unique and personalized reward experiences
              <br className='hidden md:block' />
              <span className='hidden md:block'>
                with Budgetree’s intelligent automation platform.
              </span>
            </p>
            <div className='flex items-center justify-center whitespace-nowrap gap-4 z-50'>
              <Button asChild>
                <Link
                  href='https://app.budgetree.in/account/get_started'
                  className='flex items-center'
                >
                  Start creating for free
                  <ArrowRightIcon className='w-4 h-4 ml-2' />
                </Link>
              </Button>
            </div>
          </AnimationContainer>

          <AnimationContainer
            delay={0.2}
            className='relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full'
          >
            <div className='absolute md:top-[10%] left-1/2 bg-gradient-to-r from-[#1D398D] to-[#2079D8] via-[#2079D8] w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow'></div>
            <div className='-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl'>
              <BorderBeam size={250} duration={12} delay={9} />
              <Image
                src='/assets/dashboard.png'
                alt='Dashboard'
                width={1200}
                height={1200}
                quality={100}
                className='rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border'
              />
              <div className='absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40'></div>
              <div className='absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50'></div>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Companies Section */}
      <MaxWidthWrapper>
        <AnimationContainer delay={0.4}>
          <div className='py-14'>
            <div className='mx-auto px-4 md:px-8'>
              <h2 className='text-center text-sm font-medium font-heading text-neutral-400 uppercase'>
                Trusted by the best in the industry
              </h2>
              <div className='mt-8'>
                <ul className='flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-24 justify-center  '>
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

      {/* Features Section */}
      <MaxWidthWrapper className='pt-10'>
        <AnimationContainer delay={0.1}>
          <div className='flex flex-col w-full items-center lg:items-center justify-center py-8'>
            <MagicBadge title='Features' />
            <h2 className='text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6'>
              All in one Online Engagement Platform
            </h2>
            <p className='mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg'>
              Optimize corporate gifts and incentives with our platform,
              enhancing employee morale, client relationships.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <BentoGrid className='py-8'>
            {CARDS.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Process Section */}
      <MaxWidthWrapper className='py-10'>
        <AnimationContainer delay={0.1}>
          <div className='flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto'>
            <MagicBadge title='The Process' />
            <h2 className='text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6'>
              Effortless rewards management in 3 steps
            </h2>
            <p className='mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg'>
              Follow these simple steps to optimize, organize, and send rewards
              with ease.
            </p>
          </div>
        </AnimationContainer>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8'>
          {PROCESS.map((process, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className='group md:py-8'>
                <div className='flex flex-col items-start justify-center w-full'>
                  <process.icon
                    strokeWidth={1.5}
                    className='w-10 h-10 text-foreground'
                  />
                  <div className='flex flex-col relative items-start'>
                    <span className='absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5'>
                      {id + 1}
                    </span>
                    <h3 className='text-base mt-6 font-medium text-foreground'>
                      {process.title}
                    </h3>
                    <p className='mt-2 text-sm text-muted-foreground'>
                      {process.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Reviews Section */}
      <MaxWidthWrapper className='py-10'>
        <AnimationContainer delay={0.1}>
          <div className='flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto'>
            <MagicBadge title='Our Customers' />
            <h2 className='text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6'>
              What our users are saying
            </h2>
            <p className='mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg'>
              Here&apos;s what some of our users have to say about budgetree.
            </p>
          </div>
        </AnimationContainer>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10'>
          <div className='flex flex-col items-start h-min gap-6'>
            {REVIEWS.slice(0, 2).map((review, index) => (
              <AnimationContainer delay={0.2 * index} key={index}>
                <MagicCard key={index} className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb] '>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        {review.name}
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        {review.username}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4 pb-4'>
                      <p className='text-neutral-700 '>{review.review}</p>
                    </CardContent>
                    <CardFooter className='w-full space-x-1 mt-auto'>
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className='w-4 h-4 fill-yellow-500 text-yellow-500'
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
          <div className='flex flex-col items-start h-min gap-6'>
            {REVIEWS.slice(2, 4).map((review, index) => (
              <AnimationContainer delay={0.2 * index} key={index}>
                <MagicCard key={index} className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        {review.name}
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        {review.username}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4 pb-4'>
                      <p className='text-neutral-700 '>{review.review}</p>
                    </CardContent>
                    <CardFooter className='w-full space-x-1 mt-auto'>
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className='w-4 h-4 fill-yellow-500 text-yellow-500'
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
          <div className='flex flex-col items-start h-min gap-6'>
            {REVIEWS.slice(4, 6).map((review, index) => (
              <AnimationContainer delay={0.2 * index} key={index}>
                <MagicCard key={index} className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        {review.name}
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        {review.username}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4 pb-4'>
                      <p className='text-neutral-700 '>{review.review}</p>
                    </CardContent>
                    <CardFooter className='w-full space-x-1 mt-auto'>
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className='w-4 h-4 fill-yellow-500 text-yellow-500'
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Integration Section */}
      <Wrapper className='flex flex-col items-center justify-center py-12 '>
        <div className='hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 -z-10'></div>
        <Container>
          <div className='max-w-md mx-auto text-start md:text-center'>
            <MagicBadge title='Integrations' />
            <h2 className='text-3xl lg:text-4xl font-semibold mt-6'>
              All at One Place.
            </h2>
            <p className='text-muted-foreground mt-6'>
              Integrates with 30+ SAAS platforms.
            </p>
          </div>
        </Container>
        <Container>
          <div className='py-10 md:py-10 w-full'>
            <div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10'>
              <Marquee pauseOnHover className='[--duration:20s] select-none'>
                {firstRow.map((review) => (
                  <figure
                    key={review.logo}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-black bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className='flex flex-row items-center justify-center '>
                      {/* <UserIcon className='w-6 h-6' /> */}
                      <div className=' rounded-full w-[90px] h-[90px] flex items-center justify-center'>
                        <Image
                          src={review.logo}
                          alt='logo'
                          width={100}
                          height={100}
                          className='w-full  object-fill hover:scale-90 zoom-in-150'
                        />
                      </div>
                    </div>
                    <blockquote className='mt-1 text-sm text-center'>
                      {review.title}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className='[--duration:20s] select-none'
              >
                {secondRow.map((review) => (
                  <figure
                    key={review.logo}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-black bg-background over:bg-zinc-50/[.15] "
                    )}
                  >
                    <div className='flex flex-row items-center justify-center '>
                      {/* <UserIcon className='w-6 h-6' /> */}
                      <div className=' rounded-full w-[90px] h-[90px] flex items-center justify-center'>
                        <Image
                          src={review.logo}
                          alt='logo'
                          width={100}
                          height={100}
                          className='w-full  object-fill hover:scale-90 zoom-in-150'
                        />
                      </div>
                    </div>
                    <blockquote className='mt-1 text-sm text-center'>
                      {review.title}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background'></div>
              <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background'></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* CTA Section */}
      <MaxWidthWrapper className='mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide'>
        <AnimationContainer delay={0.1}>
          <LampContainer>
            <div className='flex flex-col items-center justify-center relative w-full text-center'>
              <h2 className='bg-gradient-to-b from-neutral-700 to-neutral-800 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8'>
                Step into the future of reward management
              </h2>
              <p className='text-muted-foreground mt-6 max-w-md mx-auto'>
                In the fast-paced world of modern marketing, efficiency is key.
                That's where marketing automation steps in. By harnessing the
                power of technology, marketing.
              </p>
              <div className='mt-6'>
                <Button>
                  Get started for free
                  <ArrowRightIcon className='w-4 h-4 ml-2' />
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
