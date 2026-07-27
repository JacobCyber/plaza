export interface Project {
  name: string;
  slug: string;
  region: "israel" | "canada";
  hasImage: boolean;
}

export const projects: Project[] = [
  { name: "מלח הארץ", slug: "melach-haaretz", region: "israel", hasImage: true },
  { name: "מקור חיים 60", slug: "makor-chaim-60", region: "israel", hasImage: false },
  { name: "מגדל מרום", slug: "migdal-malom", region: "israel", hasImage: true },
  { name: "מראות קדם", slug: "marot-kedem", region: "israel", hasImage: false },
  { name: "נווה דניאל", slug: "neve-daniel", region: "israel", hasImage: false },
  { name: "בית חורון", slug: "beit-horon", region: "israel", hasImage: false },
  { name: "בית שמש", slug: "beit-shemesh", region: "israel", hasImage: false },
  { name: "חתם סופר 6", slug: "chetam-sofer-6", region: "israel", hasImage: false },
  { name: "חתם סופר 4", slug: "chetam-sofer-4", region: "israel", hasImage: false },
  { name: "כהנוב 34–36", slug: "kahanov-34-36", region: "israel", hasImage: false },
  { name: "King East Estates", slug: "king-east-estates", region: "canada", hasImage: false },
  { name: "Bijou on Bloor", slug: "bijou-on-bloor", region: "canada", hasImage: false },
  { name: "Premiere Collection at Theatre District", slug: "premiere-theatre-district", region: "canada", hasImage: false },
  { name: "400 King West", slug: "400-king-west", region: "canada", hasImage: false },
  { name: "Plaza on Yonge", slug: "plaza-on-yonge", region: "canada", hasImage: false },
  { name: "Yonge at Wellesley Station", slug: "yonge-wellesley", region: "canada", hasImage: false },
  { name: "RichCrest", slug: "richcrest", region: "canada", hasImage: false },
  { name: "King City", slug: "king-city", region: "canada", hasImage: false },
  { name: "Markham Gold", slug: "markham-gold", region: "canada", hasImage: false },
  { name: "Vaughan", slug: "vaughan", region: "canada", hasImage: false },
];

export function getProjectsByRegion(region: "israel" | "canada"): Project[] {
  return projects.filter((p) => p.region === region);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.hasImage);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug) + 1;
}

export function padNumber(n: number): string {
  return String(n).padStart(2, "0");
}
