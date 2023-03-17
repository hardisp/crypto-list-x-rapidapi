import { CryptoList } from '@app/components'
import useDispatcher from '@app/hooks/useDispatcher'
import useFetch from '@app/hooks/useFetch'
import useTitle from '@app/hooks/useTitle'
import { Box, CircularProgress, Text } from '@chakra-ui/react'

export default function HomePage() {
  const { response, loading, error } = useFetch({
    method: 'get',
    body: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '10',
      offset: '0',
    },
  })

  useTitle()

  const { state } = useDispatcher({
    data: response?.data?.coins ?? [],
    loading,
    error,
  })

  if (loading) {
    return <CircularProgress isIndeterminate color='cyan.300' />
  }

  return (
    <Box>
      {error ? (
        <Text>No data available!</Text>
      ) : (
        <CryptoList
          data={
            state?.data?.map((c: any) => {
              return {
                rank: c.rank,

                detail: {
                  id: c.uuid,
                  name: c.name,
                  iconUrl: c.iconUrl,
                  symbol: c.symbol,
                },
                price: c.price,
                volume24: c['24hVolume'],
                marketCap: c.marketCap,
              }
            }) ?? []
          }
        />
      )}
    </Box>
  )
}
