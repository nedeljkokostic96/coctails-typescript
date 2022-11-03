import { Cocktail } from "../components/model/ICocktail";

export function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export function getQueryParamByMenuItem(
  item: string,
  param: string,
  searchType: string
) {
  let res = searchType + ".php?";
  switch (item) {
    case "category":
      res += "c=";
      break;
    case "alcohol":
      res += "a=";
      break;
    case "ingridients":
      res += "i=";
      break;
    default:
      res += "g=";
      break;
  }
  return res + param;
}

function mapIndex(type: string) {
  switch (type) {
    case "category":
      return "strCategory";
    case "alcohol":
      return "strAlcoholic";
    case "ingridients":
      return "strIngredient1";
    default:
      return "strGlass";
  }
}

export function transformData(data: Array<any>, dataType: string) {
  const index = mapIndex(dataType);
  return data.map((item) => {
    return { title: item[index] };
  });
}

export function createSlug(value: string) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export function getIngridientsArray(cocktail: Cocktail) {
  const result = [];
  for (let i = 1; i < 16; i++) {
    const keyIng = ("strIngredient" + i) as keyof typeof cocktail;
    const keyMeasure = ("strMeasure" + i) as keyof typeof cocktail;
    if (cocktail[keyIng] !== null) {
      result.push({
        ingridient: cocktail[keyIng],
        measure: cocktail[keyMeasure],
      });
    }
  }

  return result;
}

export const LOREM_IPSUM_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

export const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
