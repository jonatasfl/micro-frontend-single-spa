import { Container, Grid, GridItem } from "@chakra-ui/react"

import Product from "../Product";

import products from "../../products";

export default function Root(props) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={2}>
      {products.map(p => (
        <GridItem key={p.id}>
          <Product product={p}/>
        </GridItem>
      ))}
    </Grid>
  );
}
