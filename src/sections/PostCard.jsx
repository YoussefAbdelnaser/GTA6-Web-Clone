import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".animated-gradient-bg", { opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".post-card",
        start: "top 50%",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to(".animated-gradient-bg", { opacity: 1, duration: 1, ease: "power1.inOut" });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        { currentTime: videoRef.current.duration, duration: 3, ease: "power1.inOut" },
        "<"
      );
    };
  });

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src="/images/overlay.webp" alt="post card overlay" />
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src="/videos/postcard-vd.mp4"
          className="scale-115"
        />

        <button className="group-hover bg-yellow transition duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  );
};

export default PostCard;
