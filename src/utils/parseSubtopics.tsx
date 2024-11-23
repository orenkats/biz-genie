
interface Typography {
    headings: string; // Font name for headings
    bodyText: string; // Font name for body text
    usage: {
      headings: { font: string; weight: string; sizeRange: string }; // Usage details for headings
      body: { font: string; weight: string; sizeRange: string }; // Usage details for body text
    };
  }
  

export const parseColorPalette = (text: string) => {
    const regex = /- \*\*(.*?)\*\*: (.*?) - (.*?)(\n|$)/g;
    const colors = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      colors.push({ name: match[1], code: match[2], description: match[3] });
    }
    return colors;
  };


export const parseTypo = (text: string): Typography | null => {
    try {
      const normalizedText = text.toLowerCase();
  
      // Extract font name for headings
      const headingsMatch = /headings:\s*use\s*"([^"]+)"/i.exec(text);
      const headingsFont = headingsMatch ? headingsMatch[1] : "Unknown";
  
      // Extract font name for body text
      const bodyTextMatch = /body\s*text:\s*use\s*"([^"]+)"/i.exec(text);
      const bodyTextFont = bodyTextMatch ? bodyTextMatch[1] : "Unknown";
  
      // Extract usage details for headings
      const usageHeadingsMatch =
        /headings:\s*([^,]+),\s*([^,]+),\s*sizes\s*ranging\s*from\s*([^\.]+)/i.exec(
          normalizedText
        );
      const usageHeadings = usageHeadingsMatch
        ? {
            font: usageHeadingsMatch[1],
            weight: usageHeadingsMatch[2],
            sizeRange: usageHeadingsMatch[3],
          }
        : { font: "Unknown", weight: "Unknown", sizeRange: "Unknown" };
  
      // Extract usage details for body text
      const usageBodyMatch =
        /body:\s*([^,]+),\s*([^,]+),\s*sizes\s*([^\.]+)/i.exec(normalizedText);
      const usageBody = usageBodyMatch
        ? {
            font: usageBodyMatch[1],
            weight: usageBodyMatch[2],
            sizeRange: usageBodyMatch[3],
          }
        : { font: "Unknown", weight: "Unknown", sizeRange: "Unknown" };
  
      return {
        headings: headingsFont,
        bodyText: bodyTextFont,
        usage: {
          headings: usageHeadings,
          body: usageBody,
        },
      };
    } catch (error) {
      console.error("Error parsing typography:", error);
      return null;
    }
};

export const parseCustomerAnalysis = (text: string) => {
    const data = {
      age: "",
      location: "",
      engagement: "",
    };
  
    // Normalize text for easier parsing
    const normalizedText = text.toLowerCase();
  
    // Extract Age
    const ageMatch = normalizedText.match(/age:\s*([\w\s\-]+?years?)/);
    if (ageMatch) {
      data.age = ageMatch[1].trim();
    }
  
    // Extract Location
    const locationMatch = normalizedText.match(/location:\s*([\w\s\-,]+(\([^)]*\))?)/);
    if (locationMatch) {
      data.location = locationMatch[1].trim();
    }
  
    // Extract Engagement
    const engagementMatch = normalizedText.match(/engagement:\s*([\w\s,]+(?:\.[^.]+)?)/);
    if (engagementMatch) {
      data.engagement = engagementMatch[1].trim();
    }
  
    return data;
};

export const parseSubtopics = (text: string, subtopics: string[]) => {
    const parsedSubtopics: { [key: string]: string } = {};

    subtopics.forEach((subtopic, index) => {
        console.log(`Parsing subtopic: ${subtopic}`);

        // Locate the start of the subtopic
        const normalizedText = text.toLowerCase();
        const startIndicators = [`### ${subtopic.toLowerCase()}`, `## ${subtopic.toLowerCase()}`, `# ${subtopic.toLowerCase()}`,`. ${subtopic.toLowerCase()}`];
        const startIndex = startIndicators.reduce((idx, indicator) => {
            const foundIdx = normalizedText.indexOf(indicator);
            return foundIdx !== -1 && (idx === -1 || foundIdx < idx) ? foundIdx : idx;
        }, -1);

        if (startIndex !== -1) {
            console.log(`Found header for '${subtopic}' at index: ${startIndex}`);

            // Determine the end of the current subtopic's content
            let endIndex = text.length; // Default to the end of the text
            for (let i = index + 1; i < subtopics.length; i++) {
                const nextStartIndicators = [`### ${subtopics[i].toLowerCase()}`, `## ${subtopics[i].toLowerCase()}`, `# ${subtopics[i].toLowerCase()}`, `. ${subtopics[i].toLowerCase()}`];
                const nextSubtopicIndex = nextStartIndicators.reduce((idx, indicator) => {
                    const foundIdx = normalizedText.indexOf(indicator);
                    return foundIdx !== -1 && (idx === -1 || foundIdx < idx) ? foundIdx : idx;
                }, -1);
                if (nextSubtopicIndex !== -1 && nextSubtopicIndex > startIndex) {
                    endIndex = nextSubtopicIndex;
                    break;
                }
            }

            // Extract content between the start and end indices
            let subtopicContent = text.slice(startIndex + startIndicators[0].length, endIndex).trim();

            // Add explicit spacing between paragraphs and **sub-subtopics**
            subtopicContent = subtopicContent
                .split("\n")
                .map((line, idx, arr) => {
                    // If the current line starts with "**" and the previous line exists, add a newline
                    if (line.startsWith("**") && idx > 0 && arr[idx - 1].trim() !== "") {
                        return `\n${line.trim()}`;
                    }
                    return line.trim();
                })
                .join("\n");

            // Ensure a blank line between the end of the content and the next header
            subtopicContent = subtopicContent.replace(/([^\n])\n(?=##|###)/g, "$1\n\n");

            parsedSubtopics[subtopic] = subtopicContent;

            console.log(`Extracted content for '${subtopic}':`, parsedSubtopics[subtopic]);
        } else {
            console.log(`Subtopic '${subtopic}' not found.`);
            parsedSubtopics[subtopic] = "";
        }
    });

    return parsedSubtopics;
};



