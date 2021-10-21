import axios from 'axios'

const KEY = 'AIzaSyAy-nNvonAh4b7fk8KbHy9iThpZ4REW0HI'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        Key:KEY,
        type:'video'
    }
})