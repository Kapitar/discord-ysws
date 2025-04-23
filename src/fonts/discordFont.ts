import localFont from "next/font/local";

const discordFont = localFont({
  src: [
    {
      path: "fonts/ABCGintoDiscord-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/ABCGintoDiscord-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "fonts/ABCGintoDiscord-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/ABCGintoDiscord-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "fonts/ABCGintoDiscordNord-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/ABCGintoDiscordNord-Bold.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "fonts/ABCGintoDiscordNord-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-discord",
});

export default discordFont;