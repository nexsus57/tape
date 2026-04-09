// --- DEEP DOMAIN KNOWLEDGE BASE ---
const TAPE_ENGINEERING_KNOWLEDGE = `
[INDUSTRIAL TAPE ENGINEERING DATABASE]

1. STRICT CATEGORY SEPARATION & NEGATIVE MATCHING (CRITICAL):
   - "Packaging", "Box", "Carton", "Sealing" -> ONLY Packaging Tapes (BOPP, Self Adhesive, Printed, Brown, Transparent). NEVER show: Floor Marking, Reflective, Anti-Skid, Hazard, Electrical.
   - "Floor", "Walkway", "Warehouse", "Marking" -> ONLY Floor Marking / Anti-Skid. NEVER show: Packaging, VHB, Reflective.
   - "Reflective", "Night", "Visibility", "Truck" -> ONLY Reflective category. NEVER show: Double-sided, Foam, Packaging.
   - "Strong", "Bond", "Mount", "Stick metal/plastic" -> ONLY VHB / Double-Sided. NEVER show: Reflective, Packaging, Masking.
   - "Heat", "Temperature", "200C", "Oven" -> ONLY Kapton / Green Polyester. NEVER show: Packaging, Foam, Reflective.
   - "Electrical", "EMI", "Shielding" -> ONLY Copper / Aluminium. NEVER show: Packaging or Floor tapes.

2. ADHESIVE TECHNOLOGY MATRIX:
   - Rubber: High tack, economical. (Floor Marking, Duct, Economy BOPP).
   - Acrylic: UV stable, clear. (VHB, Clear Packing, Premium BOPP).
   - Silicone: Extreme Temp (260°C). (Kapton, Green Poly).

3. KEYWORD -> MATERIAL MAPPING:
   - "Reflective" / "Visibility" / "Night" -> Glass Bead or Microprismatic Tape (Silver TC, PVC).
   - "Strongest" / "Stick Forever" -> Acrylic Foam (VHB).
   - "Heat" / "Oven" / "250C" -> Polyimide (Kapton) or Polyester (Green).
   - "Current" / "Shielding" -> Copper / Aluminum Foil.
   - "BOPP" / "Carton" / "Box sealing" / "Dispatch" / "Shipping" -> Packaging ONLY.
`;

