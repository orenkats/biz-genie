

export const parseColorPalette = (text: string): Array<{ name: string; hex: string }> => {
  const lines = text.split("\n");
  const colors: Array<{ name: string; hex: string }> = [];

  lines.forEach((line) => {
    // Check if the line contains a color entry
    if (line.includes("**") && line.includes(":") && line.includes("#") && colors.length < 4) {
      const startName = line.indexOf("**") + 2;
      const endName = line.indexOf("**", startName);
      const name = line.substring(startName, endName).trim();

      const hexStart = line.indexOf("#");
      const hexEnd = line.indexOf(" ", hexStart) !== -1 ? line.indexOf(" ", hexStart) : line.length;
      const hex = line.substring(hexStart, hexEnd).trim();

      if (name && hex) {
        colors.push({ name, hex });
      }
    }
  });

  return colors;
};

 
export const parseTypo = (text: string): string[] => {
  const lines = text.split("\n"); // Split the text into individual lines
  const fonts: string[] = [];

  lines.forEach((line) => {
    if (line.startsWith("- **Headings**: Use **")) {
      const start = line.indexOf("Use **") + 5; // Find the starting point of the font name
      const end = line.indexOf("**", start); // Find the end point of the font name
      if (start !== -1 && end !== -1) {
        fonts.push(line.substring(start, end).trim()); // Extract and add the font name
      }
    }

    if (line.startsWith("- **Body Text**: Use **")) {
      const start = line.indexOf("Use **") + 5;
      const end = line.indexOf("**", start);
      if (start !== -1 && end !== -1) {
        fonts.push(line.substring(start, end).trim());
      }
    }
  });

  return fonts;
};



  
  
  export const parseCustomerAnalysis = (text: string) => {
    console.log("Parsing Customer Analysis...");
    const data = {
      age: "",
      location: "",
      engagement: "",
    };
  
    const normalizedText = text.toLowerCase();
    const ageMatch = normalizedText.match(/age:\s*([\w\s\-]+?years?)/);
    if (ageMatch) {
      data.age = ageMatch[1].trim();
    }
  
    const locationMatch = normalizedText.match(/location:\s*([\w\s\-,]+(\([^)]*\))?)/);
    if (locationMatch) {
      data.location = locationMatch[1].trim();
    }
  
    const engagementMatch = normalizedText.match(/engagement:\s*([\w\s,]+(?:\.[^.]+)?)/);
    if (engagementMatch) {
      data.engagement = engagementMatch[1].trim();
    }
  
    console.log("Parsed Customer Analysis:", data);
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



