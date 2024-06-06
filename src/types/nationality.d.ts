interface NationalizeResponse {
  count: number;
  name: string;
  country: Country[];
}

interface Country {
  country_id: string;
  probability: number;
}
