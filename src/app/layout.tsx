import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import KirumoIcon from "/public/images/metadata/KirumoIcon.ico";
import { Inter } from "next/font/google";
import { clotherList } from "../../api/@types";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "kirumo App",
  description: "kirumo app page",
  icons: [{ rel: "icon", url: KirumoIcon.src }],
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // const [cartList, setCartList] = useState<clotherList[]>([]);
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        {/* <cartContext.Provider value={cartList}> */}
        <Provider>{children}</Provider>
        {/* </cartContext.Provider> */}
      </body>
    </html>
  );
};
export default RootLayout;
