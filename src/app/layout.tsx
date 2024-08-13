import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

export const metadata = {
  title: "Medicine Tracker",
  description: "A Next.js app with MUI and Chart.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
