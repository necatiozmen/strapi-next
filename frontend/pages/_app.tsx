import React from "react";
import { AppProps } from "next/app";
import { Layout } from "../src/components/layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: "#0070f3",
    },
};

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}
