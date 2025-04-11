
export const leftFollow = {
    hidden: { opacity: 0, x: -50 },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.7, ease: "easeInOut" },
    }),
  };

  export const rightFollow = {
    hidden: { opacity: 0, x: 50 },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
    }),
  };

  