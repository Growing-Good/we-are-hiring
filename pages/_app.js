import { Box } from '@mui/material'

function MyApp({ Component, pageProps }) {
  return (
    <Box sx={{minHeight: '100vh' , background: 'linear-gradient(180deg, #152852 0%, #FD6C53 100%)'}}>
      <Component {...pageProps} />
    </Box>
  )
}

export default MyApp
