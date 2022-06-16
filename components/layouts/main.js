import Head from 'next/head'
import NavBar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mathias Fröhlich - Homepage</title>
     </Head>

      <NavBar path={router.asPath}/>

      <Container maxW="container.md" pt={14}>
        <VoxelDog />
        { children }
      </Container>
    </Box>
  )
}

export default Main
