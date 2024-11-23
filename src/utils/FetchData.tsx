import {parseSubtopics,parseColorPalette,parseTypo} from "@/utils/parseSubtopics";

// Subtopics for each category
const subtopics = {
  branding: ["Logo Concept", "Color Palette", "Typography", "Voice & Tone", "Style Guide"],
  businessPlan: ["Executive Summary", "Market Analysis", "Company Description", "Product Overview", "Financial Plan"],
  marketingStrategy: ["Target Customer Analysis", "Go-to-Market Strategy", "Paid Marketing Strategy"],
  legalGuide: [
    "Legal Disclaimers", 
    "Business Entity Formation", 
    "Tax Obligations", 
    "Compliance and Regulations",
    "Intellectual Property Protection",
    "Contracts and Agreements",
    "Insurance",
    "Maintaining Good Standing",
    "Exit Strategy",
    "Seek Professional Help"
  ]
};

// Function to make API calls to fetch content
const fetchContent = async (prompt: string): Promise<{ text: string }> => {
  const response = await fetch("/api/generateContent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch content");
  }
  return response.json();
};

export const generatePrompts = (businessIdea: string) => ({
  branding: `Provide branding advice for Product: ${businessIdea}. Structure the response as follows:
  1. "Logo Concept": Provide detailed suggestions for the product's logo, including its style and elements.
  2. "Color Palette": Include specific colors with hexadecimal codes and their intended emotional/branding impact.
  3. "Typography": Recommend fonts and their usage (headings, body text, etc.).
  4. "Voice & Tone": Describe the product's tone of communication and style.
  5. "Style Guide": Include guidelines for consistent branding usage across platforms.
  Ensure the response is organized with clear headings and content under each subtopic.
  Do not include introductory phrases like "Absolutely." Just provide the relevant details.`,
  

  businessPlan: `Provide a business plan for Product: ${businessIdea}. Structure the response as follows:
  1. "Executive Summary": Summarize the product's purpose, target audience, and goals.
  2. "Market Analysis": Describe the target market, competition, and market trends.
  3. "Company Description": Outline the company's mission, vision, and structure.
  4. "Product Overview": Detail the product's key features, unique selling points, and development plan.
  5. "Financial Plan": Provide initial funding needs, revenue streams, and projections.
  Ensure the response is organized with clear headings and content under each subtopic.
  Do not include introductory phrases like "Absolutely." Just provide the relevant details.`,

  marketingStrategy: `Provide a marketing strategy for Product: ${businessIdea}. Structure the response as follows:
  1. "Target Customer Analysis": Define the demographics, psychographics, and behavior of the target audience.
  2. "Go-to-Market Strategy": Detail distribution channels, product positioning, and launch strategies.
  3. "Paid Marketing Strategy": Include advertising plans (social media, SEM, influencer partnerships, etc.).
  Ensure the response is organized with clear headings and content under each subtopic.
  Do not include introductory phrases like "Absolutely." Just provide the relevant details.`,

  legalGuide: `Provide a legal guide for Product: ${businessIdea}. Structure the response as follows:
  1. "Legal Disclaimers": Outline disclaimers required for the product or service.
  2. "Business Entity Formation": Detail steps to form a legal business entity.
  3. "Tax Obligations": Describe federal, state, and local tax requirements.
  4. "Compliance and Regulations": Identify key industry-specific regulations.
  5. "Intellectual Property Protection": Provide steps to secure trademarks, patents, or copyrights.
  6. "Contracts and Agreements": Suggest necessary contracts with suppliers, employees, and partners.
  7. "Insurance": Recommend types of insurance to protect the business.
  8. "Maintaining Good Standing": Describe best practices to maintain compliance and good standing.
  9. "Exit Strategy": Suggest options for a business exit plan.
  10. "Seek Professional Help": Advise when to seek legal or professional assistance.
  Ensure the response is organized with clear headings and content under each subtopic.
  Do not include introductory phrases like "Absolutely." Just provide the relevant details.`,
});


export const fetchDashboardData = async (businessIdea: string) => {
  const prompts = generatePrompts(businessIdea);

  console.log("Fetching data with prompts:", prompts);

  const [branding, businessPlan, marketingStrategy, legalGuide] = await Promise.all([
    fetchContent(prompts.branding),
    fetchContent(prompts.businessPlan),
    fetchContent(prompts.marketingStrategy),
    fetchContent(prompts.legalGuide),
  ]);

  // Log raw content to inspect fetched data
  console.log("Raw branding text:", branding.text);
  console.log("Raw businessPlan text:", businessPlan.text);
  console.log("Raw marketingStrategy text:", marketingStrategy.text);
  console.log("Raw legalGuide text:", legalGuide.text);

  // Parse subtopics
  const brandingSubtopics = parseSubtopics(branding.text, subtopics.branding);
  console.log("Parsed Branding Subtopics:", brandingSubtopics);

  const businessPlanSubtopics = parseSubtopics(businessPlan.text, subtopics.businessPlan);
  console.log("Parsed BusinessPlan Subtopics:", businessPlanSubtopics);

  const marketingStrategySubtopics = parseSubtopics(marketingStrategy.text, subtopics.marketingStrategy);
  console.log("Parsed MarketingStrategy Subtopics:", marketingStrategySubtopics);

  const legalGuideSubtopics = parseSubtopics(legalGuide.text, subtopics.legalGuide);
  console.log("Parsed LegalGuide Subtopics:", legalGuideSubtopics);

  const overviewContent = `
    ### Branding
    ${branding.text}

    ### Business Plan
    ${businessPlan.text}

    ### Marketing Strategy
    ${marketingStrategy.text}

    ### Legal Guide
    ${legalGuide.text}
      `;

  const colors = parseColorPalette(branding.text)
  const typo = parseTypo(branding.text)   
  
  // Generate structured data
  const allData = {
    overview: { full: overviewContent  },
    branding: { full: branding.text, subtopics: brandingSubtopics },
    businessPlan: { full: businessPlan.text, subtopics: businessPlanSubtopics },
    marketingStrategy: { full: marketingStrategy.text, subtopics: marketingStrategySubtopics },
    legalGuide: { full: legalGuide.text, subtopics: legalGuideSubtopics },
  };

  console.log("Final structured data:", allData);

  return allData;
};
