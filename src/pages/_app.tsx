import seo from "@/config/seo.config";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
