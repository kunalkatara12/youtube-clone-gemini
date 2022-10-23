import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    // console.log(videoId, snippet)
    <Card>
      <Link>
      <CardMedia image={snippet?.thumbnails?.high?.url}/>
      </Link>
    </Card>
  )
}

export default VideoCard