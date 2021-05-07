import express from 'express';

//creates a new router object
const routes = express.Router();

function getRandomWord(words: string[]): string {
  const i = Math.floor(words.length * Math.random());
  return words[i];
}
const nouns = ["polar ice cap", "banana", "Mt. Rushmore", "cliff", "hang glider"];
const adjectives = ["sleepy", "polite", "yellow-livered", "patriotic", "underwhelmed"];



export default routes;