import express from 'express';
import OpenAI from 'openai';
import 'dotenv/config';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5001;
const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const client = new OpenAI({
  baseURL: 'https://api.zukijourney.com/v1',
  apiKey: process.env.ZUKI_API_KEY,
});

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is running');
});

//Send requests to openai api
app.post('/api/generate', async (req, res) => {
  const { messages } = req.body;

  try {
    //Interact with the AI
    //Something here throwing error
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages
    });
    res.json(response.choices[0].message.content);

  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
});

//Gets access token for use in search API call
//May be an issue with token refresh
const getSpotifyToken = async (req, res) => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return response.data.access_token;
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to refresh Spotify token" });
  }
};

//Gets passed the albumName from the frontend
//Retrieves the album data
app.post('/api/spotify/data', async (req, res) => {
  const params = new URLSearchParams();
  let albumName = req.query.name;
  params.append("q", albumName);
  params.append("type", "album");

  const accessToken = await getSpotifyToken();

  try {
    //Error here
    const response = await axios.post('https://api.spotify.com/v1/search?', params, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    })
    res.json(response.data);

  } catch (err) {
    res.json(err);
    console.log(err.message);
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));