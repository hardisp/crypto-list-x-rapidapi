import { AppLink } from '@app/components'
import { APP_NAME } from '@app/configs/app'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import { ReactElement } from 'react'

function Navigation(): ReactElement {
  return (
    <Box w={'100%'} bgColor={'white'} boxShadow={'sm'}>
      {/* Wrrape Navigation Contennt */}
      <Box>
        <Flex
          flexWrap={'wrap'}
          justify={'space-between'}
          alignContent={'stretch'}
        >
          <Box flex={'0 0 auto'} h={'full'}>
            <Flex justify={'flex-start'} alignItems={'center'}>
              <Box pr={'5'} pl={'3'}>
                <Heading as={'h1'} fontSize={'24px'}>
                  <AppLink to={'/'}>{APP_NAME}</AppLink>
                </Heading>
              </Box>
              <Box>
                <Flex
                  sx={{
                    '.router-link': {
                      transition: 'background-color 220ms ease-in',
                      color: 'gray.600',
                      display: 'block',
                      '&:hover': {
                        bgColor: 'cyan.50',
                        _after: {
                          transform: 'scaleY(1)',
                        },
                      },
                      pos: 'relative',
                      _after: {
                        display: 'block',
                        transition: 'transform 220ms ease-in',
                        content: '""',
                        w: 'full',
                        h: '3px',
                        bgColor: 'cyan.200',
                        pos: 'absolute',
                        bottom: '0',
                        transform: 'scaleY(0)',
                        transformOrigin: 'bottom',
                      },
                    },
                  }}
                  align={'center'}
                  textTransform={'uppercase'}
                  h={'full'}
                >
                  <AppLink
                    to={'/'}
                    flex={' 0 0 auto'}
                    h={'full'}
                    display={'block'}
                    px={'25px'}
                    py={'18px'}
                    className={'active'}
                  >
                    Dashboard
                  </AppLink>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Navigation
