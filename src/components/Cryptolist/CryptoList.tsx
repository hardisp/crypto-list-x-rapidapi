import currency from '@app/utils/currency'
import { Text, Flex, Box, Image } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import AppLink from '../AppLink/AppLink'
import { DataTable } from '../DataTable/DataTable'

export default function CryptoList({
  data,
}: {
  data: Array<{
    rank?: number | null
    detail?: {
      name: string | null
      iconUrl?: string | null
      symbol?: string | null
      id?: string | null
    }
    price: string | null
    volume24: string | null

    marketCap?: string | null
  }>
}) {
  const columnHelper = createColumnHelper<any>()

  const columns = [
    columnHelper.accessor('rank', {
      cell: (info) => info.getValue(),
      header: '#',
    }),
    columnHelper.accessor('detail', {
      cell: (info) => {
        const item = info.getValue()
        return (
          <AppLink
            as={Flex}
            color={'inherit'}
            to={`/crypto/${item.id}`}
            align={'center'}
            _hover={{
              '.label-coin-symbol': {
                textDecor: 'none',
              },
              '.label-coin-name': {
                textDecor: 'underline',
              },
            }}
          >
            <Box pr={'1'}>
              <Image src={item?.iconUrl ?? ''} w={'24px'} />
            </Box>
            <Flex align={'center'}>
              <Box color={'gray.600'} pr={'0.5'} className={'label-coin-name'}>
                {item.name}{' '}
              </Box>
              <Box
                bgColor={'gray.100'}
                fontSize={'55%'}
                lineHeight={'1em'}
                p={1}
                borderRadius={'sm'}
                className={'label-coin-symbol'}
              >
                {item.symbol}
              </Box>
            </Flex>
          </AppLink>
        )
      },
      header: 'Name',
    }),
    columnHelper.accessor('price', {
      cell: (info) => (
        <Text as='strong'>
          {currency.formatter.format(parseFloat(info.getValue() ?? '0'))}
        </Text>
      ),
      header: 'Price',
    }),
    columnHelper.accessor('marketCap', {
      cell: (info) =>
        currency.formatter.format(parseFloat(info.getValue() ?? '0')),
      header: 'Market Cap',
    }),
    columnHelper.accessor('volume24', {
      cell: (info) =>
        currency.formatter.format(parseFloat(info.getValue() ?? '0')),
      header: 'Volume(24h)',
    }),
  ]
  return <DataTable columns={columns} data={data} />
}
