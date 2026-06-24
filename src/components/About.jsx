// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const baseImg =
//   "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f02127800ad2c8e76_extrude-group-block.png";

// const items = [
//   {
//     no: "01",
//     title: "Analytics",
//     desc: "Advanced Intelligent Analytics Platform",
//     block:
//       "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f02127800ad2c8e76_extrude-group-block.png",
//     icon:
//       "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f258b8e73d7666537_bar-chart.png",
//     pos: "left-[46%] top-[13%]",
//   },
//   {
//     no: "02",
//     title: "Data",
//     desc: "Unified Data Intelligence Foundation",
//     block:
//       "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f02127800ad2c8e76_extrude-group-block.png",
//     icon:
//       "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952afed8d4ca6576fcbdedf_linked-services.png",
//     pos: "left-[63%] top-[36%]",
//   },
//   {
//     no: "03",
//     title: "Auto",
//     desc: "Adaptive Automation Workflow System",
//     block:
//       "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f02127800ad2c8e76_extrude-group-block.png",
//     icon:
//       "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f1c8555865fea32ed_auto-renew.png",
//     pos: "left-[31%] top-[36%]",
//   },
//   {
//     no: "04",
//     title: "Security",
//     desc: "Secure and Scalable Core Infrastructure",
//     block:
//       "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f02127800ad2c8e76_extrude-group-block.png",
//     icon:
//       "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f0b7d0e5d63ed20fb_encrypted.png",
//     pos: "left-[47%] top-[58%]",
//   },
// ];

// export default function About() {
//   const sectionRef = useRef(null);

// //   useGSAP(() => {
// //     const groups = gsap.utils.toArray(".about-group");
// //     const icons = gsap.utils.toArray(".about-icon");
// //     const titles = gsap.utils.toArray(".about-title");
// //     const descs = gsap.utils.toArray(".about-desc");
// //     const nums = gsap.utils.toArray(".about-num");

// //     gsap.set([titles, descs], { autoAlpha: 0, y: 25 });
// //     gsap.set(icons, { autoAlpha: 0, y: 35, scale: 0.5 });
// //     gsap.set(groups, { filter: "grayscale(1)", opacity: 0.35 });
// //     gsap.set(nums, { opacity: 0.45 });

// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: sectionRef.current,
// //         start: "top top",
// //         end: "+=4200",
// //         pin: true,
// //         scrub: 1,
// //       },
// //     });

// //     tl.to(".hero-heading", {
// //       autoAlpha: 0,
// //       y: -40,
// //       duration: 0.8,
// //     });

// //     items.forEach((_, i) => {
// //       tl.to(groups, {
// //         filter: "grayscale(1)",
// //         opacity: 0.35,
// //         duration: 0.3,
// //       });

// //       tl.to(
// //         groups[i],
// //         {
// //           filter: "grayscale(0)",
// //           opacity: 1,
// //           duration: 0.4,
// //         },
// //         "<"
// //       );

// //       tl.to(
// //         icons[i],
// //         {
// //           autoAlpha: 1,
// //           y: 0,
// //           scale: 1,
// //           duration: 0.5,
// //           ease: "back.out(1.7)",
// //         },
// //         "<"
// //       );

// //       tl.to(nums, {
// //         opacity: 0.35,
// //         backgroundColor: "transparent",
// //         color: "#fff",
// //       }, "<");

// //       tl.to(nums[i], {
// //         opacity: 1,
// //         backgroundColor: "#fff",
// //         color: "#000",
// //         borderColor: "#0ea5e9",
// //       }, "<");

// //       tl.to(
// //         [descs[i], titles[i]],
// //         {
// //           autoAlpha: 1,
// //           y: 0,
// //           duration: 0.5,
// //           stagger: 0.08,
// //         },
// //         "<"
// //       );

// //       tl.to({}, { duration: 0.8 });

// //       if (i !== items.length - 1) {
// //         tl.to([icons[i], descs[i], titles[i]], {
// //           autoAlpha: 0,
// //           y: -20,
// //           scale: 0.85,
// //           duration: 0.35,
// //         });
// //       }
// //     });
// //   }, []);