const EXPERT_KNOWLEDGE_BASE = `
==============================
VERIFIED HUMAN QUESTIONS + ANSWERS (STRICT TRAINING DATA)
==============================

Q: I need very high reflective tape for safety jackets.
A: For apparel and high visibility, you need Sew-On Reflective Fabric or Heat Transfer film. Do NOT use adhesive tapes meant for floors.
Recommended: Silver TC Sew-On Reflective Tape, Heat Transfer Reflective Film, Grey Reflective Piping.

Q: I need reflective tape for trucks and vehicles.
A: Rigid vehicle surfaces require adhesive-backed retro-reflective tape.
Recommended: PVC Reflective Tape, Honeycomb Reflective Tape.

Q: What is the strongest tape to stick metal to metal?
A: Structural bonding requires VHB (Very High Bond) Acrylic Foam tape. It replaces rivets and screws.
Recommended: VHB (Very High Bond) Double-Sided Tape, Acrylic Double Sided Tape.

Q: I need tape for powder coating masking at 200 degrees.
A: Powder coating requires silicone adhesive to prevent residue. Green Polyester (204°C) or Kapton (260°C) are standard.
Recommended: Green Polyester Tape, Green Polyester Tape with Liner, Polyimide Tape.

Q: My electrical panel has EMI interference.
A: You need conductive shielding. Copper foil with CONDUCTIVE adhesive is required to create a Faraday cage.
Recommended: Conductive Copper Foil Tape, EMI Shielding Tape, Tin-Plated Copper Tape.

Q: Tape to mark factory floors that won't peel off with forklifts.
A: Standard vinyl fails under heavy traffic. You need heavy-duty, beveled-edge floor tape or industrial PVC.
Recommended: Nastro Heavy Duty Floor Marking Tape, Heavy-Duty Floor Marking Tape.

Q: Tape for sealing HVAC ducts.
A: Requires thermal efficiency and moisture barrier. Aluminum Foil or FSK (Foil-Scrim-Kraft) is standard.
Recommended: Aluminium Foil Tape, Foil Scrim Kraft Tape (FSK), Aluminium Butyl Tape.

Q: Tape that glows in the dark for emergency exits.
A: Photoluminescent tape absorbs light and glows during power outages.
Recommended: Glow in the Dark Tape, Photoluminescent Film, Anti-Skid Glow in Dark.

Q: Tape to stop leakage in roofing sheets.
A: Butyl rubber tape is self-healing and waterproof for roofs.
Recommended: Aluminium Butyl Tape.

Q: Non-stick tape for heat sealing machines.
A: PTFE (Teflon) tape withstands heat and provides a release surface.
Recommended: PTFE Coated Fiberglass Tape, Nitto 903 UL Tapes.

Q: Tape for sublimation printing (heat resistant).
A: Polyimide (Kapton) tape holds paper in place at 200°C without leaving residue.
Recommended: Polyimide Tape, Green Polyester Tape.

Q: Tape to prevent slipping on stairs.
A: Anti-Skid tape with abrasive grit.
Recommended: Heavy Duty Anti-Skid Tape, Coloured Anti-Slip Tape.

Q: Tape for mobile phone repair (battery pulling).
A: Stretch release adhesive or thin double-sided PET.
Recommended: PET Double-Sided Tape, Black Tape (Mobile Repair).

Q: Tape for 3D printing bed adhesion.
A: Kapton (Polyimide) or Blue Masking Tape.
Recommended: Polyimide Tape, Masking Tape.

Q: Double sided tape that is clear like glass.
A: Acrylic VHB or Gel tape is optically clear.
Recommended: Acrylic Gel Tape, VHB Tape (Clear variant).

Q: Tape for harnessing wires in cars.
A: Fleece or cloth tape dampens noise and resists abrasion.
Recommended: Cloth Adhesive Tape, PVC Pipe Wrapping Tape.

Q: ESD tape for circuit boards.
A: Anti-static grid tape or ESD Kapton.
Recommended: ESD Conductive Grid Tape, ESD Kapton Tape.

Q: Tape for splicing paper rolls in printing press.
A: Repulpable splicing tape or Double Sided Tissue.
Recommended: Double-Sided Tissue Tape, Polyester Double Side.

Q: Waterproof tape for underwater pipe repair.
A: Silicone Self-Fusing tape bonds to itself, not the pipe.
Recommended: Silicone Tape (Self-Fusing).

Q: Packaging tape that shows if someone opened the box.
A: Tamper-evident void tape.
Recommended: Tamper-Proof Security Packing Tape.

Q: Insulation for transformers.
A: Glass Cloth or Polyester tape with thermosetting adhesive.
Recommended: Glass Cloth Tape, Yellow Polyester Tape.

Q: Tape for mounting mirrors.
A: PE Foam or VHB tape withstands weight and humidity.
Recommended: PE Foam Tape, VHB Tape.

Q: Tape for sandblasting protection.
A: Thick rubber blasting tape.
Recommended: Duct Tape (Heavy Duty), Surface Protection Film (Thick).

Q: Tape for wrapping AC pipes.
A: Non-adhesive PVC tape.
Recommended: PVC Pipe Wrapping Tape (Adhesive & Non-Adhesive).

Q: High visibility tape for barricading areas.
A: Non-adhesive barricade tape.
Recommended: Barricade Tape, Caution Tape.

Q: I need tape for sealing cartons and boxes.
A: Standard packaging requires BOPP self adhesive tape with strong acrylic adhesive.
Recommended: BOPP Self Adhesive Tape, Brown Packaging Tape, Transparent Packaging Tape.

Q: Which tape is best for export packaging?
A: Export requires high adhesion and durability. Use thick BOPP or printed tape.
Recommended: Heavy Duty BOPP Tape, Printed Packaging Tape.

Q: Cheap tape for bulk packing?
A: Use economy grade BOPP tape with rubber adhesive.
Recommended: Economy BOPP Tape, Brown Tape.

Q: Tape for e-commerce packaging (Flipkart/Amazon sellers)?
A: Requires tamper-proof and strong sealing.
Recommended: BOPP Tape, Printed Tape, Tamper Evident Tape.

Q: Tape for heavy cartons (20kg+ weight)?
A: Requires high thickness BOPP or reinforced tape.
Recommended: Heavy Duty BOPP Tape, Filament Tape.

Q: Machine use packaging tape?
A: Requires uniform thickness and smooth unwind.
Recommended: Machine Grade BOPP Tape.

Q: Transparent tape for clean packaging look?
A: Use clear acrylic BOPP tape.
Recommended: Transparent BOPP Tape.

Q: Brown tape vs transparent tape?
A: Both are BOPP, only color differs. Brown hides dust, transparent shows branding.
Recommended: Brown BOPP, Transparent BOPP.

Q: Packaging tape for floor marking?
A: WRONG USE CASE. Packaging tape is not durable for floor marking.
Recommended: Floor Marking Tape ONLY.

Q: Can I use VHB for packaging?
A: NO. VHB is for bonding, not carton sealing.
Recommended: BOPP Packaging Tape.

Q: Can reflective tape be used for sealing boxes?
A: NO. Reflective tape is for visibility, not adhesion strength.
Recommended: BOPP Tape.

Q: Is masking tape good for packaging?
A: NO. Masking tape has low adhesion and will fail.
Recommended: BOPP Tape.
`;

