import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const groundImg =
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a960f6d8b19db76f89a9_extrude-group-ground.png";

const blockImg =
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f02127800ad2c8e76_extrude-group-block.png";

const items = [
  {
    no: "01",
    title: "Analytics",
    desc: "Advanced Intelligent Analytics Platform",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f258b8e73d7666537_bar-chart.png",
    pos: "left-[50%] top-[23%]",
    labels: ["REAL-TIME", "PREDICTIVE"],
  },
  {
    no: "02",
    title: "Data",
    desc: "Unified Data Intelligence Foundation",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952afed8d4ca6576fcbdedf_linked-services.png",
    pos: "left-[68%] top-[38%]",
    labels: ["CONNECTED", "SMART"],
  },
  {
    no: "03",
    title: "Auto",
    desc: "Adaptive Automation Workflow System",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f1c8555865fea32ed_auto-renew.png",
    pos: "left-[33%] top-[38%]",
    labels: ["ENTERPRISE", "SEAMLESS"],
  },
  {
    no: "04",
    title: "Security",
    desc: "Secure and Scalable Core Infrastructure",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f0b7d0e5d63ed20fb_encrypted.png",
    pos: "left-[50%] top-[54%]",
    labels: ["SINGLE SOURCE", "EFFICIENCY"],
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const groups = gsap.utils.toArray(".about-group");
      const icons = gsap.utils.toArray(".about-icon");
      const titles = gsap.utils.toArray(".about-title");
      const descs = gsap.utils.toArray(".about-desc");
      const nums = gsap.utils.toArray(".about-num");
      const plusIcons = gsap.utils.toArray(".plus-icon");
      const labelPairs = gsap.utils.toArray(".about-label-pair");
      const aboutLabel = sectionRef.current.querySelector(".about-main-label");

      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      const inactiveIconFilter =
        "grayscale(1) brightness(1.08) contrast(1.05)";

      const activeIconFilter =
        "grayscale(0) brightness(1.32) contrast(1.08) saturate(1.45)";

      const flipText = (el, finalText) => {
        const letters = finalText.split("");
        const maxFrames = 5;

        gsap.killTweensOf(el);

        gsap.to(
          {},
          {
            duration: 0.45,
            ease: "none",
            onUpdate: function () {
              const frame = Math.floor(this.progress() * maxFrames);

              el.textContent = letters
                .map((char, index) => {
                  if (char === " ") return " ";
                  if (frame >= maxFrames - 1) return char;
                  if (index < frame + 2) return char;
                  return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");
            },
            onComplete: () => {
              el.textContent = finalText;
            },
          }
        );
      };

      gsap.set(plusIcons, {
        color: "#ffffff",
        opacity: 0.9,
      });

      const plusColors = [
        "#38bdf8",
        "#22d3ee",
        "#2dd4bf",
        "#22c55e",
        "#a3e635",
        "#ffffff",
      ];

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.35,
        })
        .to(plusIcons, {
          color: (i) => plusColors[i % plusColors.length],
          opacity: 1,
          duration: 0.7,
          stagger: {
            each: 0.055,
            from: "start",
            grid: [4, 4],
          },
          ease: "sine.inOut",
        })
        .to(plusIcons, {
          color: "#ffffff",
          opacity: 0.85,
          duration: 0.9,
          stagger: {
            each: 0.055,
            from: "start",
            grid: [4, 4],
          },
          ease: "sine.inOut",
        });

      gsap.set(groups, {
        y: -30,
        opacity: 0.95,
        scale: 1,
      });

      gsap.set(icons, {
        y: 0,
        opacity: 0.72,
        scale: 0.96,
        filter: inactiveIconFilter,
      });

      gsap.set([titles, descs], {
        autoAlpha: 0,
        y: 30,
      });

      gsap.set(labelPairs, {
        autoAlpha: 0,
        y: 8,
      });

      gsap.set(nums, {
        opacity: 0.35,
        backgroundColor: "transparent",
        color: "#fff",
        borderColor: "#333",
      });

      const activateIconGlow = (activeIndex) => {
        icons.forEach((icon, index) => {
          gsap.killTweensOf(icon);

          gsap.to(icon, {
            opacity: index === activeIndex ? 1 : 0.72,
            scale: index === activeIndex ? 1.08 : 0.96,
            y: index === activeIndex ? -10 : 0,
            filter: index === activeIndex ? activeIconFilter : inactiveIconFilter,
            duration: 0.45,
            ease: "power2.out",
          });
        });
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=5800",
          pin: true,
          scrub: 1.2,
        },
      });

      tl.call(() => flipText(aboutLabel, "ABOUT US"), null, 0);

      tl.to(
        groups,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.08,
        },
        0
      );

      tl.to(
        icons,
        {
          y: 0,
          opacity: 0.78,
          scale: 0.96,
          filter: inactiveIconFilter,
          duration: 0.8,
          stagger: 0.08,
        },
        "<"
      );

      tl.to(".hero-heading", {
        autoAlpha: 0,
        y: -45,
        duration: 0.8,
      });

      items.forEach((item, i) => {
        const valueWords = labelPairs[i].querySelectorAll(".flip-label");

        tl.to(
          nums,
          {
            opacity: 0.35,
            backgroundColor: "transparent",
            color: "#fff",
            borderColor: "#333",
            duration: 0.25,
          },
          "+=0.15"
        );

        tl.to(
          nums[i],
          {
            opacity: 1,
            backgroundColor: "#fff",
            color: "#000",
            borderColor: "#0ea5e9",
            duration: 0.25,
          },
          "<"
        );

        tl.to(descs[i], { autoAlpha: 1, y: 0, duration: 0.55 }, "<");
        tl.to(titles[i], { autoAlpha: 1, y: 0, duration: 0.65 }, "-=0.25");
        tl.to(labelPairs[i], { autoAlpha: 1, y: 0, duration: 0.45 }, "<");

        valueWords.forEach((word, index) => {
          tl.call(() => flipText(word, item.labels[index]), null, "<");
        });

        tl.call(() => activateIconGlow(i), null, "<");

        tl.to(
          groups[i],
          {
            y: -30,
            scale: 1.06,
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        );

        tl.to({}, { duration: 0.5 });

        if (i !== items.length - 1) {
          tl.to([descs[i], titles[i], labelPairs[i]], {
            autoAlpha: 0,
            y: -25,
            duration: 0.45,
          });

          tl.to(
            icons[i],
            {
              opacity: 0.72,
              scale: 0.96,
              y: 0,
              filter: inactiveIconFilter,
              duration: 0.45,
              ease: "power2.inOut",
            },
            "<"
          );

          tl.to(
            groups[i],
            {
              y: 0,
              scale: 1,
              duration: 0.45,
              ease: "power2.inOut",
            },
            "<"
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute left-8 top-10 grid grid-cols-4 gap-x-6 gap-y-5 text-3xl leading-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="plus-icon select-none text-white">
            +
          </span>
        ))}
      </div>

      <p className="about-main-label absolute left-[36%] top-10 font-mono text-xs uppercase tracking-[0.12em] text-zinc-500">
        ABOUT US
      </p>

      <h2 className="hero-heading absolute right-28 top-7 text-right text-[56px] font-light leading-[1.05] text-zinc-300">
        The Core Platform
        <br />
        Powering Tools
      </h2>

      <div className="absolute left-11 top-[38%] z-20 flex flex-col items-center">
        {items.map((item, i) => (
          <React.Fragment key={item.no}>
            <div className="about-num flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 text-xl">
              {item.no}
            </div>
            {i !== items.length - 1 && <div className="h-8 w-px bg-zinc-800" />}
          </React.Fragment>
        ))}
      </div>

      <div className="absolute left-1/2 top-[53%] h-[620px] w-[860px] -translate-x-1/2 -translate-y-1/2">
        <img
          src={groundImg}
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-90"
        />

        {items.map((item) => (
          <div
            key={item.no}
            className={`about-group absolute h-[160px] w-[268px] -translate-x-1/2 -translate-y-1/2 ${item.pos}`}
          >
            <img src={blockImg} alt="" className="absolute inset-0 w-full" />

            <img
              src={item.icon}
              alt=""
              className="about-icon absolute left-[50%] top-[15%] w-[112px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>

      <div className="absolute right-[5vw] top-[5vh] w-[340px] text-right">
        {items.map((item) => (
          <p
            key={item.desc}
            className="about-desc absolute right-0 top-0 text-[21px] font-light leading-[1.18] text-white"
          >
            {item.desc}
          </p>
        ))}
      </div>

      <div className="absolute right-[5vw] top-[46%] w-[390px] text-right">
        {items.map((item) => (
          <h3
            key={item.title}
            className="about-title absolute right-0 top-0 text-[58px] font-light leading-none text-zinc-400"
          >
            {item.title}
          </h3>
        ))}
      </div>

      <div className="absolute bottom-[8.5vh] right-[5vw] w-[300px] font-mono text-[14px] uppercase tracking-[-0.02em]">
        <div className="relative h-[44px] w-full">
          <div className="absolute left-0 top-0 w-[130px] text-center font-light text-[#f2f2f2]">
            SYSTEM
          </div>

          <div className="absolute right-0 top-0 w-[130px] text-center font-light text-[#f2f2f2]">
            PERFORMANCE
          </div>

          {items.map((item) => (
            <div
              key={item.title}
              className="about-label-pair absolute left-0 top-[24px] grid w-full grid-cols-2 gap-x-[40px]"
            >
              <span className="flip-label block w-[130px] text-center font-light text-[#5f5f66]">
                {item.labels[0]}
              </span>

              <span className="flip-label block w-[130px] text-center font-light text-[#5f5f66]">
                {item.labels[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}