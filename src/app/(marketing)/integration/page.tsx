import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Steper from "@/components/Steper";
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
import ContactForm from "../products/ContactForm";
import { BorderBeam } from "@/components/ui/border-beam";

const index = () => {
  const STATSTICS = [
    {
      name: "Transactions",
      count: "400cr",
    },

    {
      name: "Customers",
      count: "2,200",
    },
    {
      name: "Transactions",
      count: "8000",
    },
  ];
  const Stepers = [
    {
      name: " NEFT/IMPS payout, bulk transfer",
      discriptions: (
        <ul className='list-disc pt-3 text-sm text-neutral-500 space-y-1'>
          <li>
            <b className='text-[#204BA2]'>
              Process NEFT/IMPS payouts quickly and securely.
            </b>
          </li>
          <li>
            <b className='text-[#204BA2]'>
              {" "}
              Seamless bulk transfers with minimal effort.
            </b>{" "}
          </li>
          <li>
            <b className='text-[#204BA2]'>
              Reliable and efficient for large-scale transactions.
            </b>{" "}
          </li>
          <li>
            <b className='text-[#204BA2]'>Simple and Secure Payment system</b>
          </li>
        </ul>
      ),
    },
    {
      name: "UPI payouts",
      discriptions: (
        <ul className='list-disc pt-3 text-sm text-neutral-500 space-y-1'>
          <li>
            {" "}
            <b className='text-[#204BA2]'>
              Send UPI payouts instantly and securely.
            </b>
          </li>
          <li>
            <b className='text-[#204BA2]'>
              {" "}
              Fast, reliable, and hassle-free transactions.
            </b>{" "}
          </li>
          <li>
            {" "}
            <b className='text-[#204BA2]'>
              {" "}
              Seamless payouts to multiple recipients anytime.
            </b>{" "}
          </li>
          <li>
            <b className='text-[#204BA2]'>
              Track and manage UPI payouts effortlessly.
            </b>
          </li>
        </ul>
      ),
    },
    {
      name: " Bharat connect bill payments",
      discriptions: (
        <ul className='list-disc pt-3 text-sm text-neutral-500 space-y-1'>
          <li>
            <b className='text-[#204BA2]'>
              Pay bills seamlessly with Bharat Connect.
            </b>
          </li>
          <li>
            <b className='text-[#204BA2]'>
              Quick, secure, and hassle-free transactions.
            </b>
          </li>
          <li>
            <b className='text-[#204BA2]'>
              {" "}
              Access multiple billers in one platform.
            </b>{" "}
          </li>
          <li>
            <b className='text-[#204BA2]'>
              Track and manage payments effortlessly.
            </b>
          </li>
        </ul>
      ),
    },
    {
      name: "Track Payouts",
      discriptions: (
        <ul className='list-disc pt-3 text-sm text-neutral-500 space-y-1'>
          <li>
            <b className='text-[#204BA2]'>
              Monitor payouts in real-time effortlessly.
            </b>
          </li>
          <li>
            <b className='text-[#204BA2]'>
              Get detailed reports for every transaction.
            </b>
          </li>
          <li>
            <b className='text-[#204BA2]'>
              Ensure transparency with accurate payout tracking.
            </b>{" "}
          </li>
          <li>
            <b className='text-[#204BA2]'>
              Stay updated on payouts anytime, anywhere.
            </b>
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
            <MagicBadge title='Simple' />
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight'>
              Simplifying collections and payments for your Business
            </h1>
            <p className='text-base md:text-lg mt-6 text-center text-muted-foreground'>
              Empower your business with our all-in-one payouts stack, designed
              to make financial transactions seamless, efficient, and secure.
              Whether it's vendor payments, employee payouts, or bill
              settlements, Budgetree has you covered.
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
        <AnimationContainer
          delay={0.2}
          className='relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full'
        >
          {/* Glowing Background */}
          <div className='absolute md:top-[10%] left-1/2 bg-gradient-to-r from-[#1D398D] to-[#2079D8] via-[#2079D8] w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow'></div>

          {/* Content Container */}
          <div className='-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl'>
            {/* Border Beam Animation */}
            <BorderBeam size={250} duration={12} delay={9} />

            {/* Image */}
            <Image
              src='/assets/integrations/integration.png'
              alt='Payout Stack'
              width={1200}
              height={700}
              quality={100}
              className='rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border'
            />

            {/* Gradient Overlay */}
            <div className='absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40'></div>
            <div className='absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50'></div>
          </div>
        </AnimationContainer>

        <div className='py-4 md:py-20 mx-auto'>
          <h6 className='text-3xl font-semibold py-4 md:py-20 mx-auto'>
            Seamless Payments. Extraordinary Offers.
          </h6>
          <p className='pt-2 text-'>
            Our Payout stack includes NEFT/IMPS and UPI payments. We also enable
            bill payments through Bhrat connect platform.
          </p>
          <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10'>
            <div className='flex flex-col items-start h-min gap-6'>
              <AnimationContainer delay={0.2}>
                <MagicCard className='md:p-0 bg-white '>
                  <Card className='flex flex-col w-full border-none h-min bg-[#f7fafb]'>
                    <CardHeader className='space-y-0'>
                      <CardTitle className='text-lg text-neutral-600 font-medium '>
                        Surveys
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Collect valuable feedback and insights with
                        user-friendly surveys.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Tailored to your needs</li>
                        <li>Real-time analysis</li>
                        <li>Easy integration</li>
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
                        CRM
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Streamline customer relationships and boost retention.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Centralized data management</li>
                        <li>Personalized interactions</li>
                        <li>Scalable solutions</li>
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
                        HRMS
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Simplify HR processes and enhance employee satisfaction.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Payroll and benefits management.</li>
                        <li>Streamlined recruitment.</li>
                        <li>Real-time performance tracking.</li>
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
                        Productivity Tools
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Empower teams with tools and integration that drive
                        efficiency.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Seamless collaboration</li>
                        <li>Task automation</li>
                        <li>Time management solutions</li>
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
                        Zapier
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Automate workflows with powerful integrations.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Connect your favorite apps.</li>
                        <li>Simplify repetitive tasks. </li>
                        <li>Scale effortlessly.</li>
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
                        Real-Time Payment Dashboard
                      </CardTitle>
                      <CardDescription className='text-neutral-600'>
                        Gain full visibility and control over your transactions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2 pb-4'>
                      <ul className='text-neutral-600 list-disc text-sm'>
                        <li>Monitor all payouts</li>
                        <li>Generate detailed reports for compliance</li>
                        <li>Intuitive UI for hassle-free navigation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            </div>
          </section>
          <section className='pt-40 w-full flex flex-col md:flex-row items-center gap-8  md:gap-20'>
            <div className='flex flex-col gap-10'>
              {" "}
              <h6 className='text-3xl font-semibold'>Get Started</h6>
              <Steper Stepers={Stepers} />
            </div>
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
              <h2 className='bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8'>
                Powerup your reward strategy
              </h2>
              <p className='text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg'>
                Take control of your rewards with advanced features and
                real-time insights. Simplify your workflow and achieve more.
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

export default index;