// useGSAP(() => {
//   const groups = gsap.utils.toArray(".about-group");
//   const icons = gsap.utils.toArray(".about-icon");
//   const titles = gsap.utils.toArray(".about-title");
//   const descs = gsap.utils.toArray(".about-desc");
//   const nums = gsap.utils.toArray(".about-num");
//   const labels = gsap.utils.toArray(".about-label span");

//   gsap.set(groups, {
//     y: -90,
//     opacity: 0.75,
//     scale: 1.04,
//   });

//   gsap.set(icons, {
//     y: -18,
//     opacity: 0.35,
//     scale: 0.95,
//   });

//   gsap.set([titles, descs], {
//     autoAlpha: 0,
//     y: 30,
//   });

//   gsap.set(labels, {
//     autoAlpha: 0,
//     y: 16,
//   });

//   gsap.set(nums, {
//     opacity: 0.35,
//     backgroundColor: "transparent",
//     color: "#fff",
//     borderColor: "#333",
//   });

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "+=5200",
//       pin: true,
//       scrub: 1.2,
//     },
//   });

//   // 1. initial floating boxes settle into main platform
//   tl.to(groups, {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     duration: 1.2,
//     ease: "power2.out",
//     stagger: 0.08,
//   });

//   tl.to(
//     icons,
//     {
//       y: 0,
//       opacity: 0.45,
//       duration: 0.8,
//       stagger: 0.08,
//     },
//     "<"
//   );

//   // 2. main heading fades out
//   tl.to(".hero-heading", {
//     autoAlpha: 0,
//     y: -45,
//     duration: 0.8,
//   });

//   // 3. bottom words appear first
//   tl.to(labels, {
//     autoAlpha: 1,
//     y: 0,
//     duration: 0.6,
//     stagger: 0.12,
//   });

//   items.forEach((_, i) => {
//     // reset number state
//     tl.to(
//       nums,
//       {
//         opacity: 0.35,
//         backgroundColor: "transparent",
//         color: "#fff",
//         borderColor: "#333",
//         duration: 0.25,
//       },
//       "+=0.15"
//     );

//     // active number
//     tl.to(
//       nums[i],
//       {
//         opacity: 1,
//         backgroundColor: "#fff",
//         color: "#000",
//         borderColor: "#0ea5e9",
//         duration: 0.25,
//       },
//       "<"
//     );

//     // right small desc comes first
//     tl.to(
//       descs[i],
//       {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.55,
//       },
//       "<"
//     );

//     // then big title
//     tl.to(
//       titles[i],
//       {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.65,
//       },
//       "-=0.25"
//     );

//     // active box pops up
//     tl.to(
//       groups[i],
//       {
//         y: -42,
//         scale: 1.08,
//         duration: 0.45,
//         ease: "power2.out",
//       },
//       "<"
//     );

//     // icon bounce 1
//     tl.to(
//       icons[i],
//       {
//         y: -50,
//         opacity: 1,
//         scale: 1.15,
//         duration: 0.35,
//         ease: "power2.out",
//       },
//       "<"
//     );

//     // icon bounce 2
//     tl.to(icons[i], {
//       y: -25,
//       scale: 1.05,
//       duration: 0.25,
//       ease: "power1.inOut",
//     });

//     tl.to(icons[i], {
//       y: -42,
//       scale: 1.12,
//       duration: 0.25,
//       ease: "power1.out",
//     });

//     // icon and box settle back
//     tl.to(
//       [groups[i], icons[i]],
//       {
//         y: 0,
//         scale: 1,
//         duration: 0.55,
//         ease: "power2.inOut",
//       }
//     );

//     tl.to({}, { duration: 0.65 });

//     if (i !== items.length - 1) {
//       tl.to([descs[i], titles[i]], {
//         autoAlpha: 0,
//         y: -25,
//         duration: 0.45,
//       });

//       tl.to(
//         icons[i],
//         {
//           opacity: 0.45,
//           duration: 0.35,
//         },
//         "<"
//       );
//     }
//   });
// }, []);
//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen overflow-hidden bg-black text-white"
//     >
//       <div className="absolute left-8 top-10 grid grid-cols-4 gap-x-6 gap-y-5 text-3xl leading-none">
//         {Array.from({ length: 16 }).map((_, i) => (
//           <span
//             key={i}
//             className={
//               i < 4
//                 ? "text-sky-500"
//                 : i < 8
//                 ? "text-cyan-400"
//                 : i < 12
//                 ? "text-green-400"
//                 : "text-yellow-500"
//             }
//           >
//             +
//           </span>
//         ))}
//       </div>

