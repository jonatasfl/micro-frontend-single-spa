import { ChakraProvider, Container, Grid, GridItem } from "@chakra-ui/react"

import ProductList from "./components/ProductList"

export default function Root(props) {
  return (
    <ChakraProvider>
      <ProductList />
    </ChakraProvider>
  );
}
