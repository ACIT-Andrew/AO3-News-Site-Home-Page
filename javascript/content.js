const images = {
  latest: {
    url: "images/story-images/flat-earth.jpg",
    alt: "flat earth in space",
  },
  top: {
    url: "images/story-images/google-insta.jpg",
    alt: "google logo and instagram logo",
  },
  insider: {
    url: "images/story-images/compost.jpg",
    alt: "compost and hands holding soil",
  },
};
const articlesLatest = [
  {
    title: "Confirmed: Earth is flat",
    author: "Willy",
    text: "After years of scientific research, the Earth is again, flat.",
  },
  {
    title: "AI is dying, here's why",
    author: "Yilong Ma",
    text: "Elon Musk says it's not even that good.",
  },
  {
    title: "Covid-19 was a 'flu-ke'",
    author: "Yilong Ma",
    text: "The global impact and severity of this pandemic caught the world off guard, highlighting the need for better preparedness and response strategies.",
  },
];
const articlesTop = [
  {
    title: "Google seeking to acquire Instagram",
    author: "Mark Zuckerberg",
    text: "This potential acquisition could reshape the social media landscape and provide Google with a stronger foothold in the visual content sharing market",
  },
  {
    title: "Meta sells Instagram",
    author: "Mark Zuckerberg",
    text: "This surprising move marks a significant shift in the social media landscape, leaving users and industry experts speculating on the future direction of both companies.",
  },
  {
    title: "Meta seeking to acquire Google",
    author: "Mark Zuckerberg",
    text: "If successful, this ambitious move could redefine the tech industry landscape and consolidate Meta's position as a dominant player in the digital realm.",
  },
];
const articlesInsider = [
  {
    title: "Composting is actually bad for the environment",
    author: "Greta Thunberg",
    text: "Contrary to popular belief, improper composting practices can generate harmful greenhouse gases and contribute to environmental degradation.",
  },
  {
    title: "TikTok is confusing by design",
    author: "Sara Morrison",
    text: "Its addictive and fast-paced content consumption, coupled with an algorithm-driven interface, keeps users engaged but also raises concerns about privacy and data usage.",
  },
  {
    title: "1 + 1 = 2",
    author: "Neel Degrass Tysun",
    text: "This fundamental mathematical equation represents the basic principle of addition, where combining two units results in a total of two.",
  },
];

// Latest Stories
const latestColumn = $("#latest");
articlesLatest.forEach(function (article, index) {
  let newArticle = `
    <section class="news-column-item">
    <article class="news-content">
      <h3><a href="#">${article.title}</a></h3>
      <p>By ${article.author}</p>
      <p>${article.text}</p>
    </article>
    </section>
    `;

  let image = `<img src="${images.latest.url}" alt="${images.latest.alt}">`;

  latestColumn.append(newArticle);

  $("")
});

// Top Stories
const topStoriesColumn = $("#top-stories");
articlesTop.forEach(function (article, index) {
  let newArticle = `
  <section class="news-column-item">
  <article class="news-content">
  <h3><a href="#">${article.title}</a></h3>
  <p>By ${article.author}</p>
  <p>${article.text}</p>
  </article>
  </section>
  `;

  let image = `<img src="${images.top.url}" alt="${images.top.alt}">`;

  topStoriesColumn.append(newArticle);
});

// Insider Stories
const insiderColumn = $("#insider");
articlesInsider.forEach(function (article, index) {
  let newArticle = `
  <section class="news-column-item">
  <article class="news-content">
  <h3><a href="#">${article.title}</a></h3>
  <p>By ${article.author}</p>
  <p>${article.text}</p>
  </article>
  </section>
  `;

  let image = `<img src="${images.insider.url}" alt="${images.insider.alt}">`;

  insiderColumn.append(newArticle);
});
