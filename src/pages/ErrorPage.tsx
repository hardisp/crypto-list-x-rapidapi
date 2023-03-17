import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'

export default function ErrorPage() {
  return (
    <Grid
      justifyContent={'center'}
      alignContent={'center'}
      textAlign={'center'}
      h={'100vh'}
    >
      <GridItem>
        <Heading as='h2' mb={6} fontSize={'5xl'}>
          Page not found!
        </Heading>
        <Text fontSize={'xl'}>Sorry, an unexpected error has occurred.</Text>
      </GridItem>
    </Grid>
  )
}
