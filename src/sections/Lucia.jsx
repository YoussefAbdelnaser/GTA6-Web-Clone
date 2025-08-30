import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Lucia = () => {
  useGSAP(() => {
    gsap.set(".lucia-life", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".lucia-life",
          start: "top 80%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".second-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".lucia-life .img-box",
      {
        scrollTrigger: {
          trigger: ".lucia-life",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -200,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96">
        <div className="lucia-1">
          <img src="/images/lucia-1.webp" alt="lucia image" />
        </div>
        <div className="lucia-3">
          <img src="/images/lucia-3.webp" alt="lucia image" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Suzy ElOrdonia</h1>
          <h2>By3ml haggat w maby2oleesh bas law afshto msh ha7l</h2>
          <p>
            Fresh out of prison and ready to change the odds in her favor. Suzy committed to her -
            plan no matter what it takes.
          </p>
        </div>
        <div className="lucia-2">
          <img src="/images/lucia-2.webp" alt="lucia image" />
        </div>
        <p className="max-w-xl lg:ps-32 ps-10">
          More than anything, Suzy wants the good life her mom has dreamed of since their days in
          Faisal - but instead of half-baked fantasies, Suzy is prepared to take matters into her
          own hands.
        </p>
      </div>
    </section>
  );
};

export default Lucia;
