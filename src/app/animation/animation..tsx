
export const heroVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.7, ease: "easeInOut" },
    }),
  };

  export const Introduction = {
    hidden: { opacity: 0, x: 50 },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
    }),
  };

  export const Roadmap = {
    hidden: { opacity: 0, x: -50 },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
    }),
  };

  export const Partner = {
    hidden: { opacity: 0, x: 50 },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
    }),
  };

  export const Community = {
    hidden: { opacity: 0, y: 50 },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
    }),
  };
  