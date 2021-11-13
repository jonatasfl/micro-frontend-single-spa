import { ChakraProvider } from "@chakra-ui/react";

import Footer from "./components/Footer";

export default function Root(props) {
  return (
    <ChakraProvider>
      <Footer />
    </ChakraProvider>
  );
}
