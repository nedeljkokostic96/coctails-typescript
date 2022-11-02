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

export const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