//       <p className="absolute left-[36%] top-10 text-xs tracking-widest text-zinc-500">
//         ABOUT US
//       </p>

//       <h2 className="hero-heading absolute right-28 top-7 text-right text-[56px] font-light leading-[1.05] text-zinc-300">
//         The Core Platform
//         <br />
//         Powering Tools
//       </h2>

//       <div className="absolute left-11 top-[38%] z-20 flex flex-col items-center">
//         {items.map((item, i) => (
//           <React.Fragment key={item.no}>
//             <div className="about-num flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 text-xl">
//               {item.no}
//             </div>
//             {i !== items.length - 1 && <div className="h-8 w-px bg-zinc-800" />}
//           </React.Fragment>
//         ))}
//       </div>

//       <div className="absolute left-1/2 top-[52%] h-[560px] w-[780px] -translate-x-1/2 -translate-y-1/2">
//         <img src={baseImg} alt="" className="absolute inset-0 w-full opacity-80" />

//         {items.map((item) => (
//           <div
//             key={item.no}
//             className={`about-group absolute h-[145px] w-[175px] -translate-x-1/2 -translate-y-1/2 ${item.pos}`}
//           >
//             <img src={item.block} alt="" className="absolute inset-0 w-full" />
//             <img
//               src={item.icon}
//               alt=""
//               className="about-icon absolute left-1/2 top-[38%] w-[82px] -translate-x-1/2 -translate-y-1/2"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="absolute right-16 top-7 w-[330px] text-right">
//         {items.map((item) => (
//           <p
//             key={item.desc}
//             className="about-desc absolute right-0 top-0 text-xl leading-snug text-white"
//           >
//             {item.desc}
//           </p>
//         ))}
//       </div>

//       <div className="absolute right-16 top-[37%] w-[360px] text-right">
//         {items.map((item) => (
//           <h3
//             key={item.title}
//             className="about-title absolute right-0 top-0 text-[58px] font-light leading-none text-zinc-300"
//           >
//             {item.title}
//           </h3>
//         ))}
//       </div>

