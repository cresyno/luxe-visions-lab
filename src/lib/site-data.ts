import luxuryLivingOffice from "@/assets/projects/luxury-living-office.jpg.asset.json";
import modernLivingRoom from "@/assets/projects/modern-living-room.jpg.asset.json";
import executiveOfficeLibrary from "@/assets/projects/executive-office-library.jpg.asset.json";
import minimalLivingRoom from "@/assets/projects/minimal-living-room.jpg.asset.json";
import grandLivingRoom from "@/assets/projects/grand-living-room.jpg.asset.json";
import officeMediaWall from "@/assets/projects/office-media-wall.jpg.asset.json";
import cozySittingRoom from "@/assets/projects/cozy-sitting-room.jpg.asset.json";
import executiveMarbleOffice from "@/assets/projects/executive-marble-office.jpg.asset.json";
import corporateBuilding from "@/assets/projects/corporate-building.jpg.asset.json";

export const images = {
  luxuryLivingOffice: "/Screenshot_20260701-034432.jpg",
  modernLivingRoom: "/Screenshot_20260701-034441.jpg",
  executiveOfficeLibrary: "/Screenshot_20260701-034448.jpg",
  minimalLivingRoom: "/Screenshot_20260701-034454.jpg",
  grandLivingRoom: "/Screenshot_20260701-034452.jpg",
  officeMediaWall: "/Screenshot_20260701-034432.jpg",
  cozySittingRoom: "/Screenshot_20260701-034432.jpg",
  executiveMarbleOffice: "/Screenshot_20260701-034432.jpg",
  corporateBuilding: "/Screenshot_20260701-034432.jpg",
  
};

export type ProjectCategory =
  | "Residential Projects"
  | "Commercial Projects"
  | "Renovations"
  | "Interior Transformations";

export interface Project {
  title: string;
  category: ProjectCategory;
  image: string;
}

export const projects: Project[] = [
  { title: "Grand Marble Living Room", category: "Residential Projects", image: images.grandLivingRoom },
  { title: "Executive Living & Study Suite", category: "Residential Projects", image: images.luxuryLivingOffice },
  { title: "Contemporary Family Lounge", category: "Residential Projects", image: images.modernLivingRoom },
  { title: "Executive Corporate Office", category: "Commercial Projects", image: images.executiveMarbleOffice },
  { title: "Corporate Headquarters Facade", category: "Commercial Projects", image: images.corporateBuilding },
  { title: "Directors' Media & Meeting Office", category: "Commercial Projects", image: images.officeMediaWall },
  { title: "Refined Living Room Refresh", category: "Renovations", image: images.minimalLivingRoom },
  { title: "Executive Office Library Fit-out", category: "Renovations", image: images.executiveOfficeLibrary },
  { title: "Cozy Sitting Room Transformation", category: "Interior Transformations", image: images.cozySittingRoom },
  { title: "Minimal Lounge Interior", category: "Interior Transformations", image: images.minimalLivingRoom },
];

export const categories: ProjectCategory[] = [
  "Residential Projects",
  "Commercial Projects",
  "Renovations",
  "Interior Transformations",
];

export const CONTACT = {
  name: "First Bholad Ltd",
  address: "Citec Estate, 28 B11 Street, Jabi, Abuja",
  phone: "0705 294 0294",
  phoneRaw: "+2347052940294",
  whatsapp: "2347052940294",
  instagram: "https://www.instagram.com/firstbholad",
  facebook: "https://www.facebook.com/firstbholad",
  tiktok: "https://www.tiktok.com/@firstbholad",
};
