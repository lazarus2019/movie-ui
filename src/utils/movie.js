import isoLangs from "./isoLangs";

export const getYearRelease = (yearStr) => {
  return /.*(\d{4})/.exec(yearStr)[1] || "N/A";
};

export const getCountryName = (shortLang) => {
  return isoLangs[shortLang]?.name || "N/A";
};
