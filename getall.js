const axios = require('axios')

const all = axios.get('http://shakespeare.podium.co/api/reviews', {
  headers: {
    Authorization: 'koOheljmQX'
  }
})

all.then(res => {
  const data = res.data.data

  data.map(review => {
    const depth = axios.get(
      `http://shakespeare.podium.co/api/reviews/${review.id}`,
      {
        headers: {
          Authorization: 'koOheljmQX'
        }
      }
    )

    return depth.then(res => console.log(res.data.data))
  })
})
