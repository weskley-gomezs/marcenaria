
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getWoodworkAdvice = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Você é um mestre marceneiro experiente da 'Artesão & Co.'.
        Sua missão é ajudar clientes com ideias de móveis planejados, escolha de madeiras, estimativas de durabilidade e sugestões de design.
        Seja educado, técnico porém acessível, e sempre promova o trabalho artesanal de alta qualidade.
        Sempre fale em Português do Brasil.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao consultar o mestre marceneiro:", error);
    return "Desculpe, tive um problema ao processar sua consulta. Poderia tentar novamente?";
  }
};
