export interface ParsedSections {
    logoConcept: string;
    colorPalette: string;
    typography: string;
  }
  
  
  // Helper function to parse the AI response into sections
  export const parseAIResponse = (response: string): ParsedSections => {
    const sections: ParsedSections = {
      logoConcept: "",
      colorPalette: "",
      typography: "",
    };
  
    // Extract 'Logo Concept'
    const logoConceptMatch = response.match(/Logo Concept:\n([\s\S]*?)\nColor Palette:/);
    sections.logoConcept = logoConceptMatch ? logoConceptMatch[1].trim() : "";
  
    // Extract 'Color Palette'
    const colorPaletteMatch = response.match(/Color Palette:\n([\s\S]*?)\nTypography:/);
    sections.colorPalette = colorPaletteMatch ? colorPaletteMatch[1].trim() : "";
  
    // Extract 'Typography'
    const typographyMatch = response.match(/Typography:\n([\s\S]*)/);
    sections.typography = typographyMatch ? typographyMatch[1].trim() : "";
  
    return sections;
  };
    