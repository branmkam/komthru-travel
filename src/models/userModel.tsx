export const test1 = {
  displayName: "Mr. Test",
  homeCity: "1840014557",
  homeCountry: "USA",
  profilePic: "api.dicebear.com/7.x/pixel-art/svg",
  trips: [
    {
      cityFrom: "1840014557", //Charlotte
      start: "2024-03-12",
      end: "2024-03-18",
      name: "Spain 2024",
      legs: [
        {
          cityId: "1724594040", //Barcelona
          legStart: "2024-03-12",
          legEnd: "2024-03-15",
          media: [], // eventually get picture links in with upload. max 10
          body: "<p>Loved Barcelona! There is so much to do and see. Would 100% recommend the Sagrada Familia.</p> <p>Croquetas are the best food from Catalonia, and we really enjoyed the bacon ones.",
        },
        {
          cityId: "1724616994", //Madrid
          legStart: "2024-03-15",
          legEnd: "2024-03-18",
          media: [], // eventually get picture links in with upload. max 10
          body: "<p>Madrid was a bit underwhelming. I wish I could've seen more, but the city is too big for its own good. One highlight however, was the Prado art museum - absolutely eclectic.</p>.",
        },
      ],
    },
  ],
};

export const userDB = {
  user1: test1,
};


