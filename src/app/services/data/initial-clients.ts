import { IClient } from "../../models/client";

export const initialClients: IClient[] = [
  { id: 1, name: "Tesco", description: "Tesco PLC is a British multinational groceries and general merchandise retailer headquartered in Welwyn Garden City, England. It is the third-largest retailer in the world measured by gross revenues and the ninth-largest in the world measured by revenues.", relatedClients: [{ id: 2, name: "Tesco Bank" }] },
  { id: 2, name: "Tesco Bank", description: "Tesco Bank is a British retail bank which was formed in July 1997, and which has been wholly owned by Tesco plc since 2008. The bank was formed as part of a 50:50 joint venture between The Royal Bank of Scotland and Tesco, the largest supermarket in the United Kingdom.", relatedClients: [{ id: 1, name: "Tesco" }] },
  { id: 3, name: "Real Madrid", description: "Real Madrid Club de Fútbol, commonly known as Real Madrid, or simply as Real, is a professional football club based in Madrid, Spain.", relatedClients: [{ id: 4, name: "Emirates" }, { id: 5, name: "Adidas" }] },
  { id: 4, name: "Adidas", description: "Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Bavaria, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike.", relatedClients: [{ id: 3, name: "Real Madrid" }] },
  { id: 5, name: "Emirates", description: "Emirates is the largest airline and one of two flag carriers of the United Arab Emirates. Based in Garhoud, Dubai, the airline is a subsidiary of The Emirates Group, which is owned by the government of Dubai's Investment Corporation of Dubai.", relatedClients: [{ id: 3, name: "Real Madrid" }] }
];
