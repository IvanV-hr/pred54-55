export const API_BASE_URL = "https://dummyjson.com";

export async function apiRequest(putanja, opcije) {
  const odgovor = await fetch(`${API_BASE_URL}/${putanja}`, opcije);
  if (!odgovor.ok) throw new Error();
  return odgovor.json();
}