//       <div className="absolute bottom-20 right-36 grid grid-cols-2 gap-x-10 gap-y-2 text-right text-sm text-zinc-500">
//         <span>SYSTEM</span>
//         <span>PERFOMANCE</span>
//         <span>REAL-TIME</span>
//         <span>PREDICTIVE</span>
//       </div>
//     </section>
//   );
// }

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
    pos: "left-[48.5%] top-[24.5%]",
  },
  {
    no: "02",
    title: "Data",
    desc: "Unified Data Intelligence Foundation",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952afed8d4ca6576fcbdedf_linked-services.png",
    pos: "left-[64.5%] top-[42.5%]",
  },
  {
    no: "03",
    title: "Auto",
    desc: "Adaptive Automation Workflow System",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f1c8555865fea32ed_auto-renew.png",
    pos: "left-[32.5%] top-[42.5%]",
  },
  {
    no: "04",
    title: "Security",
    desc: "Secure and Scalable Core Infrastructure",
    icon: "https://cdn.prod.website-files.com/694f372b123017b1e0a43316/6952a95f0b7d0e5d63ed20fb_encrypted.png",
    pos: "left-[48.5%] top-[60.5%]",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const groups = gsap.utils.toArray(".about-group");
    const icons = gsap.utils.toArray(".about-icon");
    const titles = gsap.utils.toArray(".about-title");
    const descs = gsap.utils.toArray(".about-desc");
    const nums = gsap.utils.toArray(".about-num");
    const labels = gsap.utils.toArray(".about-label span");
const plusIcons = gsap.utils.toArray(".plus-icon");

gsap.set(plusIcons, {
  opacity: 0.7,
});
    gsap.set(groups, {
      y: -45,
      opacity: 0.85,
      scale: 1.02,
    });

    gsap.set(icons, {
      y: -18,
      opacity: 0.35,
      scale: 0.95,
    });

    gsap.set([titles, descs], {
      autoAlpha: 0,
      y: 30,
    });

    gsap.set(labels, {
      autoAlpha: 0,
      y: 16,
    });

    gsap.set(nums, {
      opacity: 0.35,
      backgroundColor: "transparent",
      color: "#fff",
      borderColor: "#333",
    });

    const plusTl = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

plusTl.to(".plus-icon", {
  color: "#0ea5e9",
  duration: 0.8,
  stagger: {
    each: 0.04,
    from: "start",
  },
  ease: "sine.inOut",
});

plusTl.to(".plus-icon", {
  color: "#22c55e",
  duration: 0.8,
  stagger: {
    each: 0.04,
    from: "center",
  },
  ease: "sine.inOut",
});

plusTl.to(".plus-icon", {
  color: "#d4d4d8",
  duration: 0.8,
  stagger: {
    each: 0.04,
    from: "end",
  },
  ease: "sine.inOut",
});

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=5200",
        pin: true,
        scrub: 1.2,
      },
    });

    tl.to(groups, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.08,
    });

    tl.to(
      icons,
      {
        y: 0,
        opacity: 0.45,
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

    tl.to(labels, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
    });

    items.forEach((_, i) => {
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

      tl.to(
        descs[i],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
        },
        "<"
      );

      tl.to(
        titles[i],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
        },
        "-=0.25"
      );

      tl.to(
        groups[i],
        {
          y: -42,
          scale: 1.08,
          duration: 0.45,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        icons[i],
        {
          y: -50,
          opacity: 1,
          scale: 1.15,
          duration: 0.35,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(icons[i], {
        y: -25,
        scale: 1.05,
        duration: 0.25,
        ease: "power1.inOut",
      });

      tl.to(icons[i], {
        y: -42,
        scale: 1.12,
        duration: 0.25,
        ease: "power1.out",
      });

      tl.to([groups[i], icons[i]], {
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "power2.inOut",
      });

      tl.to({}, { duration: 0.65 });

      if (i !== items.length - 1) {
        tl.to([descs[i], titles[i]], {
          autoAlpha: 0,
          y: -25,
          duration: 0.45,
        });

        tl.to(
          icons[i],
          {
            opacity: 0.45,
            duration: 0.35,
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute left-8 top-10 grid grid-cols-4 gap-x-6 gap-y-5 text-3xl leading-none">
  {Array.from({ length: 16 }).map((_, i) => (
    <span
      key={i}
      className="plus-icon text-zinc-700  select-none"
    >
      +
    </span>
  ))}
</div>

      <p className="absolute left-[36%] top-10 text-xs tracking-widest text-zinc-500">
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

      <div className="absolute left-1/2 top-[53%] h-[560px] w-[780px] -translate-x-1/2 -translate-y-1/2">
        <img
          src={groundImg}
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-90"
        />

        {items.map((item) => (
          <div
            key={item.no}
            className={`about-group absolute h-[150px] w-[185px] -translate-x-1/2 -translate-y-1/2 ${item.pos}`}
          >
            <img src={blockImg} alt="" className="absolute inset-0 w-full" />

            <img
              src={item.icon}
              alt=""
              className="about-icon absolute left-1/2 top-[38%] w-[78px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>

      <div className="absolute right-16 top-7 w-[330px] text-right">
        {items.map((item) => (
          <p
            key={item.desc}
            className="about-desc absolute right-0 top-0 text-xl leading-snug text-white"
          >
            {item.desc}
          </p>
        ))}
      </div>

      <div className="absolute right-16 top-[37%] w-[360px] text-right">
        {items.map((item) => (
          <h3
            key={item.title}
            className="about-title absolute right-0 top-0 text-[58px] font-light leading-none text-zinc-300"
          >
            {item.title}
          </h3>
        ))}
      </div>

      <div className="about-label absolute bottom-20 right-36 grid grid-cols-2 gap-x-10 gap-y-2 text-right text-sm text-zinc-500">
        <span>SYSTEM</span>
        <span>PERFORMANCE</span>
        <span>REAL-TIME</span>
        <span>PREDICTIVE</span>
      </div>
    </section>
  );
}