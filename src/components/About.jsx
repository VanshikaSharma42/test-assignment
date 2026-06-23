import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const baseImg =
  "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f02127800ad2c8e76_extrude-group-block.png";

const items = [
  {
    no: "01",
    title: "Analytics",
    desc: "Advanced Intelligent Analytics Platform",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f258b8e73d7666537_bar-chart.png",
    label1: "SYSTEM",
    label2: "REAL-TIME",
    label3: "PERFOMANCE",
    label4: "PREDICTIVE",
    pos: "top-[8%] left-[47%]",
  },
  {
    no: "02",
    title: "Data",
    desc: "Unified Data Intelligence Foundation",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952afed8d4ca6576fcbdedf_linked-services.png",
    label1: "CONNECTED",
    label2: "SINGLE SOURCE",
    label3: "SMART",
    label4: "EFFICIENCY",
    pos: "top-[31%] left-[63%]",
  },
  {
    no: "03",
    title: "Auto",
    desc: "Adaptive Automation Workflow System",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f1c8555865fea32ed_auto-renew.png",
    label1: "SMART",
    label2: "SEAMLESS",
    label3: "SYSTEM",
    label4: "REAL-TIME",
    pos: "top-[31%] left-[31%]",
  },
  {
    no: "04",
    title: "Security",
    desc: "Secure and Scalable Core Infrastructure",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f0b7d0e5d63ed20fb_encrypted.png",
    label1: "ENTERPRISE",
    label2: "SECURE",
    label3: "SYSTEM",
    label4: "PROTECTED",
    pos: "top-[55%] left-[47%]",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const icons = gsap.utils.toArray(".about-icon");
    const titles = gsap.utils.toArray(".about-title");
    const descs = gsap.utils.toArray(".about-desc");
    const nums = gsap.utils.toArray(".about-num");
    const labels = gsap.utils.toArray(".about-label");

    gsap.set([icons, titles, descs, labels], {
      autoAlpha: 0,
    });

    gsap.set(icons, {
      y: 35,
      scale: 0.6,
      rotateX: 35,
    });

    gsap.set(".main-title", { autoAlpha: 1 });
    gsap.set(nums, { opacity: 0.4 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=4200",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".main-title", {
      autoAlpha: 0,
      y: -40,
      duration: 0.8,
    });

    items.forEach((_, i) => {
      tl.to(nums, {
        opacity: 0.35,
        backgroundColor: "transparent",
        color: "#fff",
        borderColor: "#333",
        duration: 0.2,
      });

      tl.to(
        nums[i],
        {
          opacity: 1,
          backgroundColor: "#fff",
          color: "#000",
          borderColor: "#1da1ff",
          duration: 0.2,
        },
        "<"
      );

      tl.to(
        icons[i],
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.6,
        },
        "<"
      );

      tl.to(
        [titles[i], descs[i]],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
        },
        "<"
      );

      tl.to(
        labels,
        {
          autoAlpha: 1,
          duration: 0.5,
        },
        "<"
      );

      tl.to({}, { duration: 0.7 });

      if (i !== items.length - 1) {
        tl.to([icons[i], titles[i], descs[i]], {
          autoAlpha: 0,
          y: -25,
          scale: 0.9,
          duration: 0.5,
        });
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      {/* plus pattern */}
      <div className="absolute left-8 top-10 grid grid-cols-4 gap-x-6 gap-y-5 text-3xl font-light leading-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className={`${
              i < 4
                ? "text-sky-500"
                : i < 8
                ? "text-cyan-400"
                : i < 12
                ? "text-green-400"
                : "text-yellow-500"
            }`}
          >
            +
          </span>
        ))}
      </div>

      <p className="absolute left-[37%] top-10 text-xs tracking-widest text-zinc-500">
        ABOUT US
      </p>

      {/* first big heading */}
      <h2 className="main-title absolute right-28 top-7 text-right text-[56px] leading-[1.05] font-light text-zinc-300">
        The Core Platform
        <br />
        Powering Tools
      </h2>

      {/* left number steps */}
      <div className="absolute left-11 top-[38%] z-20 flex flex-col items-center">
        {items.map((item, i) => (
          <React.Fragment key={item.no}>
            <div className="about-num flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 text-xl">
              {item.no}
            </div>
            {i !== items.length - 1 && (
              <div className="h-8 w-px bg-zinc-800" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* main platform image */}
      <div className="absolute left-1/2 top-[52%] w-[760px] -translate-x-1/2 -translate-y-1/2">
        <img src={baseImg} alt="" className="w-full opacity-90" />

        {items.map((item) => (
          <img
            key={item.no}
            src={item.icon}
            alt=""
            className={`about-icon absolute w-[90px] -translate-x-1/2 -translate-y-1/2 ${item.pos}`}
          />
        ))}
      </div>

      {/* right changing text */}
      <div className="absolute right-16 top-7 w-[300px] text-right">
        {items.map((item) => (
          <p
            key={item.desc}
            className="about-desc absolute right-0 top-0 text-xl leading-snug text-white"
          >
            {item.desc}
          </p>
        ))}
      </div>

      <div className="absolute right-16 top-[37%] w-[360px]">
        {items.map((item) => (
          <h3
            key={item.title}
            className="about-title absolute right-0 top-0 text-[58px] font-light leading-none text-zinc-300"
          >
            {item.title}
          </h3>
        ))}
      </div>

      {/* bottom labels */}
      <div className="about-label absolute bottom-20 right-40 grid grid-cols-2 gap-x-10 gap-y-2 text-right text-sm text-zinc-500">
        <span>{items[0].label1}</span>
        <span>{items[0].label3}</span>
        <span>{items[0].label2}</span>
        <span>{items[0].label4}</span>
      </div>
    </section>
  );
}