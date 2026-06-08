export const armLinks = {
  "freedom-wealth": "#/freedom-wealth",
  "family-travel": "#/family-travel?section=why-travel",
  "spiritual-conscious": "#/spiritual-conscious",
  "home-lifestyle": "#/home-lifestyle",
  "building-public": "#/using-ai-tools"
};

export const topicLinks = {
  "Online Trading": "#/freedom-wealth?section=online-trading",
  "Social Media & Online Income": "#/freedom-wealth?section=online-income",
  "Bitcoin & Sovereignty": "#/freedom-wealth?section=bitcoin",
  "Stocks & Investing": "#/freedom-wealth?section=stocks",
  "Online Income & Business": "#/freedom-wealth?section=online-income",
  "Affiliates & Partnerships": "#/freedom-wealth?section=affiliates",
  "Protect & Preserve": "#/freedom-wealth?section=bitcoin",
  Trading: "#/freedom-wealth?section=online-trading",
  "Online income": "#/freedom-wealth?section=online-income",
  Affiliates: "#/freedom-wealth?section=affiliates",
  Stocks: "#/freedom-wealth?section=stocks",
  Bitcoin: "#/freedom-wealth?section=bitcoin",
  "Why Travel?": "#/family-travel?section=why-travel",
  "Travel Smarter": "#/family-travel?section=travel-smarter",
  Worldschooling: "#/family-travel?section=worldschooling",
  Relocation: "#/family-travel?section=relocation",
  "Global lifestyle": "#/family-travel?section=global-lifestyle",
  "Global Lifestyle Design": "#/family-travel?section=global-lifestyle",
  Connection: "#/spiritual-conscious?section=connection",
  Awareness: "#/spiritual-conscious?section=awareness",
  Healing: "#/spiritual-conscious?section=healing",
  Sovereignty: "#/spiritual-conscious?section=sovereignty",
  Purpose: "#/spiritual-conscious?section=purpose",
  "Sovereign Lifestyle": "#/home-lifestyle?section=sovereign-lifestyle",
  "Nature & Outdoor Adventures": "#/home-lifestyle?section=nature-outdoor-adventures",
  "Connection to Roots": "#/home-lifestyle?section=connection-to-roots",
  "Income Generating Property": "#/home-lifestyle?section=income-generating-property",
  "Food Security & Self Sufficiency": "#/home-lifestyle?section=food-security-self-sufficiency",
  "Sovereign lifestyle": "#/home-lifestyle?section=sovereign-lifestyle",
  "Nature & outdoors": "#/home-lifestyle?section=nature-outdoor-adventures",
  "Connection to roots": "#/home-lifestyle?section=connection-to-roots",
  "Income property": "#/home-lifestyle?section=income-generating-property",
  "Food security": "#/home-lifestyle?section=food-security-self-sufficiency",
  "NZ roots": "#/home-lifestyle?section=connection-to-roots",
  "Cattery & cottage": "#/home-lifestyle?section=income-generating-property",
  "Slow living": "#/home-lifestyle?section=sovereign-lifestyle",
  "Why AI?": "#/using-ai-tools?section=why-ai",
  "What AI Tools Can I Use?": "#/using-ai-tools?section=ai-tools",
  "Workflow & Step-by-Step Guidance": "#/using-ai-tools?section=workflow",
  "I Have an Idea. Now What?": "#/using-ai-tools?section=idea-now-what",
  "How Do I Make Money & Scale?": "#/using-ai-tools?section=money-scale",
  "AI tool stack": "#/using-ai-tools?section=ai-tools",
  Workflow: "#/using-ai-tools?section=workflow",
  Ideas: "#/using-ai-tools?section=idea-now-what",
  "Money & scale": "#/using-ai-tools?section=money-scale",
  Entrepreneurship: "#/using-ai-tools?section=idea-now-what",
  "AI tools": "#/using-ai-tools?section=ai-tools",
  "Slow living systems": "#/using-ai-tools?section=workflow"
};

export function getArmHref(armId) {
  return armLinks[armId] || "#/";
}

export function getTopicHref(armId, topic) {
  return topicLinks[topic] || getArmHref(armId);
}
