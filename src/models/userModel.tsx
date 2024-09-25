//trips db, linked to users and cities by appropriate fields.
export const trips = [
  {
    cityFrom: "1840014557", //Charlotte
    start: "2024-03-12",
    end: "2024-03-18",
    name: "Spain 2024",
    user: "Brandino", //unique text id
    tripId: 123456,
    visibility: "private",
    legs: [
      {
        cityId: "1724594040", //Barcelona
        legStart: "2024-03-12",
        legEnd: "2024-03-15",
        media: [], // eventually get picture links in with upload. max 10
        body: "<p className='m-0'>Loved Barcelona! There is so much to do and see. Would 100% recommend the Sagrada Familia.</p> <p>Croquetas are the best food from Catalonia, and we really enjoyed the bacon ones.</p>",
      },
      {
        cityId: "1724616994", //Madrid
        legStart: "2024-03-15",
        body: "<p className='m-0'>Madrid was a bit underwhelming. I wish I could've seen more, but the city is too big for its own good. One highlight however, was the Prado art museum - absolutely eclectic.</p>",
      },
      {
        cityId: "1724616994", //Madrid
        legStart: "2024-03-15",
        legEnd: "2024-03-18",
        media: [], // eventually get picture links in with upload. max 10
        body: "<p className='m-0'>Madrid was a bit underwhelming. I wish I could've seen more, but the city is too big for its own good. One highlight however, was the Prado art museum - absolutely eclectic.</p>",
      },
    ],
  },
  {
    cityFrom: "1840007034", //Aurora, IL
    start: "2024-07-21",
    end: "2024-07-29",
    name: "The trip of all time",
    user: "YaktheGoat", //unique text id
    visibility: "public",
    tripId: 287342,
    legs: [
      {
        cityId: "1616024847", //Warsaw
        legStart: "2024-07-21",
        legEnd: "2024-07-23",
        media: [], // eventually get picture links in with upload. max 10
        body: "<p>Bajo jajo, bajo jajo! Warsaw's calling.</p>",
      },
      {
        cityId: "1208763942", //Copenhagen
        legStart: "2024-07-24",
        legEnd: "2024-07-26",
        media: [], // eventually get picture links in with upload. max 10
        body: "<p>Copenhagen was <i>dope</i>. Highlights for me were definitely Tivoli gardens and walking down the Norregade.</p>",
      },
      {
        cityId: "1352327190", //Reykjavik
        legStart: "2024-07-27",
        legEnd: "2024-07-29",
        media: [], // eventually get picture links in with upload. max 10
        body: "<p>Was beautiful in the summer, especially the nearby hot springs. 10/10.</p>",
      },
    ],
  },
];

export const users = {
  Brandino: {
    friends: ["Brandino"],
    homeCity: "1840014557",
    homeCountry: "USA",
    profilePic: "https://api.dicebear.com/7.x/pixel-art/svg",
  },
  YaktheGoat: {
    friends: ["YaktheGoat"],
    homeCity: "1840007034",
    homeCountry: "USA",
    profilePic: "https://api.dicebear.com/7.x/pixel-art/svg?seed=John",
  },
};
