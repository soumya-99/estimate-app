import { Platform, useColorScheme } from "react-native"
import { MD3LightTheme, MD3DarkTheme, configureFonts } from "react-native-paper"

export const usePaperColorScheme = () => {
  const colorScheme = useColorScheme()
  const fontConfig = {
    default: {
      fontFamily: "ProductSans-Medium",
    },
    labelSmall: {
      fontFamily: "ProductSans-Medium",
      fontSize: 15,
    },
    labelMedium: {
      fontFamily: "ProductSans-Medium",
      fontSize: 15,
    },
    labelLarge: {
      fontFamily: "ProductSans-Medium",
      fontSize: 15,
    },
    titleLarge: {
      fontFamily: "ProductSans-Bold",
      fontSize: 20,
    },
    bodyMedium: {
      fontFamily: "ProductSans-Medium",
      fontSize: 17,
    },
    bodyLarge: {
      fontFamily: "ProductSans-Medium",
      fontSize: 17,
    },
    displayMedium: {
      fontFamily: "ProductSans-Medium",
      fontSize: 40,
    },
    displaySmall: {
      fontFamily: "ProductSans-Medium",
      fontSize: 35,
    },
    headlineMedium: {
      fontFamily: "ProductSans-Medium",
      fontSize: 20,
    },
    headlineLarge: {
      fontFamily: "ProductSans-Medium",
      fontSize: 24,
    },
  }

  return colorScheme === "dark"
    ? {
      ...MD3DarkTheme,
      colors: {
        ...MD3DarkTheme.colors,
        primary: "#85cfff",
        onPrimary: "#00344c",
        primaryContainer: "#004c6c",
        onPrimaryContainer: "#c7e7ff",
        secondary: "#b6c9d8",
        onSecondary: "#21323e",
        secondaryContainer: "#374955",
        onSecondaryContainer: "#d2e5f5",
        tertiary: "#cdc0e9",
        onTertiary: "#342b4b",
        tertiaryContainer: "#4b4263",
        onTertiaryContainer: "#e9ddff",
        error: "rgb(255, 180, 171)",
        onError: "rgb(105, 0, 5)",
        errorContainer: "rgb(147, 0, 10)",
        onErrorContainer: "rgb(255, 180, 171)",
        background: "#191c1e",
        onBackground: "#e2e2e5",
        surface: "rgb(26, 28, 30)",
        onSurface: "rgb(227, 226, 230)",
        surfaceVariant: "rgb(67, 71, 78)",
        onSurfaceVariant: "rgb(195, 198, 207)",
        outline: "rgb(141, 145, 153)",
        outlineVariant: "rgb(67, 71, 78)",
        shadow: "rgb(0, 0, 0)",
        scrim: "rgb(0, 0, 0)",
        inverseSurface: "rgb(227, 226, 230)",
        inverseOnSurface: "rgb(47, 48, 51)",
        inversePrimary: "rgb(0, 95, 175)",
        elevation: {
          level0: "transparent",
          level1: "rgb(33, 37, 41)",
          level2: "rgb(37, 42, 48)",
          level3: "rgb(41, 47, 55)",
          level4: "rgb(43, 49, 57)",
          level5: "rgb(46, 52, 62)",
        },
        surfaceDisabled: "rgba(227, 226, 230, 0.12)",
        onSurfaceDisabled: "rgba(227, 226, 230, 0.38)",
        backdrop: "rgba(45, 49, 56, 0.4)",

        green: "#98d781",
        onGreen: "#083900",
        greenContainer: "#1a520c",
        onGreenContainer: "#b4f39b",
        greenTertiary: "#a0cfd1",
        onGreenTertiary: "#003739",
        greenContainerTertiary: "#1e4e50",
        onGreenContainerTertiary: "#bcebed",

        orange: "rgb(255, 183, 134)",
        onOrange: "rgb(80, 36, 0)",
        orangeContainer: "rgb(114, 54, 0)",
        onOrangeContainer: "rgb(255, 220, 198)",

        pink: "rgb(255, 177, 194)",
        onPink: "rgb(102, 0, 43)",
        pinkContainer: "#8e004b",
        onPinkContainer: "#ffd9e2",

        purple: "#d2bcff",
        onPurple: "#3b1978",
        purpleContainer: "#523490",
        onPurpleContainer: "#eaddff",

        teal: "rgb(29, 225, 157)",
        onTeal: "rgb(0, 56, 36)",
        tealContainer: "rgb(0, 82, 54)",
        onTealContainer: "rgb(79, 254, 184)",

        peach: "#ffb3b3",
        onPeach: "#5f131b",
        peachContainer: "#7e2a2f",
        onPeachContainer: "#ffdad9",
        peachTertiary: "#e5c18d",
        onPeachTertiary: "#422c05",
        peachTertiaryContainer: "#5b421a",
        onPeachTertiaryContainer: "#ffdeae",

        vanilla: "#bcd063",
        onVanilla: "#2b3400",
        vanillaContainer: "#404c00",
        onVanillaContainer: "#d8ed7c",
        vanillaSecondary: "#c5c9a8",
        onVanillaSecondary: "#2e331b",
        vanillaSecondaryContainer: "#45492f",
        onVanillaSecondaryContainer: "#e1e6c3",
        vanillaTertiary: "#a1d0c4",
        onVanillaTertiary: "#04372f",
        vanillaTertiaryContainer: "#214e45",
        onVanillaTertiaryContainer: "#bdece0",
        vanillaSurface: "#13140d",
        vanillaSurfaceLow: "#1b1c15"
      },
      fonts: configureFonts({ config: fontConfig }),
    }
    : {
      ...MD3LightTheme,
      colors: {
        ...MD3LightTheme.colors,
        primary: "#00658f",
        onPrimary: "rgb(255, 255, 255)",
        primaryContainer: "#c7e7ff",
        onPrimaryContainer: "#001e2e",
        secondary: "#4f616e",
        onSecondary: "rgb(255, 255, 255)",
        secondaryContainer: "#d2e5f5",
        onSecondaryContainer: "#0b1d29",
        tertiary: "#63597c",
        onTertiary: "rgb(255, 255, 255)",
        tertiaryContainer: "#e9ddff",
        onTertiaryContainer: "#1f1635",
        error: "rgb(186, 26, 26)",
        onError: "rgb(255, 255, 255)",
        errorContainer: "rgb(255, 218, 214)",
        onErrorContainer: "rgb(65, 0, 2)",
        background: "#fcfcff",
        onBackground: "#191c1e",
        surface: "rgb(253, 252, 255)",
        onSurface: "rgb(26, 28, 30)",
        surfaceVariant: "rgb(224, 226, 236)",
        onSurfaceVariant: "rgb(67, 71, 78)",
        outline: "rgb(116, 119, 127)",
        outlineVariant: "rgb(195, 198, 207)",
        shadow: "rgb(0, 0, 0)",
        scrim: "rgb(0, 0, 0)",
        inverseSurface: "rgb(47, 48, 51)",
        inverseOnSurface: "rgb(241, 240, 244)",
        inversePrimary: "rgb(165, 200, 255)",
        elevation: {
          level0: "transparent",
          level1: "rgb(240, 244, 251)",
          level2: "rgb(233, 239, 249)",
          level3: "rgb(225, 235, 246)",
          level4: "rgb(223, 233, 245)",
          level5: "rgb(218, 230, 244)",
        },
        surfaceDisabled: "rgba(26, 28, 30, 0.12)",
        onSurfaceDisabled: "rgba(26, 28, 30, 0.38)",
        backdrop: "rgba(45, 49, 56, 0.4)",

        green: "#336b23",
        onGreen: "rgb(255, 255, 255)",
        greenContainer: "#b4f39b",
        onGreenContainer: "#032100",
        greenTertiary: "#386668",
        onGreenTertiary: "#ffffff",
        greenContainerTertiary: "#bcebed",
        onGreenContainerTertiary: "#002021",

        orange: "rgb(150, 73, 0)",
        onOrange: "rgb(255, 255, 255)",
        orangeContainer: "rgb(255, 220, 198)",
        onOrangeContainer: "rgb(49, 19, 0)",

        pink: "rgb(185, 12, 85)",
        onPink: "rgb(255, 255, 255)",
        pinkContainer: "#ffd9e2",
        onPinkContainer: "#3e001d",

        purple: "#6a4da9",
        onPurple: "#ffffff",
        purpleContainer: "#eaddff",
        onPurpleContainer: "#24005a",

        teal: "rgb(0, 108, 73)",
        onTeal: "rgb(255, 255, 255)",
        tealContainer: "rgb(79, 254, 184)",
        onTealContainer: "rgb(0, 33, 19)",

        peach: "#9c4145",
        onPeach: "#ffffff",
        peachContainer: "#ffdad9",
        onPeachContainer: "#400009",
        peachTertiary: "#755a2f",
        onPeachTertiary: "#ffffff",
        peachTertiaryContainer: "#ffdeae",
        onPeachTertiaryContainer: "#281800",

        vanilla: "#556500",
        onVanilla: "#ffffff",
        vanillaContainer: "#d8ed7c",
        onVanillaContainer: "#181e00",
        vanillaSecondary: "#5c6145",
        onVanillaSecondary: "#ffffff",
        vanillaSecondaryContainer: "#e1e6c3",
        onVanillaSecondaryContainer: "#191d08",
        vanillaTertiary: "#3a665c",
        onVanillaTertiary: "#ffffff",
        vanillaTertiaryContainer: "#bdece0",
        onVanillaTertiaryContainer: "#00201b",
        vanillaSurface: "#fbfaed",
        vanillaSurfaceLow: "#f5f4e7"
      },
      fonts: configureFonts({ config: fontConfig }),
    }
}
