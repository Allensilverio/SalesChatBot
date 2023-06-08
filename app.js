//IMPORT PACKAGES

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

// OPENAI AUTHENTICATION

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION_ID,
    apiKey: process.env.OPENAI_API_KEY,
});


// EXPRESS ROUTES

app.get('/', (req, res) => {
  res.send('Hello World!');
});




// API REQUESTS

const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "What is the best tech stack for AI",
  max_tokens: 100,
  temperature: 0,
});

console.log(response.data);


// APP PORT BINDING

app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
  });

  