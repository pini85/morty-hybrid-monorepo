import { Request, Response } from "express";
import axios from "axios";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api";
/**
 * Retrieves all characters from the Rick and Morty API.
 */
export const getCharacters = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${RICK_AND_MORTY_API_URL}/character`);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data from Rick and Morty API" });
  }
};
/**
 * Retrieves characters filtered by name from the Rick and Morty API.
 * Validates the 'name' query parameter.
 * If the API responds with a 404 status (not found), returns an empty array to the client.
 */
export const getFilterCharacter = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    //Poors man validation. would user Joi or Zod for validation
    if (typeof name !== "string") {
      return res.status(400).json({ message: "Invalid query parameters" });
    }

    const response = await axios.get(`${RICK_AND_MORTY_API_URL}/character`, {
      params: { name },
    });

    res.json(response.data);
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 404
    ) {
      return res.json({ results: [] });
    }
    res.status(500).json({ message: "Error fetching characters", error });
  }
};
