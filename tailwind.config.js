/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3"
      }
      //     fontFamily: {
      //       barlow: "'Barlow',sans-serif",
      //       sans: ["Barlow", ...defaultTheme.fontFamily.sans]
      //     },
      //     colors: {
      //       "royal-blue": "var(--color-text-blue)",
      //       "light-grey": "var(--color-light-grey)",
      //       "dark-grey": "var(--color-dark-grey)",
      //       grey: "var(--color-background-grey)",
      //       muted: "var(--color-text-muted)"
      //     },
      //     textColor: {
      //       skin: {
      //         white: "var(--color-text-white)",
      //         base: "var(--color-text-base)",
      //         muted: "var(--color-text-muted)",
      //         bold: "var(--color-text-bold)",
      //         up: withOpacity("--color-text-green"),
      //         down: withOpacity("--color-text-red"),
      //         select: "var(--color-text-blue)",
      //         secondary: "var(--text-secondary)",
      //         blue: "var(--color-text-blue)",
      //         disable: "var(--color-text-blue-light24)",
      //         yellow: "var(--color-text-yellow)",
      //         black: "var(--color-text-black)",
      //         grey: "var(--color-background-grey)",
      //         purple: "var(--color-secondary-purple)",
      //         cyan: "var(--color-background-cyan)",
      //         silver: "var(--color-border-popover)",
      //         spanishGrey: "var(--color-text-grey)",
      //         red: "var(--color-background-orange)"
      //       }
      //     },
      //     borderColor: {
      //       skin: {
      //         background: "var(--color-background-blue)",
      //         select: "var(--color-text-blue)",
      //         up: withOpacity("--color-text-green"),
      //         down: withOpacity("--color-text-red"),
      //         mutedUp: "var(--color-text-green-light24)",
      //         grey: "var(--color-border-grey)",
      //         bgGrey: "var(--color-background-grey)",
      //         baseGrey: "var(--color-text-base)",
      //         blue: "var(--color-text-blue)",
      //         dark: "var(--color-background-hover-blue)",
      //         muted: "var(--color-text-muted)",
      //         yellow: "var( --color-text-yellow)",
      //         sell24: "var(--color-text-red-light24)",
      //         buy24: "var(--color-text-green-light24)",
      //         buy: "var(--color-text-green-light12)",
      //         orange: "var(--color-yellow-border)",
      //         bold: "var(--color-text-bold)",
      //         white: "var(--color-text-white)",
      //         purple: "var(--color-secondary-purple)",
      //         overlapMuted: "var(--color-overlap-muted)",
      //         lYellow: "var(--color-background-yellow-light12)",
      //         disable12: "var(--color-text-blue-light12)",
      //         overlapWhite: "var(--color-overlap-white)"
      //       }
      //     },
      //     backgroundColor: {
      //       skin: {
      //         grey: "var(--color-background-grey)",
      //         greyBg: "var(--color-border-grey)",
      //         hover: "var(--color-background-hover)",
      //         select: "var(--color-background-blue)",
      //         sell: "var(--color-text-red-light12)",
      //         buy: "var(--color-text-green-light12)",
      //         yellow: "var(--color-text-yellow)",
      //         fx: "var(--color-background-fx)",
      //         lYellow: "var(--color-background-yellow-light12)",
      //         yellow24: "var(--color-background-yellow-light24)",
      //         dark: "var(--color-text-bold)",
      //         mBlue: "var(--color-background-medium-blue)",
      //         royalblue: "var(--color-text-blue)",
      //         purple: "var(--color-secondary-purple)",
      //         opt: "var(--color-background-purple)",
      //         purple12: "var(--color-secondary-purple-light12)",
      //         purple24: "var(--color-secondary-purple-light24)",
      //         cyan: "var(--color-background-cyan)",
      //         lCyan: "var(--color-background-cyan-light12)",
      //         up: withOpacity("--color-text-green"),
      //         down: withOpacity("--color-text-red"),
      //         hoverUp: "var(--color-background-hover-green)",
      //         darkBackground: "var(--color-text-muted)",
      //         white: "var(--color-text-white)",
      //         lightGrey: "var(--color-background-lightgrey)",
      //         hoverExtraDown: "var(--color-text-red-light24)",
      //         base: "var(--color-text-base)",
      //         disable: "var(--color-text-blue-light24)",
      //         disable12: "var(--color-text-blue-light12)",
      //         black: withOpacity("--color-black"),
      //         overlapGrey: "var(--color-overlap-grey)",
      //         overlapWhite: "var(--color-overlap-white)",
      //         chartCyan: "var(--color-chart-cyan)",
      //         muted: "var(--color-text-muted)",
      //         overlapHover: "var(--color-overlap-hover)"
      //       }
      //     },
      //     flex: {
      //       2: "2 2 0%"
      //     },
      //     boxShadow: {
      //       around: "0 10px 20px 0 var(--color-around-color)",
      //       bottom: "0 5px 12px var(--color-shadow-color)",
      //       top: "0 -4px 12px var(--color-top-color)",
      //       all: "0px 8px 12px 0px var(--color-shadow-color)",
      //       bottomBorder: "0px 1px 0px var(--color-rightBorder-color)",
      //       rightBorder: "inset -1px 0px var(--color-rightBorder-color)",
      //       lgTop: "8px 0px 12px var(--color-shadow-color)",
      //       mdBottom: "0px 4px 3px var(--color-shadow-color)",
      //       left: "-6px 0px 8px -1px var(--color-around-color)",
      //       right: "6px 0 8px -1px var(--color-around-color)",
      //       mdAll: "0 2px 8px var(--color-all-color)",
      //       overlapShadow: "var(--color-overlap-shadow)",
      //       basketShadow: "var(--color-basket-shadow)",
      //       lgAll: "0px 2px 8px 0px var(--color-all-color)"
      //     },
      //     borderWidth: {
      //       3: "3px"
      //     },
      //     transitionProperty: {
      //       "max-height": "max-height",
      //       visibility: "visibility"
      //     },
      //     maxHeight: {
      //       200: "50rem"
      //     },
      //     backgroundImage: {
      //       "statement-slide":
      //         "url('https://cdn.angelone.in/sparkweb/images/slide-bg1.png')"
      //     },
      //     outlineColor: {
      //       skin: {
      //         buy: "var(--color-text-green-light12)",
      //         sell: "var(--color-text-red-light12)",
      //         mutedUp: "var(--color-text-green-light24)",
      //         mutedDown: "var(--color-text-red-light24)",
      //         greyBg: "var(--color-border-grey)",
      //         lYellow: "var(--color-background-yellow-light12)",
      //         disable12: "var(--color-text-blue-light12)",
      //         disable: "var(--color-text-blue-light24)"
      //       }
      //     },
      //     fontSize: {
      //       8: "0.5rem",
      //       xxs: ["0.625rem", "0.75rem"],
      //       20: "1.25rem",
      //       15: "0.9375rem",
      //       18: "1.125rem",
      //       26: "1.625rem",
      //       40: "2.5rem"
      //     },
      //     rotate: {
      //       360: "360deg"
      //     },
      //     zIndex: {
      //       5: "5"
      //     },
      //     lineHeight: {
      //       19: "1.188rem",
      //       31: "1.938rem",
      //       17: "1.063rem",
      //       18: "1.125rem",
      //       22: "1.375rem",
      //       3.5: "0.875rem",
      //       48: "3rem"
      //     },
      //     spacing: {
      //       5.5: "1.375rem",
      //       7.5: "1.875rem",
      //       17: "1.063rem",
      //       18: "1.125rem",
      //       15: "3.75rem",
      //       58: "14.5rem"
      //     },
      //     screens: {
      //       "3xl": "1600px",
      //       xl: "1270px"
      //     },
      //     height: {
      //       17: "4.125rem",
      //       18: "4.25rem",
      //       81: "22.5rem",
      //       82: "23.25rem",
      //       98: "28.75rem",
      //       7.5: "1.875rem",
      //       4.5: "1.125rem",
      //       11.5: "2.875rem"
      //     },
      //     width: {
      //       17: "4.125rem",
      //       18: "4.25rem",
      //       42: "10.3125rem",
      //       71: "17.875rem",
      //       81: "22.5rem",
      //       81.5: "22.875rem",
      //       82: "23.25rem",
      //       98: "28.75rem",
      //       7.5: "1.875rem"
      //     },
      //     gradientColorStops: {
      //       lYellow: "var(--color-background-yellow-light12)",
      //       whitebg: "var(--color-text-white)",
      //       sell: "var(--color-text-red-light12)",
      //       bluelight: "var(--color-text-blue-light12)"
      //     },
      //     keyframes: {
      //       wiggle: {
      //         "0%": { transform: "translate(1px)" },
      //         "10%": { transform: "translate(-1px)" },
      //         "20%": { transform: "translate(-3px)" },
      //         "30%": { transform: "translate(3px)" },
      //         "40%": { transform: "translate(1px)" },
      //         "50%": { transform: "translate(-1px)" },
      //         "60%": { transform: "translate(-3px)" },
      //         "70%": { transform: "translate(3px)" },
      //         "80%": { transform: "translate(-1px)" },
      //         "90%": { transform: "translate(1px)" },
      //         "100%": { transform: "translate(1px)" }
      //       },
      //       expand: {
      //         "0%": { width: "23rem", height: "5.8rem" },
      //         "100%": { width: "54rem", height: "16.6rem" }
      //       },
      //       contract: {
      //         "0%": { width: "54rem", height: "16.6rem" },
      //         "100%": { width: "23rem", height: "5.8rem" }
      //       },
      //       scaleInOut: {
      //         "0%, 100%": { transform: "scale(1)" },
      //         "50%": { transform: "scale(1.2)" }
      //       },
      //       resetScale: {
      //         "0%, 100%": { transform: "scale(1)" }
      //       }
      //     },
      //     animation: {
      //       wiggle: "wiggle 0.35s ease-in-out",
      //       expand: "expand 0.25s ease-in-out",
      //       contract: "contract 0.25s ease-in-out",
      //       scaleInOut: "scaleInOut 0.25s ease-in-out",
      //       resetScale: "resetScale 0.25s ease-in-out"
      //     }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: ["light", "dark", "valentine"]
    // darkTheme: "valentine"
  }
}
