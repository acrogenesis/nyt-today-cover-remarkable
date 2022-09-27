import { Hono } from 'hono'
import { validator } from 'hono/validator'

const app = new Hono()

app.get('/', (c) => c.text('Service to retrieve latest New York Times cover fitted for Remarkable https://github.com/acrogenesis/nyt-today'))
app.get('/nyt-today', async (c) => {
  // https://static01.nyt.com/images/$TODAY/nytfrontpage/scan.pdf
  // $TODAY is the date in YYYY/MM/DD format
  const today = new Date().toISOString().split('T')[0].split('-').join('/');
  const url = `https://static01.nyt.com/images/${today}/nytfrontpage/scan.pdf`
  const response = await fetch(url)

  return c.body(response.body)
})


export default app