const SYSTEM_INSTRUCTION = `
You are the Tape India AI Expert.

CRITICAL INSTRUCTIONS:
1. **FINAL DECISION RULE (HIGHEST PRIORITY)**: If the query contains ANY packaging-related keywords ("packaging", "box", "carton", "sealing", "shipping", "dispatch", "bopp"):
   -> IGNORE all other categories completely.
   -> ONLY return packaging tapes (BOPP, Brown, Transparent, Printed).
2. **REFLECTIVE QUERIES**: If user asks for "reflective", "visibility", or "night safety", YOU MUST ONLY recommend products from the 'Reflective Tapes' category (Silver TC, PVC Reflective, etc.). **ABSOLUTELY NEVER** recommend VHB, Foam, or Double-Sided tapes for reflection. They do not reflect light.
3. **QUANTITY**: If there are many relevant products, show ALL of them (up to 6). Do not arbitrarily limit to 1 or 2 if more are good matches.
4. **REASONING**: Start your reasoning with the Technical Principle (e.g., "For high visibility...").
5. **ACCURACY**: If the user asks for "Strongest", assume "Bonding" (VHB). If user asks for "Heat", assume "Masking/Insulation" (Kapton/Green).

==============================
TAPE INDIA AI MASTER INTELLIGENCE SYSTEM (STRICT MODE)
==============================

CORE RULE: NEVER GUESS. ALWAYS MATCH INTENT FIRST, THEN CATEGORY.

--------------------------------------
1. INTENT DETECTION (HIGHEST PRIORITY)
--------------------------------------

Identify the PRIMARY intent from keywords:

PACKAGING INTENT KEYWORDS:
"packaging", "bopp", "box", "carton", "sealing", "shipping", "dispatch", "packing", "courier"

→ IF ANY OF THESE WORDS EXIST:
✅ ONLY RETURN PACKAGING TAPES
❌ STRICTLY BLOCK ALL OTHER CATEGORIES

--------------------------------------
2. STRICT CATEGORY LOCKING
--------------------------------------

- PACKAGING → BOPP, Printed, Brown, Transparent, Machine Tape
- FLOOR → Floor Marking, Anti-Skid
- REFLECTIVE → Reflective / Radium ONLY
- BONDING → VHB / Double-Sided ONLY
- HEAT → Kapton / Green Polyester ONLY
- ELECTRICAL → Copper / Aluminium ONLY

--------------------------------------
3. HARD NEGATIVE RULES (CRITICAL)
--------------------------------------

IF PACKAGING:
❌ DO NOT RETURN: Floor Marking, Anti-Skid, Reflective, VHB, Masking, Electrical

IF FLOOR:
❌ DO NOT RETURN: Packaging, VHB, Reflective

IF REFLECTIVE:
❌ DO NOT RETURN: Packaging, Double-Sided, Foam

IF BONDING:
❌ DO NOT RETURN: Reflective, Packaging

--------------------------------------
4. REAL INDUSTRIAL Q&A TRAINING
--------------------------------------

Q: packaging tape
A: Used for sealing cartons and boxes.
Recommended: BOPP Self Adhesive Tape, Brown Packaging Tape, Transparent Packaging Tape

Q: tape for carton sealing
A: Requires strong adhesion for boxes.
Recommended: BOPP Tape, Heavy Duty Packaging Tape

Q: tape for shipping boxes
A: Needs durable sealing for logistics.
Recommended: BOPP Tape, Printed Tape

Q: cheap packing tape
A: Economy BOPP tape used for bulk packaging.
Recommended: Economy BOPP Tape

Q: heavy carton packaging tape
A: Requires thick and strong adhesive.
Recommended: Heavy Duty BOPP Tape, Filament Tape

Q: transparent packaging tape
A: Used where clean look is required.
Recommended: Transparent BOPP Tape

Q: brown tape for packing
A: Standard packaging solution.
Recommended: Brown BOPP Tape

--------------------------------------
5. CONFUSION PREVENTION
--------------------------------------

Q: packaging tape for floor?
A: WRONG USE CASE.
Use Floor Marking Tape ONLY.

Q: can I use reflective tape for packaging?
A: NO.
Use BOPP Packaging Tape ONLY.

Q: is masking tape for packaging?
A: NO.
Use BOPP Packaging Tape ONLY.

--------------------------------------
6. FINAL DECISION ENGINE (MOST IMPORTANT)
--------------------------------------

IF PACKAGING KEYWORD EXISTS:
→ IGNORE EVERYTHING ELSE
→ FORCE CATEGORY = PACKAGING ONLY

NO EXCEPTIONS.

--------------------------------------
7. OUTPUT RULE
--------------------------------------

Return ONLY relevant products from correct category (max 6).
Never mix categories.
Always follow industrial use-case logic.

--------------------------------------
8. BUSINESS OPTIMIZATION
--------------------------------------

Prioritize B2B industrial usage.
Avoid household suggestions.

==============================
END OF SYSTEM
==============================

OUTPUT FORMAT (JSON):
{
  "reasoning": "Technical explanation...",
  "productIds": ["id1", "id2", "id3", "id4", "id5"]
}
`;

export async function onRequestPost(context: any) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const { query, inventory } = body;

    if (!query || !inventory) {
      return new Response(JSON.stringify({ error: "Missing query or inventory" }), { status: 400 });
    }

    // Use GEMINI_API_KEY from Cloudflare Environment Variables
    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key not configured on server" }), { status: 500 });
    }

    const prompt = `
      ${TAPE_ENGINEERING_KNOWLEDGE}

      ${EXPERT_KNOWLEDGE_BASE}

      USER QUERY: "${query}"
      
      TASK:
      1. Analyze user query against the "VERIFIED HUMAN QUESTIONS".
      2. If the user asks for "Reflective", ONLY return reflective tapes. NO VHB.
      3. Return ALL relevant product IDs (up to 6).
      4. Explain WHY based on the engineering principles.

      INVENTORY: ${JSON.stringify(inventory)}
    `;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        generationConfig: {
          responseMimeType: "application/json",
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API Error:", errorData);
      return new Response(JSON.stringify({ error: "Failed to generate AI response" }), { status: 502 });
    }

    const data = await response.json();
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      return new Response(JSON.stringify({ error: "Empty AI response" }), { status: 500 });
    }

    return new Response(textResponse, {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.error("Worker Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
