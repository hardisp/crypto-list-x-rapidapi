import { ChartView } from '@app/components'
import useFetch from '@app/hooks/useFetch'
import currency from '@app/utils/currency'
import { Box, CircularProgress, Flex, Heading, Image } from '@chakra-ui/react'

import { useLoaderData } from 'react-router-dom'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import ErrorPage from '@app/pages/ErrorPage'
import useTitle from '@app/hooks/useTitle'
import useDispatcher from '@app/hooks/useDispatcher'

export async function loader({ params }: any) {
  return { ...params }
}

function CryptoPage() {
  const { slug } = useLoaderData() as any
  const { response, loading, error } = useFetch({
    method: 'get',
    path: `/coin/${slug}`,
    body: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
    },
  })

  const { state } = useDispatcher({
    data: response?.data?.coin ?? null,
    loading,
    error,
  })

  useTitle(state?.data?.name)

  if (loading) {
    return <CircularProgress isIndeterminate color='cyan.300' />
  }

  if (error) {
    return <ErrorPage />
  }

  const { data } = state

  return (
    <Box>
      <Box px={'8'} className={'meta-content-head'}>
        <Flex justify={'space-between'} align={'center'} mb={'10'}>
          <Heading
            as={'h2'}
            variant={'pagetitle'}
            className={'meta-content-head-title'}
            display={'flex'}
            alignItems={'center'}
            fontWeight={'bold'}
            flexWrap={'wrap'}
          >
            <Box pr={'2'}>
              <Image src={data?.iconUrl ?? ''} w={'60px'} />
            </Box>
            <Box pr={'2'} role={'pageName'}>
              {data?.name ?? ''}{' '}
            </Box>
            <Box
              fontSize={'xs'}
              bgColor={'gray.100'}
              px={'2'}
              lineHeight={'1em'}
              borderRadius={'md'}
              py={'2'}
              fontWeight={'400'}
              color={'gray.500'}
            >
              {data?.symbol ?? ''}
            </Box>
            <Box flex={' 0 0 100%'} mt={'4'}>
              <Box justifySelf={'flex-end'} fontSize={'70%'} color={'gray.500'}>
                Rank #{data?.rank}
              </Box>
            </Box>
          </Heading>

          <Flex align={'center'}>
            <Flex flexDir={'column'} pr={'4'}>
              <Box color={'gray.400'}>Current Price</Box>
              <Box fontSize={'130%'} fontWeight={'bold'}>
                {currency.formatter.format(parseFloat(data?.price ?? '0'))}
              </Box>
            </Flex>
            <Flex
              bgColor={data?.change >= 0 ? 'green.400' : 'red.400'}
              color={'white'}
              px={3}
              py={1}
              borderRadius={'lg'}
              fontSize={'80%'}
            >
              <Box pr={'1'}>
                {data?.change >= 0 ? <TriangleUpIcon /> : <TriangleDownIcon />}
              </Box>
              <Box>{data?.change ?? 'N/A'} %</Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <ChartView name={data?.symbol} />
    </Box>
  )
}

export default CryptoPage
