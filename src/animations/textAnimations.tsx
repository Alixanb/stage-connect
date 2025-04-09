import { Variants } from 'framer-motion'

type AnimationPreset = {
  container: Variants
  item?: Variants
  description?: string
}

export const textAnimations: Record<string, AnimationPreset> = {
  disperse: {
    container: {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.02,
          delayChildren: 0.02 * i,
        },
      }),
    },
    item: {
      hidden: {
        opacity: 0,
        y: 10,
        x: -10,
        rotate: -5,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        transition: {
          type: 'spring',
          damping: 15,
          stiffness: 200,
          mass: 0.8,
        },
      },
    },
    description:
      'Les caractères apparaissent en volant depuis différentes directions',
  },

  fadeIn: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: 'easeIn',
        },
      },
    },
    description: 'Simple fondu en entrée et sortie',
  },

  reveal: {
    container: {
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    description: 'Le texte glisse vers le haut en apparaissant',
  },

  typewriter: {
    container: {
      hidden: { opacity: 1 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.02 * i,
        },
      }),
    },
    item: {
      hidden: { opacity: 0, display: 'inline-block' },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.15,
          ease: 'linear',
        },
      },
    },
    description: 'Effet machine à écrire',
  },

  scale: {
    container: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: [0.175, 0.885, 0.32, 1],
        },
      },
    },
    description: 'Le texte grandit en apparaissant',
  },

  slideIn: {
    container: {
      hidden: {
        opacity: 0,
        x: -50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    description: 'Le texte glisse depuis la gauche',
  },

  clipReveal: {
    container: {
      hidden: {
        opacity: 1,
        clipPath: 'inset(0 100% 0 0)',
      },
      visible: {
        opacity: 1,
        clipPath: 'inset(0 0 0 0)',
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    description: 'Révèle le texte avec un effet de clip',
  },

  wordByWord: {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)',
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },
    description: 'Les mots apparaissent successivement avec un léger flou',
  },

  paragraph: {
    container: {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: i * 0.1,
        },
      }),
    },
    item: {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    description:
      'Animation de paragraphes ligne par ligne inspirée de GSAP SplitText',
  },

  textMask: {
    container: {
      hidden: {
        opacity: 1,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 0,
        clipPath: 'inset(100% 0 0 0)',
      },
      visible: {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0 0)',
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth reveal
        },
      },
    },
    description:
      'Effet de masque qui révèle progressivement le texte par un défilement vertical',
  },
}

export const splitText = (text: string) => {
  return Array.from(text).map((char, index) => (
    <span
      key={index}
      style={{
        display: 'inline-block',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

export const splitTextByWords = (text: string) => {
  return text.split(' ').map((word, index) => (
    <span
      key={index}
      style={{
        display: 'inline-block',
        marginRight: '0.25em',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    >
      {word}
    </span>
  ))
}

export const splitTextByLines = (text: string) => {
  // Simple line splitting - in a real implementation you might need
  // to handle actual line breaks more intelligently
  return text.split('\n').map((line, index) => (
    <span
      key={index}
      style={{
        display: 'block',
        overflow: 'hidden',
        marginBottom: '0.2em',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        {line || '\u00A0'}
      </span>
    </span>
  ))
}
