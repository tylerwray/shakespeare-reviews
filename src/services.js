import axios from 'axios'

const TOKEN = 'koOheljmQX'

export async function getAllReviews() {
  const endpoint = 'https://shakespeare.podium.co/api/reviews'
  const config = {
    headers: {
      Authorization: TOKEN
    }
  }

  const { data } = await axios.get(endpoint, config)

  return data.data.map(x => ({
    ...x,
    publish_date_formatted: formatDate(x.publish_date),
    body: null
  }))
}

export async function getSingleReview(id) {
  const endpoint = `http://shakespeare.podium.co/api/reviews/${id}`
  const config = {
    headers: {
      Authorization: TOKEN
    }
  }

  const review = await axios.get(endpoint, config).then(x => x.data.data)

  return {
    ...review,
    publish_date_formatted: formatDate(review.publish_date)
  }
}

function formatDate(dateString) {
  return new Date(dateString).toDateString()
}
