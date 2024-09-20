export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "down" ? 40 : direction === "up" ? -40 : 0,
      x: direction === "right" ? 40 : direction === "left" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const textReveal = () => {
  return {
    hidden: {
      opacity: 0,
      y: 10,
    },
    reveal: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
};

export const projectRevealVariant = () => {
  return {
    hidden: {
      opacity: 0,
      y: 10,
    },
    reveal: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
};

