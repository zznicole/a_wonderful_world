import { Article, Category } from "@/types/types";

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4";

//use mock when api request is exceeding the limit
const mockArticles: Article[] = [
  {
    id: "1",
    title: "Croc-Filled Classrooms: VR Gateway to Islander Culture",
    description:
      "Great National Science Week Indigenous stories up for grabs now around AustraliaMultimedia project captures 65,000+ years of Indigenous Knowledge",
    source: {
      id: "0368281c39ba31f7435685e8b620f675",
      name: "Mirage News",
      url: "https://www.miragenews.com",
    },
    category: "general",
    url: "https://www.miragenews.com/croc-filled-classrooms-vr-gateway-to-islander-1505794/",
    image:
      "https://cdn1.miragenews.com/wp-content/uploads/2017/11/news-developments.jpg",
    publishedAt: "2025-07-30T02:21:00Z",
    content:
      "Great National Science Week Indigenous stories up for grabs now around Australia\n" +
      "Multimedia project captures 65,000+ years of Indigenous Knowledge through voices of elders, scientists and environmentalists – online\n" +
      "Remote school students use baited u... [1827 chars]",
  },
  {
    id: "2",
    title:
      "Young quantum poets; space cadets; kids’ conference Antarctica; classrooms in croc-filled billabongs; owl vomit",
    description:
      "Great National Science Week education stories up for grabs now around Australia Enter the ‘Ittyverse’: Aussie kids’ poems on ‘small, tiny, nano things’ during Quantum Year – online Remote school students use baited underwater cameras to explore croc-filled billabongs – Ramingining, NT Australian Space Agency funds primary school ‘Mission: SPACE’ program – online Preschoolers dissect owl vomit",
    source: {
      id: "a51b4decdc2c55421da2fdd714fcd262",
      name: "medianet.com.au",
      url: "https://newshub.medianet.com.au",
    },
    category: "general",
    url: "https://newshub.medianet.com.au/2025/07/young-quantum-poets-space-cadets-kids-conference-antarctica-classrooms-in-croc-filled-billabongs-owl-vomit/111435/",
    image:
      "https://newshub-website-data.s3.ap-southeast-2.amazonaws.com/2025/07/30121824/Science-Week-2025-Logos_PNG_SW_Inline_logo_rev_2025-6-860x89.png",
    publishedAt: "2025-07-30T02:19:51Z",
    content:
      "Great National Science Week education stories up for grabs now around Australia\n" +
      "Enter the ‘Ittyverse’: Aussie kids’ poems on ‘small, tiny, nano things’ during Quantum Year – online\n" +
      "Remote school students use baited underwater cameras to explore croc-... [21567 chars]",
  },
  {
    id: "3",
    title: "Why Kingsley takes some responsibility for Giants captain's ban",
    description:
      "Adam Kingsley says he was partly to blame for Giants captain Toby Greene's untimely suspension",
    source: {
      id: "0a46a0522ac739f3ecebe94711f4dabe",
      name: "afl.com.au",
      url: "https://www.afl.com.au",
    },
    category: "general",
    url: "https://www.afl.com.au/news/1376855/why-adam-kingsley-takes-some-responsibility-for-greater-western-sydney-giants-captain-toby-greenes-ban",
    image:
      "https://resources.afl.com.au/afl/photo/2025/07/25/9e3dab1d-d4b3-470b-9e64-d0cd0bfcd215/oD0zRIgf.jpg",
    publishedAt: "2025-07-30T02:05:39Z",
    content:
      "Adam Kingsley says he was partly to blame for Giants captain Toby Greene's untimely suspension\n" +
      "Dane Rampe and Toby Greene wrestle during Sydney's clash against Greater Western Sydney in round 20, 2025. Picture: AFL Photos\n" +
      "GREATER Western Sydney coach... [3755 chars]",
  },
  {
    id: "4",
    title:
      "Should I limit how much fruit my child eats because it contains sugar?",
    description: "Can kids eat too much fruit? Here’s what the evidence says.",
    source: {
      id: "344b3e5c4a3152c0cbebe5418ae064b7",
      name: "The Conversation",
      url: "https://theconversation.com",
    },
    category: "general",
    url: "https://theconversation.com/should-i-limit-how-much-fruit-my-child-eats-because-it-contains-sugar-257622",
    image:
      "https://images.theconversation.com/files/681403/original/file-20250722-56-r2jxkq.jpg?ixlib=rb-4.1.0&rect=0%2C427%2C5121%2C2560&q=45&auto=format&w=1356&h=668&fit=crop",
    publishedAt: "2025-07-30T01:49:00Z",
    content:
      "Parents are often told fruit is “bad” because it contains sugar, prompting concerns about how much fruit they should allow their child to eat.\n" +
      "This message has been fuelled by the “sugar-free” movement, which demonises sugar with claims it’s fattenin... [3965 chars]",
  },
  {
    id: "5",
    title:
      "Annual inflation hits 2.1pc in the June quarter, down from 2.4pc in March",
    description: `The "trimmed mean" measure of inflation — the Reserve Bank's preferred measure of underlying inflation — also declined.`,
    source: {
      id: "5cda8b5d5087e0271b0c94a70da9fe74",
      name: "Australian Broadcasting Corporation",
      url: "https://www.abc.net.au",
    },
    category: "general",
    url: "https://www.abc.net.au/news/2025-07-30/june-quarter-inflation-2025-australia-2-1-per-cent/105589364",
    image:
      "https://live-production.wcms.abc-cdn.net.au/4408c5d8d3ec25476ceca9f1fbcac56a?impolicy=wcms_watermark_news&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485&imformat=generic",
    publishedAt: "2025-07-30T01:43:34Z",
    content:
      "Inflation eased further in the June quarter, with consumer prices rising at an annual pace of 2.1 per cent, down from 2.4 per cent in the March quarter.\n" +
      `The "trimmed mean" measure of inflation, which is the Reserve Bank's preferred measure of underly... [311 chars]`,
  },
  {
    id: "6",
    title:
      "Nathan Lyon sledges Ben Stokes, Bazball after handshake drama, video",
    description:
      "Lyon nails Poms in three words as Aussie delivers perfect sledge over handshake rage",
    source: {
      id: "4dff6eec49aed8ad858c020da892bcf1",
      name: "Fox Sports",
      url: "https://www.foxsports.com.au",
    },
    category: "general",
    url: "https://www.foxsports.com.au/cricket/australia/cricket-2025-england-vs-india-test-series-the-ashes-nathan-lyon-sledges-ben-stokes-bazball-after-handshake-drama-video/news-story/6ca4d9799126d01ed47f2bd5500f3af9",
    image:
      "https://content.api.news/v3/images/bin/e35c258b8cb4c864214e605135b091a0",
    publishedAt: "2025-07-30T01:32:33Z",
    content:
      "Nathan Lyon on Tuesday offered England’s cricketers a word of advice on how they could’ve handled the end of the fourth Test against India more suitably, instead of offering an early handshake.\n" +
      "“Get them out,” came Lyon’s blunt reply when asked at a ... [4272 chars]",
  },
  {
    id: "7",
    title:
      "Liberal deputy Sam Groth to test new privacy laws over ‘malicious gossip’",
    description:
      "Victorian MP and former tennis star Sam Groth says articles delving into his relationship with his wife are a shocking and disgraceful invasion of privacy.",
    source: {
      id: "8952aa953859e9190b836f04018f5efe",
      name: "The Age",
      url: "https://www.theage.com.au",
    },
    category: "general",
    url: "https://www.theage.com.au/national/victoria/liberal-deputy-sam-groth-to-test-new-privacy-laws-over-malicious-gossip-20250730-p5mitx.html",
    image:
      "https://static.ffx.io/images/$zoom_0.2648%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_101/t_crop_custom/q_86%2Cf_auto/t_theage_no_label_no_age_social_wm/1b92d09bf61b667dd0c76b81b737911b2ed59ef8",
    publishedAt: "2025-07-30T00:50:33Z",
    content:
      "Victorian Liberal MP and former tennis star Sam Groth could be a test case for Australia’s new privacy laws after launching legal action against the Herald Sun and one of its journalists over what he claims was a serious invasion of his private life.... [808 chars]",
  },
  {
    id: "8",
    title: "Wall Street drifts lower, ASX set to dip",
    description:
      "The Australian sharemarket has inched higher at the open ahead of the latest inflation numbers, which will be released later on Wednesday morning.",
    source: {
      id: "65045958568caf3ea94d17e4238416e8",
      name: "The Sydney Morning Herald",
      url: "https://www.smh.com.au",
    },
    category: "general",
    url: "https://www.smh.com.au/business/markets/asx-set-to-dip-as-wall-street-drifts-lower-20250730-p5mit3.html",
    image:
      "https://static.ffx.io/images/$zoom_0.6664509259259259%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_141%2C$y_285/t_crop_custom/q_86%2Cf_auto/t_smh_no_label_no_age_social_wm/a86732f031529d569a914ba92e5ef69777a6a16f",
    publishedAt: "2025-07-30T00:37:37Z",
    content:
      "The Australian sharemarket has inched higher at the open ahead of the latest inflation numbers, which will be released later on Wednesday morning.\n" +
      "The ASX 200 was 2.5 points higher to 8707.1 in early trade, with just four of 11 sectors in the green, ... [701 chars]",
  },
  {
    id: "9",
    title: "ASX to slip ahead of CPI, Pilbara tips higher output, lower costs",
    description:
      "Shares little changed before CPI. Crude oil soars overnight. IGO dumped on Kwinana woes. Appen warns on US uncertainty. Bowen Coking Coal in voluntary administration. Follow live.",
    source: {
      id: "cc72cf32d5f422be6da660f4366e7833",
      name: "AFR",
      url: "https://www.afr.com",
    },
    category: "general",
    url: "https://www.afr.com/markets/equity-markets/asx-to-slip-wall-st-edges-down-as-fed-awaited-20250730-p5misz",
    image:
      "https://static.ffx.io/images/$zoom_0.5521%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_live_no_age_social_wm/73c4a1566879b2972ceb129be20519c00f9875902a2034a4d2c8ab3a444b5118",
    publishedAt: "2025-07-30T00:34:00Z",
    content:
      "The Australian sharemarket has slipped at the open on Wednesday ahead of key inflation data, tracking a sluggish session on Wall Street with investors awaiting more earnings reports and guidance from the US Federal Reserve on the rate outlook.\n" +
      "Fed po... [2178 chars]",
  },
  {
    id: "10",
    title: "Anthony Albanese says Australia won’t rush Palestine recognition",
    description:
      "Coastal residents in Japan and Hawaii have been told to evacuate immediately due to an impending tsunami caused by an 8.7 magnitude earthquake that struck Russia. Follow live.",
    source: {
      id: "cc72cf32d5f422be6da660f4366e7833",
      name: "AFR",
      url: "https://www.afr.com",
    },
    category: "general",
    url: "https://www.afr.com/politics/federal/australia-news-live-albanese-adds-youtube-to-social-media-ban-for-kids-20250730-p5miti",
    image:
      "https://static.ffx.io/images/$zoom_0.2118%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_live_no_age_social_wm/c6f1526c8baf41a350a6a9103d8c7726f7dd4ddf",
    publishedAt: "2025-07-30T00:31:35Z",
    content:
      "Japan and Hawaii have issued evacuation orders for residents in the firing line of a tsunami that stemmed from a magnitude 8.7 earthquake in Russia.\n" +
      "According to NHK, Japan’s public broadcaster, tsunami warnings have been issued for at least 17 areas... [424 chars]",
  },
  {
    id: "11",
    title: "Copy: Croc-Filled Classrooms: VR Gateway to Islander Culture",
    description:
      "Great National Science Week Indigenous stories up for grabs now around AustraliaMultimedia project captures 65,000+ years of Indigenous Knowledge",
    source: {
      id: "0368281c39ba31f7435685e8b620f675",
      name: "Mirage News",
      url: "https://www.miragenews.com",
    },
    category: "general",
    url: "https://www.miragenews.com/croc-filled-classrooms-vr-gateway-to-islander-1505794/",
    image:
      "https://cdn1.miragenews.com/wp-content/uploads/2017/11/news-developments.jpg",
    publishedAt: "2025-07-30T02:21:00Z",
    content:
      "Great National Science Week Indigenous stories up for grabs now around Australia\n" +
      "Multimedia project captures 65,000+ years of Indigenous Knowledge through voices of elders, scientists and environmentalists – online\n" +
      "Remote school students use baited u... [1827 chars]",
  },
  {
    id: "12",
    title:
      "Copy: Young quantum poets; space cadets; kids’ conference Antarctica; classrooms in croc-filled billabongs; owl vomit",
    description:
      "Great National Science Week education stories up for grabs now around Australia Enter the ‘Ittyverse’: Aussie kids’ poems on ‘small, tiny, nano things’ during Quantum Year – online Remote school students use baited underwater cameras to explore croc-filled billabongs – Ramingining, NT Australian Space Agency funds primary school ‘Mission: SPACE’ program – online Preschoolers dissect owl vomit",
    source: {
      id: "a51b4decdc2c55421da2fdd714fcd262",
      name: "medianet.com.au",
      url: "https://newshub.medianet.com.au",
    },
    category: "general",
    url: "https://newshub.medianet.com.au/2025/07/young-quantum-poets-space-cadets-kids-conference-antarctica-classrooms-in-croc-filled-billabongs-owl-vomit/111435/",
    image:
      "https://newshub-website-data.s3.ap-southeast-2.amazonaws.com/2025/07/30121824/Science-Week-2025-Logos_PNG_SW_Inline_logo_rev_2025-6-860x89.png",
    publishedAt: "2025-07-30T02:19:51Z",
    content:
      "Great National Science Week education stories up for grabs now around Australia\n" +
      "Enter the ‘Ittyverse’: Aussie kids’ poems on ‘small, tiny, nano things’ during Quantum Year – online\n" +
      "Remote school students use baited underwater cameras to explore croc-... [21567 chars]",
  },
  {
    id: "13",
    title:
      "Copy: Why Kingsley takes some responsibility for Giants captain's ban",
    description:
      "Adam Kingsley says he was partly to blame for Giants captain Toby Greene's untimely suspension",
    source: {
      id: "0a46a0522ac739f3ecebe94711f4dabe",
      name: "afl.com.au",
      url: "https://www.afl.com.au",
    },
    category: "general",
    url: "https://www.afl.com.au/news/1376855/why-adam-kingsley-takes-some-responsibility-for-greater-western-sydney-giants-captain-toby-greenes-ban",
    image:
      "https://resources.afl.com.au/afl/photo/2025/07/25/9e3dab1d-d4b3-470b-9e64-d0cd0bfcd215/oD0zRIgf.jpg",
    publishedAt: "2025-07-30T02:05:39Z",
    content:
      "Adam Kingsley says he was partly to blame for Giants captain Toby Greene's untimely suspension\n" +
      "Dane Rampe and Toby Greene wrestle during Sydney's clash against Greater Western Sydney in round 20, 2025. Picture: AFL Photos\n" +
      "GREATER Western Sydney coach... [3755 chars]",
  },
  {
    id: "14",
    title:
      "Copy: Should I limit how much fruit my child eats because it contains sugar?",
    description: "Can kids eat too much fruit? Here’s what the evidence says.",
    source: {
      id: "344b3e5c4a3152c0cbebe5418ae064b7",
      name: "The Conversation",
      url: "https://theconversation.com",
    },
    category: "general",
    url: "https://theconversation.com/should-i-limit-how-much-fruit-my-child-eats-because-it-contains-sugar-257622",
    image:
      "https://images.theconversation.com/files/681403/original/file-20250722-56-r2jxkq.jpg?ixlib=rb-4.1.0&rect=0%2C427%2C5121%2C2560&q=45&auto=format&w=1356&h=668&fit=crop",
    publishedAt: "2025-07-30T01:49:00Z",
    content:
      "Parents are often told fruit is “bad” because it contains sugar, prompting concerns about how much fruit they should allow their child to eat.\n" +
      "This message has been fuelled by the “sugar-free” movement, which demonises sugar with claims it’s fattenin... [3965 chars]",
  },
  {
    id: "15",
    title:
      "Copy: Annual inflation hits 2.1pc in the June quarter, down from 2.4pc in March",
    description: `The "trimmed mean" measure of inflation — the Reserve Bank's preferred measure of underlying inflation — also declined.`,
    source: {
      id: "5cda8b5d5087e0271b0c94a70da9fe74",
      name: "Australian Broadcasting Corporation",
      url: "https://www.abc.net.au",
    },
    category: "general",
    url: "https://www.abc.net.au/news/2025-07-30/june-quarter-inflation-2025-australia-2-1-per-cent/105589364",
    image:
      "https://live-production.wcms.abc-cdn.net.au/4408c5d8d3ec25476ceca9f1fbcac56a?impolicy=wcms_watermark_news&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485&imformat=generic",
    publishedAt: "2025-07-30T01:43:34Z",
    content:
      "Inflation eased further in the June quarter, with consumer prices rising at an annual pace of 2.1 per cent, down from 2.4 per cent in the March quarter.\n" +
      `The "trimmed mean" measure of inflation, which is the Reserve Bank's preferred measure of underly... [311 chars]`,
  },
  {
    id: "16",
    title:
      "Copy: Nathan Lyon sledges Ben Stokes, Bazball after handshake drama, video",
    description:
      "Lyon nails Poms in three words as Aussie delivers perfect sledge over handshake rage",
    source: {
      id: "4dff6eec49aed8ad858c020da892bcf1",
      name: "Fox Sports",
      url: "https://www.foxsports.com.au",
    },
    category: "general",
    url: "https://www.foxsports.com.au/cricket/australia/cricket-2025-england-vs-india-test-series-the-ashes-nathan-lyon-sledges-ben-stokes-bazball-after-handshake-drama-video/news-story/6ca4d9799126d01ed47f2bd5500f3af9",
    image:
      "https://content.api.news/v3/images/bin/e35c258b8cb4c864214e605135b091a0",
    publishedAt: "2025-07-30T01:32:33Z",
    content:
      "Nathan Lyon on Tuesday offered England’s cricketers a word of advice on how they could’ve handled the end of the fourth Test against India more suitably, instead of offering an early handshake.\n" +
      "“Get them out,” came Lyon’s blunt reply when asked at a ... [4272 chars]",
  },
  {
    id: "17",
    title:
      "Copy: Liberal deputy Sam Groth to test new privacy laws over ‘malicious gossip’",
    description:
      "Victorian MP and former tennis star Sam Groth says articles delving into his relationship with his wife are a shocking and disgraceful invasion of privacy.",
    source: {
      id: "8952aa953859e9190b836f04018f5efe",
      name: "The Age",
      url: "https://www.theage.com.au",
    },
    category: "general",
    url: "https://www.theage.com.au/national/victoria/liberal-deputy-sam-groth-to-test-new-privacy-laws-over-malicious-gossip-20250730-p5mitx.html",
    image:
      "https://static.ffx.io/images/$zoom_0.2648%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_101/t_crop_custom/q_86%2Cf_auto/t_theage_no_label_no_age_social_wm/1b92d09bf61b667dd0c76b81b737911b2ed59ef8",
    publishedAt: "2025-07-30T00:50:33Z",
    content:
      "Victorian Liberal MP and former tennis star Sam Groth could be a test case for Australia’s new privacy laws after launching legal action against the Herald Sun and one of its journalists over what he claims was a serious invasion of his private life.... [808 chars]",
  },
  {
    id: "18",
    title: "Copy: Wall Street drifts lower, ASX set to dip",
    description:
      "The Australian sharemarket has inched higher at the open ahead of the latest inflation numbers, which will be released later on Wednesday morning.",
    source: {
      id: "65045958568caf3ea94d17e4238416e8",
      name: "The Sydney Morning Herald",
      url: "https://www.smh.com.au",
    },
    category: "general",
    url: "https://www.smh.com.au/business/markets/asx-set-to-dip-as-wall-street-drifts-lower-20250730-p5mit3.html",
    image:
      "https://static.ffx.io/images/$zoom_0.6664509259259259%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_141%2C$y_285/t_crop_custom/q_86%2Cf_auto/t_smh_no_label_no_age_social_wm/a86732f031529d569a914ba92e5ef69777a6a16f",
    publishedAt: "2025-07-30T00:37:37Z",
    content:
      "The Australian sharemarket has inched higher at the open ahead of the latest inflation numbers, which will be released later on Wednesday morning.\n" +
      "The ASX 200 was 2.5 points higher to 8707.1 in early trade, with just four of 11 sectors in the green, ... [701 chars]",
  },
  {
    id: "19",
    title:
      "Copy: ASX to slip ahead of CPI, Pilbara tips higher output, lower costs",
    description:
      "Shares little changed before CPI. Crude oil soars overnight. IGO dumped on Kwinana woes. Appen warns on US uncertainty. Bowen Coking Coal in voluntary administration. Follow live.",
    source: {
      id: "cc72cf32d5f422be6da660f4366e7833",
      name: "AFR",
      url: "https://www.afr.com",
    },
    category: "general",
    url: "https://www.afr.com/markets/equity-markets/asx-to-slip-wall-st-edges-down-as-fed-awaited-20250730-p5misz",
    image:
      "https://static.ffx.io/images/$zoom_0.5521%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_live_no_age_social_wm/73c4a1566879b2972ceb129be20519c00f9875902a2034a4d2c8ab3a444b5118",
    publishedAt: "2025-07-30T00:34:00Z",
    content:
      "The Australian sharemarket has slipped at the open on Wednesday ahead of key inflation data, tracking a sluggish session on Wall Street with investors awaiting more earnings reports and guidance from the US Federal Reserve on the rate outlook.\n" +
      "Fed po... [2178 chars]",
  },
  {
    id: "20",
    title:
      "Copy: Anthony Albanese says Australia won’t rush Palestine recognition",
    description:
      "Coastal residents in Japan and Hawaii have been told to evacuate immediately due to an impending tsunami caused by an 8.7 magnitude earthquake that struck Russia. Follow live.",
    source: {
      id: "cc72cf32d5f422be6da660f4366e7833",
      name: "AFR",
      url: "https://www.afr.com",
    },
    category: "general",
    url: "https://www.afr.com/politics/federal/australia-news-live-albanese-adds-youtube-to-social-media-ban-for-kids-20250730-p5miti",
    image:
      "https://static.ffx.io/images/$zoom_0.2118%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_live_no_age_social_wm/c6f1526c8baf41a350a6a9103d8c7726f7dd4ddf",
    publishedAt: "2025-07-30T00:31:35Z",
    content:
      "Japan and Hawaii have issued evacuation orders for residents in the firing line of a tsunami that stemmed from a magnitude 8.7 earthquake in Russia.\n" +
      "According to NHK, Japan’s public broadcaster, tsunami warnings have been issued for at least 17 areas... [424 chars]",
  },
];

export async function fetchNews(category: Category, quary: string) {
  const endPoint = quary ? "search" : "top-headlines";
  const params = new URLSearchParams({
    apikey: API_KEY,
    lang: "en",
    country: "au",
    max: "10",
    ...(quary ? { q: quary } : {}),
    ...(category !== "all" ? { topic: category } : {}),
  });
  const response = await fetch(`${BASE_URL}/${endPoint}?${params}`);
  if (!response.ok) {
    console.error(`News API request failed: ${response.statusText}`);
    //use mock when the API request fails, which might caused by the number of requests is exceeding the daliy limit 100, etc
    return mockArticles;
  }
  const data = await response.json();
  const articles: Article[] = data.articles.map(
    (article: Article, index: number) => ({
      id: String(index + 1),
      title: article.title || "untitled",
      description: article.description || "No description availble",
      source: article.source || "Unknown Source",
      category: category === "all" ? "general" : category,
      url: article.url || "#",
      image: article.image,
      publishedAt: article.publishedAt || new Date().toISOString(),
      content: article.content,
    })
  );
  return articles;
}
