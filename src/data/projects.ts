import type { ImageMetadata } from "astro";

import melachHaaretzImg from "@/assets/projects/melach-haaretz.webp";
import migdalMalomImg from "@/assets/projects/migdal-malom.jpg";
import kingEastImg from "@/assets/projects/king-east-estates.png";
import bijouImg from "@/assets/projects/bijou-on-bloor.jpg";
import premiereImg from "@/assets/projects/premiere-theatre-district.jpg";
import kingWestImg from "@/assets/projects/400-king-west.jpg";
import yongeImg from "@/assets/projects/plaza-on-yonge.jpg";
import wellesleyImg from "@/assets/projects/yonge-wellesley.jpg";

export interface Project {
  name: string;
  slug: string;
  region: "israel" | "canada";
  image?: ImageMetadata;
}

export const projects: Project[] = [
  { name: "מלח הארץ", slug: "melach-haaretz", region: "israel", image: melachHaaretzImg },
  { name: "מקור חיים 60", slug: "makor-chaim-60", region: "israel" },
  { name: "מגדל מרום", slug: "migdal-malom", region: "israel", image: migdalMalomImg },
  { name: "מראות קדם", slug: "marot-kedem", region: "israel" },
  { name: "נווה דניאל", slug: "neve-daniel", region: "israel" },
  { name: "בית חורון", slug: "beit-horon", region: "israel" },
  { name: "בית שמש", slug: "beit-shemesh", region: "israel" },
  { name: "חתם סופר 6", slug: "chetam-sofer-6", region: "israel" },
  { name: "חתם סופר 4", slug: "chetam-sofer-4", region: "israel" },
  { name: "כהנוב 34–36", slug: "kahanov-34-36", region: "israel" },
  { name: "King East Estates", slug: "king-east-estates", region: "canada", image: kingEastImg },
  { name: "Bijou on Bloor", slug: "bijou-on-bloor", region: "canada", image: bijouImg },
  { name: "Premiere Collection at Theatre District", slug: "premiere-theatre-district", region: "canada", image: premiereImg },
  { name: "400 King West", slug: "400-king-west", region: "canada", image: kingWestImg },
  { name: "Plaza on Yonge", slug: "plaza-on-yonge", region: "canada", image: yongeImg },
  { name: "Yonge at Wellesley Station", slug: "yonge-wellesley", region: "canada", image: wellesleyImg },
  { name: "RichCrest", slug: "richcrest", region: "canada" },
  { name: "King City", slug: "king-city", region: "canada" },
  { name: "Markham Gold", slug: "markham-gold", region: "canada" },
  { name: "Vaughan", slug: "vaughan", region: "canada" },
];

export function getProjectsByRegion(region: "israel" | "canada"): Project[] {
  return projects.filter((p) => p.region === region);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.image);
}
