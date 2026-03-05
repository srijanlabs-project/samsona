import "./globals.css";

export const metadata = {
  title: "Samsona Services Pvt Ltd",
  description:
    "Telecom infrastructure, staffing services, digital display solutions and enterprise technology services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}