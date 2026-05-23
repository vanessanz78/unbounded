export const armLinks = {
  "freedom-wealth": "#/freedom-wealth",
  "family-travel": "#/family-travel",
  "spiritual-conscious": "#/spiritual-conscious",
  "home-lifestyle": "#/home-lifestyle",
  "building-public": "#/building-public"
};

export const topicLinks = {
  Trading: "#/freedom-wealth?section=trading",
  "Online income": "#/freedom-wealth?section=online-income",
  Affiliates: "#/freedom-wealth?section=affiliates",
  Stocks: "#/freedom-wealth?section=stocks",
  Bitcoin: "#/freedom-wealth?section=bitcoin",
  Worldschooling: "#/family-travel?section=worldschooling",
  Relocation: "#/family-travel?section=relocation",
  "Global lifestyle": "#/family-travel?section=global-lifestyle",
  Mindset: "#/spiritual-conscious/mindset",
  QHHT: "#/spiritual-conscious/qhht",
  Sovereignty: "#/spiritual-conscious/sovereignty",
  "NZ roots": "#/home-lifestyle?section=nz-roots",
  "Cattery & cottage": "#/home-lifestyle?section=deloraine",
  "Slow living": "#/home-lifestyle?section=slow-living",
  Entrepreneurship: "#/building-public?section=entrepreneurial-spirit",
  "AI tools": "#/building-public?section=ai-tools",
  "Slow living systems": "#/building-public?section=slow-living-ai"
};

export function getArmHref(armId) {
  return armLinks[armId] || "#/";
}

export function getTopicHref(armId, topic) {
  return topicLinks[topic] || getArmHref(armId);
}
