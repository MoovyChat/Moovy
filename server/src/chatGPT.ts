import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";

interface CreateCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    text: string;
    index: number;
    logprobs: null | any;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

const OPENAI_URL = "https://api.openai.com/v1/completions";

// Trivia Handler
async function getTrivia(req: Request, res: Response) {
  console.log({ req: req.body, api: process.env.OPENAI_API_KEY });
  const movie = req.body.movie;

  if (!movie) {
    return res.status(400).json({ error: "A movie name must be provided." });
  }

  const prompt = `Trivia about the movie ${movie}`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  try {
    const response: AxiosResponse<CreateCompletionResponse> = await axios.post(
      OPENAI_URL,
      {
        model: "text-davinci-003",
        prompt,
        max_tokens: 150,
        temperature: 0,
      },
      { headers }
    );

    if (
      response &&
      response.data &&
      response.data.choices &&
      response.data.choices.length > 0
    ) {
      return res.json({ trivia: response.data.choices[0].text.trim() });
    } else {
      throw new Error(
        "Response or response data is undefined or choices are empty"
      );
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error." });
  }
}

// Character-based Chat Handler
async function chatGPTHandler(req: Request, res: Response) {
  const message = req.body.message;
  const character = req.body.character;

  if (!message || !character) {
    return res
      .status(400)
      .json({ error: "A message and character must be provided." });
  }

  const prompt = `${character} says: "${message}"`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  try {
    const response: AxiosResponse<CreateCompletionResponse> = await axios.post(
      OPENAI_URL,
      {
        model: "text-davinci-003",
        prompt,
        max_tokens: 150,
      },
      { headers }
    );

    if (
      response &&
      response.data &&
      response.data.choices &&
      response.data.choices.length > 0
    ) {
      return res.json({ message: response.data.choices[0].text.trim() });
    } else {
      throw new Error(
        "Response or response data is undefined or choices are empty"
      );
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error." });
  }
}

// Recommendation Handler
async function getRecommendation(req: Request, res: Response) {
  const movies = req.body.movies;

  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return res
      .status(400)
      .json({ error: "An array of movie names must be provided." });
  }

  const prompt = `Recommend a list of movies or shows based on the following movies: ${movies.join(
    ", "
  )}.`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  try {
    const response: AxiosResponse<CreateCompletionResponse> = await axios.post(
      OPENAI_URL,
      {
        model: "text-davinci-003",
        prompt,
        max_tokens: 150,
      },
      { headers }
    );

    if (
      response &&
      response.data &&
      response.data.choices &&
      response.data.choices.length > 0
    ) {
      return res.json({ recommendation: response.data.choices[0].text.trim() });
    } else {
      throw new Error(
        "Response or response data is undefined or choices are empty"
      );
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error." });
  }
}

export { getTrivia, chatGPTHandler, getRecommendation };
