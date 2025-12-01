export interface PromoCode {
  code: string;
  description: string;
  slot: string;
  maxWin?: string;
  wager?: string;
}

export interface PromoData {
  id: string;
  casinoName: string;
  casinoLogo: string;
  playUrl: string;
  bannerGif: string;
  title: string;
  codes: PromoCode[];
}

export const promos: PromoData[] = [
  {
    id: "kingschance",
    casinoName: "King's Chance",
    casinoLogo: "/images/kingschance.webp",
    playUrl: "https://www.kingschanceclick.com/click/43/113/2136/1",
    bannerGif: new URL("../assets/popup-kingschance.gif", import.meta.url).href,
    title: "🎁 Bonus Exclusifs GigaBonus",
    codes: [
      {
        code: "GIGA25",
        description: "25 Free Spins",
        slot: "Great Golden Lion"
      },
      {
        code: "GIGA30",
        description: "30 Free Spins",
        slot: "Hot Pots Master"
      },
      {
        code: "GIGA35",
        description: "35 Free Spins",
        slot: "The Cash is Right"
      }
    ]
  },
  {
    id: "luckytreasure",
    casinoName: "Lucky Treasure",
    casinoLogo: "/images/luckytreasure.webp",
    playUrl: "https://www.luckytreasurelinks.com/click/85/337/2140/1",
    bannerGif: new URL("../assets/popup-luckytreasure.gif", import.meta.url).href,
    title: "🎁 Bonus Exclusifs GigaBonus",
    codes: [
      {
        code: "GIGA25",
        description: "25 Free Spins",
        slot: "Great Golden Lion"
      },
      {
        code: "GIGA30",
        description: "30 Free Spins",
        slot: "Hot Pots Master"
      },
      {
        code: "GIGA35",
        description: "35 Free Spins",
        slot: "The Cash is Right"
      }
    ]
  },
  {
    id: "spindinasty",
    casinoName: "Spin Dinasty",
    casinoLogo: "/images/spindinasty.webp",
    playUrl: "https://www.spindynastylinks.com/click/93/423/2140/1",
    bannerGif: new URL("../assets/popup-spindinasty.gif", import.meta.url).href,
    title: "🎁 Bonus Exclusifs GigaBonus",
    codes: [
      {
        code: "GIGA15",
        description: "15 Free Spins",
        slot: "Great Golden Lion"
      },
      {
        code: "GIGA20",
        description: "20 Free Spins",
        slot: "Hot Pots Master"
      },
      {
        code: "GIGA25",
        description: "25 Free Spins",
        slot: "The Cash is Right"
      }
    ]
  },
  {
    id: "hunnyplay",
    casinoName: "Hunnyplay",
    casinoLogo: new URL("../assets/hunnyplay-logo.webp", import.meta.url).href,
    playUrl: "https://hunnyplay.games/dgxnb9eok",
    bannerGif: new URL("../assets/popup-bonus.gif", import.meta.url).href,
    title: "🎁 Bonus Exclusif GigaBonus",
    codes: [
      {
        code: "FR150FS",
        description: "150 Free Spins Sans Dépôt Requis",
        slot: "Gates of Olympus 1000"
      }
    ]
  },
  {
    id: "spinaura",
    casinoName: "SpinAura",
    casinoLogo: "/images/spinaura.webp",
    playUrl: "https://famecpa.trk2afse.com/click?pid=1674&offer_id=933&sub1={clickid}&l=1761925532",
    bannerGif: new URL("../assets/popup-spinaura.gif", import.meta.url).href,
    title: "🎁 Bonus Exclusif GigaBonus",
    codes: [
      {
        code: "GIGA40",
        description: "40 Free Spins",
        slot: "Coin Strike 2: Hold and Win (0.10 EUR)",
        maxWin: "50 EUR",
        wager: "35x"
      }
    ]
  }
];
