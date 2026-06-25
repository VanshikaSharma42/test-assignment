import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const blueBg =
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/69577109649acd1403358c26_Abstract%20Blue%20Gradient.webp";

const dashedLine =
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6957632144c9c6130aa23412_Line%20Dashed.png";

const gridBg =
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/695784b8fedf0b3103908ec2_grid%20bg.png";

const block =
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6957848774c9981589e6f4dd_Extrude%20Workflow.png";

const icons = [
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/69578490882419fc1e01db35_send-money.png",
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6957848775e47cb93705303b_input-circle.png",
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6957848775e47cb93705303f_pie-chart.png",
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6957848757af7f496852add3_data.png",
];

const steps = [
  {
    no: "01",
    title: "Collect Data",
    desc: "AI gathers structured and unstructured data from connected sources in real time.",
  },
  {
    no: "02",
    title: "Process Data",
    desc: "Inputs are validated, normalized, and prepared for intelligent analysis.",
  },
  {
    no: "03",
    title: "Analyze Data",
    desc: "Advanced models extract insights, patterns, and predictive signals.",
  },
  {
    no: "04",
    title: "Deliver Data",
    desc: "Insights are transformed into clear, actionable outcomes.",
  },
];

export default function PartialSection() {
  const section = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".partialCard");
      const iconsEls = gsap.utils.toArray(".partialIcon");
      const textTrack = gsap.utils.toArray(".textTrack")[0];
      const countTrack = gsap.utils.toArray(".countTrack")[0];

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 768px) and (max-width: 1023px)",
          mobile: "(max-width: 767px)",
        },
        (context) => {
          const { desktop, tablet, mobile } = context.conditions;

          const gapX = desktop ? 130 : tablet ? 112 : 74;
          const gapY = desktop ? -58 : tablet ? -44 : -31;

          const slideHeight = mobile ? 300 : tablet ? 330 : 360;
          const centerOffset = window.innerHeight / 2 - slideHeight / 2;

          const textMove = -slideHeight;
          const countMove = -slideHeight;

          const baseScale = desktop ? 1 : tablet ? 0.84 : 0.68;
          const activeScale = desktop ? 1.08 : tablet ? 0.92 : 0.78;
          const activeLift = desktop ? -34 : tablet ? -24 : -16;

          const getActiveCard = (stepIndex) => cards.length - 1 - stepIndex;

          const cardState = (stepIndex) => {
            const activeCard = getActiveCard(stepIndex);

            return {
              x: (i) => i * gapX,
              y: (i) => i * gapY + (i === activeCard ? activeLift : 0),
              scale: (i) => (i === activeCard ? activeScale : baseScale),
              opacity: 1,
              zIndex: (i) => (i === activeCard ? 40 : 20 - i),
              ease: "none",
            };
          };

          const iconState = (stepIndex) => {
            const activeCard = getActiveCard(stepIndex);

            return {
              scale: (i) => (i === activeCard ? 1.16 : 0.9),
              x: (i) => (i === activeCard ? -36 : 12),
              y: (i) => (i === activeCard ? 0 : 10),
              opacity: (i) => (i === activeCard ? 1 : 0.45),
              rotate: (i) => (i === activeCard ? 0 : -6),
              filter: (i) =>
                i === activeCard
                  ? "grayscale(0) brightness(1.22) contrast(1.05) saturate(1.35)"
                  : "grayscale(1) brightness(0.75) contrast(1)",
              ease: "none",
            };
          };

          gsap.set(cards, cardState(0));
          gsap.set(iconsEls, iconState(0));
          gsap.set(textTrack, { y: centerOffset });
          gsap.set(countTrack, { y: centerOffset });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section.current,
              start: "top top",
              end: mobile ? "+=2600" : "+=3500",
              scrub: 1,
              pin: true,
            },
          });

          tl.to(textTrack, { y: centerOffset + textMove, ease: "none" }, 0)
            .to(countTrack, { y: centerOffset + countMove, ease: "none" }, 0)
            .to(cards, cardState(1), 0)
            .to(iconsEls, iconState(1), 0)

            .to(textTrack, { y: centerOffset + textMove * 2, ease: "none" }, 1)
            .to(countTrack, { y: centerOffset + countMove * 2, ease: "none" }, 1)
            .to(cards, cardState(2), 1)
            .to(iconsEls, iconState(2), 1)

            .to(textTrack, { y: centerOffset + textMove * 3, ease: "none" }, 2)
            .to(countTrack, { y: centerOffset + countMove * 3, ease: "none" }, 2)
            .to(cards, cardState(3), 2)
            .to(iconsEls, iconState(3), 2);
        }
      );

      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section
      ref={section}
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      <img
        src={gridBg}
        alt=""
        className="absolute right-0 top-0 z-0 h-full w-[58%] object-cover opacity-80 max-lg:top-0 max-lg:h-[48%] max-lg:w-full max-lg:opacity-70"
      />

      <img
        src={blueBg}
        alt=""
        className="absolute left-[22%] top-[-8%] z-[1] h-[116%] w-[32%] object-cover opacity-90 max-lg:left-0 max-lg:top-[36%] max-lg:h-[70%] max-lg:w-full max-lg:opacity-80"
      />

      <div className="absolute left-[22%] top-0 z-[2] h-full w-[34%] bg-gradient-to-r from-black via-black/20 to-black/95 max-lg:left-0 max-lg:top-[34%] max-lg:h-[66%] max-lg:w-full max-lg:bg-gradient-to-b" />
      <div className="absolute left-[18%] top-0 z-[2] h-full w-[42%] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_35%,#000_78%)] max-lg:left-0 max-lg:top-[32%] max-lg:h-[70%] max-lg:w-full" />

      <img
        src={dashedLine}
        alt=""
        className="absolute left-[7vw] top-[9%] z-[30] h-[82%] w-[16px] object-fill opacity-70 max-lg:left-[1vw] max-lg:top-[42%] max-lg:h-[48%] max-lg:w-[12px]"
      />

      <div className="absolute left-[3.1vw] top-0 z-[90] h-screen w-[40px] overflow-hidden max-lg:left-[5vw]">
        <div className="countTrack">
          {steps.map((step) => (
            <span
              key={step.no}
              className="flex h-[360px] items-center text-sm text-white max-lg:h-[330px] max-sm:h-[300px]"
            >
              {step.no}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute right-[7vw] top-[48%] z-[4] h-[400px] w-[560px] -translate-y-12 max-lg:left-[8vw] max-lg:right-auto max-lg:top-[18%] max-lg:h-[260px] max-lg:w-[360px] max-sm:left-[13vw] max-sm:top-[19%] max-sm:h-[210px] max-sm:w-[280px]">
        {steps.map((_, i) => (
          <div
            key={i}
            className="partialCard absolute h-[300px] w-[300px] origin-center max-lg:h-[180px] max-lg:w-[180px] max-sm:h-[120px] max-sm:w-[120px]"
          >
            <img src={block} alt="" className="h-full w-full object-contain" />

            <img
              src={icons[i]}
              alt=""
              className="partialIcon absolute left-[92px] top-[104px] h-[100px] w-[100px] origin-center object-contain max-lg:left-[52px] max-lg:top-[52px] max-lg:h-[58px] max-lg:w-[58px] max-sm:left-[34px] max-sm:top-[38px] max-sm:h-[44px] max-sm:w-[44px]"
            />
          </div>
        ))}
      </div>

      <div className="relative z-[9999] flex h-full w-[48%] flex-col justify-center pl-[10.5vw] max-lg:w-full max-lg:justify-end max-lg:pb-[20vh] max-lg:pl-[22vw] max-sm:pb-[17vh]">
        <div className="absolute left-[26vw] top-[17%] rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm tracking-[1px] text-[#d7d7d7] max-lg:left-auto max-lg:right-[7vw] max-lg:top-[54%] max-sm:text-[10px]">
          PARTIAL <span className="text-[#777]">&gt;&gt;&gt;</span> TASK [04]
        </div>

        <div className="relative h-screen overflow-hidden pl-[3vw] max-lg:pl-0">
          <div className="textTrack">
            {steps.map((step) => (
              <div
                key={step.no}
                className="flex h-[360px] flex-col justify-center max-lg:h-[330px] max-sm:h-[300px]"
              >
                <h2 className="m-0 text-[clamp(34px,5vw,76px)] font-light leading-none text-[#dcdcdc] max-sm:text-[26px]">
                  {step.title}
                </h2>

                <p className="mt-[22px] w-[330px] text-base leading-[1.5] text-[#666] max-lg:w-[280px] max-lg:text-xs max-sm:mt-4 max-sm:w-[230px] max-sm:text-[10px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}