export type PassportPlannerSource = {
  id: string;
  countryCode: string;
  jurisdiction: string;
  authority: string;
  title: string;
  url: string;
  appliesTo: string[];
  sourceType: "government" | "regional-authority" | "transport-standard";
  language: string;
  lastChecked: "2026-07-12";
  description: string;
};

export const SOURCE_REVIEW_DATE = "2026-07-12";

export const passportPlannerSources: PassportPlannerSource[] = [
  {
    id: "us-cdc-dog-imports", countryCode: "US", jurisdiction: "United States", authority: "Centers for Disease Control and Prevention", title: "CDC — Bringing a Dog into the United States", url: "https://www.cdc.gov/importation/dogs/index.html", appliesTo: ["origin", "destination", "return"], sourceType: "government", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official United States public-health starting point for dogs entering or returning to the country."
  },
  {
    id: "us-usda-aphis-pet-travel", countryCode: "US", jurisdiction: "United States", authority: "USDA Animal and Plant Health Inspection Service", title: "USDA APHIS — Pet Travel", url: "https://www.aphis.usda.gov/pet-travel", appliesTo: ["origin", "destination", "return"], sourceType: "government", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official United States pet-travel hub for import, export and accredited-veterinarian pathways."
  },
  {
    id: "eu-your-europe-pet-travel", countryCode: "EU", jurisdiction: "European Union", authority: "European Union", title: "Your Europe — Travelling with Pets", url: "https://europa.eu/youreurope/citizens/travel/carry/pets-and-other-animals/index_en.htm", appliesTo: ["origin", "destination", "return"], sourceType: "regional-authority", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official EU overview for non-commercial travel with pets within and into the European Union."
  },
  {
    id: "eu-non-eu-entry", countryCode: "EU", jurisdiction: "European Union", authority: "European Commission", title: "European Commission — Bringing a Pet into the EU from a Non-EU Country", url: "https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en", appliesTo: ["destination"], sourceType: "regional-authority", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official European Commission entry point for dogs, cats and ferrets arriving from outside the EU."
  },
  {
    id: "it-ministry-pet-travel", countryCode: "IT", jurisdiction: "Italy", authority: "Italian Ministry of Health", title: "Italian Ministry of Health — Travelling to Italy with Pets", url: "https://www.salute.gov.it/new/en/tema/animali-daffezione/travelling-italy-pets/", appliesTo: ["origin", "destination", "return"], sourceType: "government", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official Italian government pet-travel guidance."
  },
  {
    id: "gb-govuk-pet-entry", countryCode: "GB", jurisdiction: "Great Britain — England, Scotland and Wales", authority: "GOV.UK", title: "GOV.UK — Bringing a Pet to Great Britain", url: "https://www.gov.uk/bring-pet-to-great-britain", appliesTo: ["destination", "return"], sourceType: "government", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official guidance for bringing a dog, cat or ferret to Great Britain."
  },
  {
    id: "ni-daera-pet-travel", countryCode: "GB-NIR", jurisdiction: "Northern Ireland", authority: "Department of Agriculture, Environment and Rural Affairs", title: "DAERA — Travelling with Pets", url: "https://www.daera-ni.gov.uk/articles/travelling-pets", appliesTo: ["origin", "destination", "return"], sourceType: "government", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official Northern Ireland pet-travel guidance; routes differ from Great Britain guidance."
  },
  {
    id: "au-agriculture-cats-dogs", countryCode: "AU", jurisdiction: "Australia", authority: "Australian Department of Agriculture, Fisheries and Forestry", title: "Australian Government — Bringing Cats and Dogs to Australia", url: "https://www.agriculture.gov.au/biosecurity-trade/cats-dogs", appliesTo: ["origin", "destination", "return"], sourceType: "government", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official Australian biosecurity starting point for cat and dog movements."
  },
  {
    id: "za-government-animal-import", countryCode: "ZA", jurisdiction: "South Africa", authority: "South African Government", title: "South African Government — Import Animals and Animal Products", url: "https://www.gov.za/services/import/import-animals-and-animal-products", appliesTo: ["origin", "destination", "return"], sourceType: "government", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "Official South African government starting point for animal import information and authority contacts."
  },
  {
    id: "iata-pet-corner", countryCode: "AIR", jurisdiction: "International air transport", authority: "International Air Transport Association", title: "IATA — Traveller's Pet Corner", url: "https://www.iata.org/en/programs/cargo/live-animals/pets/", appliesTo: ["flight"], sourceType: "transport-standard", language: "English", lastChecked: SOURCE_REVIEW_DATE, description: "International air-transport planning information; operating-carrier rules must still be checked directly."
  }
];

