import type { AppProps } from "next/app";
import { Container } from "@mantine/core";

function App({ Component, pageProps }: AppProps) {
  return (
    <Container size="md">
      <Component {...pageProps} />
    </Container>
  );
}

export default App;
