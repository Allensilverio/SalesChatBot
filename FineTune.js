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


// FINE TUNING
const openai = new OpenAIApi(configuration);
const response = await openai.createFineTune({
  training_file: "file-XGinujblHPwGLSztz8cPS8XY",
  model:'davinci',
});
