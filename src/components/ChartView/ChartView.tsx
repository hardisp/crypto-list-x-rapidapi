import useFetch from '@app/hooks/useFetch'
import currency from '@app/utils/currency'
import { Box, Flex, Heading } from '@chakra-ui/layout'
import { CircularProgress } from '@chakra-ui/progress'
import { Button } from '@chakra-ui/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useLoaderData } from 'react-router'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  responsive: true,
  borderWidth: 1,
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value: any) {
          return currency.formatter.format(value as number)
        },
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label = context.dataset.label || ''

          if (label) {
            label += ': '
          }
          if (context.parsed.y !== null) {
            label += currency.formatter.format(context.parsed.y as number)
          }
          return label
        },
      },
    },
  },
}

export default function ChartView({ name }: { name?: string | null }) {
  const { slug } = useLoaderData() as any
  const [timePeriod, setTimePeriod] = useState<string>('24h')
  const [state, setState] = useState<any[]>([])
  const [labels, setLabels] = useState<any[]>([])
  const { response, loading, error } = useFetch({
    method: 'get',
    path: `/coin/${slug}/history`,
    body: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod,
    },
    deps: timePeriod,
  })

  useEffect(() => {
    if (!error && !loading && response) {
      const result =
        timePeriod === '24h'
          ? response?.data?.history.reverse().slice(0, 100)
          : response?.data?.history.reverse()

      const prices = []
      const newLabels = []
      for (const j of result) {
        prices?.push(j.price)
        newLabels?.push(
          moment((j.timestamp as number) * 1000).format(
            timePeriod === '24h' ? 'hh:mm a' : 'MM/DD/YY',
          ),
        )
      }
      setState([...new Set(prices)])
      setLabels([...new Set(newLabels)])
    }
  }, [response, loading, error])

  if (loading) {
    return <CircularProgress isIndeterminate color='cyan.300' />
  }

  if (error) {
    return <Heading as={'h2'}>No Data Available!</Heading>
  }

  return (
    <Box>
      <Flex
        alignItems={'center'}
        sx={{
          '&>button': {
            color: 'gray.300',
            fontWeight: '700',
            '&.active': {
              color: 'gray.700',
            },
          },
        }}
      >
        <Button
          onClick={() => setTimePeriod('24h')}
          className={timePeriod === '24h' ? 'active' : ''}
        >
          24H
        </Button>
        <Box>|</Box>
        <Button
          onClick={() => setTimePeriod('7d')}
          className={timePeriod === '7d' ? 'active' : ''}
        >
          7D
        </Button>
        <Box>|</Box>
        <Button
          onClick={() => setTimePeriod('30d')}
          className={timePeriod === '30d' ? 'active' : ''}
        >
          30D
        </Button>
        <Box>|</Box>
        <Button
          onClick={() => setTimePeriod('3m')}
          className={timePeriod === '3m' ? 'active' : ''}
        >
          3M
        </Button>
      </Flex>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: `${name} to USD Chart`,
              data: state,
              borderColor: 'rgb(0 181 216)',
              backgroundColor: 'rgb(0 181 216)',
            },
          ],
        }}
        options={{
          ...options,
        }}
      />
    </Box>
  )
  // return <Line options={options} data={data} />
}
