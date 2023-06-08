import puppeteer from "puppeteer";

// Define the structure of the data you're scraping.
interface ScrapedData {
  title: string;
  artwork: string;
  boxart: string;
  rating: string;
  storyart: string;
  runtime: number | null;
  type: "show" | "movie";
  year: number | null;
  genre: string | null;

  seasons: number | null;
  episodeTitle: string;
  synopsis: string;
}

interface MovieFullInformation {
  advisories?: string[];
  artwork?: string;
  boxart?: string;
  rating?: string;
  runtime: number | null;
  seasons: SeasonInfo[];
  storyart?: string;
  synopsis?: string;
  title?: string;
  type?: string;
  year: number | null;
}

interface SeasonInfo {
  episodes: EpisodeInfo[];
  title?: string;
  year?: number | null;
}

interface EpisodeInfo {
  id: string;
  runtime: number;
  stills: string;
  synopsis: string;
  thumbs: string;
  title: string;
}

type ExtractedInfo = {
  year: number | null;
  duration: number | null;
  seasons: number | null;
  genre: string | null;
};

const scrapePage = async (url: string): Promise<MovieFullInformation> => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForNavigation({ waitUntil: "networkidle0" });

  // Wait for the selectors to be rendered
  //   await page.waitForSelector(".seriesTitle");
  //   await page.waitForSelector("h1.title");
  //   await page.waitForSelector(
  //     ".details__main__container__image-container__image"
  //   );
  //   await page.waitForSelector("h2.genreDescription");
  //   await page.waitForSelector(".tags .tags__rating");
  //   await page.waitForSelector("description");

  const result: MovieFullInformation = await page.evaluate((url) => {
    function extractInformation(text: string): ExtractedInfo {
      const parts = text.split("•").map((part) => part.trim());

      let year = null;
      let duration = null;
      let seasons = null;
      let genre = null;

      if (parts.length > 0) {
        year = parseInt(parts[0], 10);
      }

      if (parts.length > 1) {
        const durationParts = parts[1].match(/\d+/g);
        if (durationParts) {
          const hours = parseInt(durationParts[0], 10);
          const minutes = durationParts[1] ? parseInt(durationParts[1], 10) : 0;
          duration = (hours * 60 + minutes) * 60; // duration in seconds
        }
      }

      if (parts.length > 2) {
        seasons = parseInt(parts[2].split(" ")[0], 10);
      }

      if (parts.length > 3) {
        genre = parts[3];
      }

      return { year, duration, seasons, genre };
    }

    let type: "show" | "movie" = url.includes("webepisode") ? "show" : "movie";
    let seasonNumber = "";
    let id = url.split("/").pop();
    let seasonMatch = url.match(/s(\d+)/i);
    if (seasonMatch) {
      seasonNumber = seasonMatch[1] as string;
    }

    const imageElement = document.querySelector(
      "img.details__main__container__image-container__image"
    ) as HTMLImageElement;
    const genreDescriptionElement = document.querySelector(
      "h2.genreDescription"
    ) as HTMLDivElement;
    const showTitleElement = document.querySelector(
      ".seriesTitle"
    ) as HTMLDivElement;
    const episodeTitleElement = document.querySelector(
      "h1.title"
    ) as HTMLDivElement;
    const synopsisElement = document.querySelector(
      ".description"
    ) as HTMLDivElement;
    const ratingElement = document.querySelector(
      ".tags .tags__rating"
    ) as HTMLDivElement;

    const genreDescription = genreDescriptionElement
      ? genreDescriptionElement.innerText
      : "";
    const info = extractInformation(genreDescription);
    const showTitle = showTitleElement ? showTitleElement.innerText : "";
    const episodeTitle = episodeTitleElement
      ? episodeTitleElement.innerText
      : "";
    const boxart = imageElement ? imageElement.src : "";
    const synopsis = synopsisElement ? synopsisElement.innerText : "";
    const rating = ratingElement ? ratingElement.innerText : "";
    const mainRunTime = info.duration;

    let episodeInfo: EpisodeInfo = {
      id: id as string,
      runtime: mainRunTime ? mainRunTime : 0,
      stills: boxart,
      synopsis: synopsis,
      thumbs: boxart,
      title: episodeTitle,
    };

    let seasonInfo: SeasonInfo = {
      title: seasonNumber,
      year: info.year,
      episodes: [episodeInfo],
    };
    const finalResult: MovieFullInformation = {
      advisories: info ? (info.genre ? info.genre.split(" ") : []) : [],
      artwork: boxart,
      boxart,
      storyart: boxart,
      rating,
      runtime: type === "movie" ? mainRunTime : 0,
      type,
      synopsis: type === "movie" ? synopsis : "",
      title: showTitle,
      year: type === "movie" ? info.year : 0,
      seasons: type === "show" ? [seasonInfo] : [],
    };
    return finalResult;
  }, url);

  await browser.close();
  return result;
};

export default scrapePage;
