// Animation utilities and configurations

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}

export const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
}

export const scaleIn = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { duration: 0.3 },
}
