import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".jason .img-box",
      {
        scrollTrigger: {
          trigger: ".jason",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Fares El3asb</h1>
        <h2>Taalo ne3mlo wahed indomi w ntresooha shatta</h2>
        <p>
          Fares grew up around grifters and crooks. After a stint in the army trying to shake off
          his troubled teens, he found himself in the keys doing what he knows best, cooking indomi
          for local drug runners. It might be time to try something new
        </p>
        <div className="jason-2">
          <img src="/images/jason-2.webp" alt="jason image" />
        </div>
      </div>
      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" alt="jason image" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" alt="jason image" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
