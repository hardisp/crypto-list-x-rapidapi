import { Navigation } from '@app/modules'
import { BoxProps, Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export default function MasterLayout({ ...rest }: BoxProps) {
  return (
    <Box h={'100vh'} bgColor={'#F8F8FF'} overflow={'hidden'} {...rest}>
      {/* Navigation Section */}
      <Navigation />
      <Box
        px={5}
        py={4}
        h={'calc(100vh - 69px)'}
        overflow={'auto'}
        boxShadow={'sm'}
      >
        <Grid
          templateRows={'43px 1fr'}
          borderWidth={'0.5px'}
          borderColor={'gray.200'}
          borderRadius='3px'
          bgColor={'white'}
          minH={'full'}
        >
          <GridItem>
            <Box h={'43px'}></Box>
            <Box
              h={'0.5px'}
              w={'calc(100% - 6px)'}
              ml={'auto'}
              bgColor={'gray.200'}
            />
          </GridItem>
          <GridItem>
            <Flex
              flexWrap={'wrap'}
              pos={'relative'}
              alignItems={'stretch'}
              h={'full'}
            >
              <Box w={'full'} zIndex={1} px={3} py={4} h={'full'}>
                <Outlet />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
