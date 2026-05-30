import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { resumeText, degree, role, companySize, companyType, sector } = await req.json();

    if (!resumeText) {
      return NextResponse.json({ error: "Resume text is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Return a status indicating fallback heuristic is active
      return NextResponse.json({
        isFallback: true,
        message: "Gemini API key is not configured. Falling back to local heuristic parser."
      });
    }

    // Call Gemini API (Free tier)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const prompt = `You are a professional technical resume parser and career advisor for engineering students.
Analyze this candidate's details and generate a gamified, highly accurate score and feedback profile.

Resume text:
"""
${resumeText}
"""

Degree: ${degree}
Target Role: ${role}
Target Company Size: ${companySize}
Target Company Type: ${companyType}
Target Sector: ${sector}

You must return a JSON object with EXACTLY the following structure (do not include markdown code block wrappers like \`\`\`json, return only the raw JSON text):
{
  "score": <number between 25 and 96>,
  "visibility": "<string: e.g., 'Top 15%', 'Top 40%', 'Top 8%'>",
  "clarity": "<string: e.g., 'Recruiter-ready', 'Moderate Signal', 'Needs Structure'>",
  "momentum": "<string: e.g., 'Build + improve', 'Major Upgrade Needed', 'Add Technical Depth'>",
  "strengths": ["<string: strength 1>", "<string: strength 2>", "<string: strength 3>"],
  "improvements": [
    { "text": "<string: specific improvement 1>", "impact": "+<number> points" },
    { "text": "<string: specific improvement 2>", "impact": "+<number> points" },
    { "text": "<string: specific improvement 3>", "impact": "+<number> points" }
  ],
  "rank": <number between 10 and 350>,
  "totalStudents": 1420
}

Please ensure that:
1. The feedback is constructive and highlights real engineering keywords (e.g. active verbs, metric impact, optimizations, architectures).
2. The JSON is perfectly valid and can be parsed with JSON.parse.`;

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      return NextResponse.json({
        isFallback: true,
        message: "Failed to query Gemini API. Falling back to local heuristic parser."
      });
    }

    const data = await response.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      return NextResponse.json({
        isFallback: true,
        message: "Empty response from Gemini API. Falling back to local heuristic parser."
      });
    }

    // Parse the generated JSON response
    const parsedData = JSON.parse(responseText.trim());
    return NextResponse.json({
      isFallback: false,
      data: parsedData
    });

  } catch (error: any) {
    console.error("API Route error:", error);
    return NextResponse.json({
      isFallback: true,
      message: `Error occurred: ${error.message}. Falling back to local heuristic parser.`
    });
  }
}
