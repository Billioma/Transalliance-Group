import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "1636px",
};

export const customTheme = extendTheme({
  fonts: {
    heading: `DM Sans`,
    body: `DM Sans`,
  },
  breakpoints,
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: "#122038",
            borderColor: "#122038",
          },
        },
      },
    },

    Input: {
      variants: {
        primary: {
          field: {
            bgColor: "#fff",
            border: "1px solid #555555",
            height: "48px",
            borderRadius: "10px",
            color: "#000",
            _placeholder: {
              color: "gray",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },

    Textarea: {
      variants: {
        primary: {
          bgColor: "#fff",
          border: "1px solid #555555",
          height: "120px",
          borderRadius: "10px",
          color: "#000",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },

    Button: {
      variants: {
        primary: {
          border: "none",
          bgColor: "red",
          borderRadius: "4px",
          color: "#fff",
          transition: ".3s ease-in-out",
          fontSize: "14px",
          fontWeight: "500",
          _hover: {
            opacity: 0.9,
          },
          _disabled: {
            _hover: {
              border: "1px solid #7B47CC",
              color: "red",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },
});
