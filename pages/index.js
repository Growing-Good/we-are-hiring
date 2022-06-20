import {
  Container,
  Grid,
  Stack,
  Typography,
  Link as MUILink,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container justifyContent='center' alignItems='center' spacing={6}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Image src={'/logo.svg'} width={309} height={51} />
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Stack spacing={3}>
            <Typography variant='h2' color='#fff'>
              Hello potential future colleague!
            </Typography>
            <Typography variant='body1' color='#fff'>
              Thank you for taking the time to work through our interview task.
              If you have any questions or concerns please create an issue on the repo or get in touch via {' '}
              <Link passHref href='mailto:tech@growing-good.co.uk'>
                <MUILink>tech@growing-good.co.uk</MUILink>
              </Link>
              .
            </Typography>
            <Typography variant='body1' color='#fff'>
              Instructions on what to build can be found on the repo. Good luck!
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
