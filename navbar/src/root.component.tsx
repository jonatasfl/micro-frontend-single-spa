import { ChakraProvider } from "@chakra-ui/react"

import Navbar from "./components/Navbar"

export default function Root() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  )
}