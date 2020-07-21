const HeroSection = () => {
  return (
    <section style={{ width: "100%" }}>
      <style jsx>{`
        section {
          width: 100vw;
          height: 85vh;
          background-image: linear-gradient(
              180deg,
              #000000 0%,
              rgba(0, 0, 0, 0.62) 51.56%,
              rgba(0, 0, 0, 0.49) 100%
            ),
            url(/assets/images/herosection.jpg);
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
