const BASE_URL: string = "https://api.openai.com/v1";

const getHeaders = (apiKey: string): HeadersInit => ({
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
});

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{ message: Message; finish_reason: string }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

interface SubscriptionDetails {
  hard_limit_usd: number;
  soft_limit_usd: number;
  system_hard_limit_usd: number;
  access_until: number;
}

interface TokenUsage {
  total_usage: number;
  data: Array<{ timestamp: number; usage: number }>;
}

/**
 * Fetches token usage details within a given date range
 * @param apiKey - OpenAI API Key
 * @param startDate - Start date in YYYY-MM-DD format (optional, defaults to 7 days ago)
 * @param endDate - End date in YYYY-MM-DD format (optional, defaults to today)
 */
export const getTokenUsage = async (
  apiKey: string,
  startDate?: string,
  endDate?: string
): Promise<TokenUsage> => {
  try {
    const now = new Date();
    const defaultEndDate = now.toISOString().split("T")[0];
    now.setDate(now.getDate() - 7);
    const defaultStartDate = now.toISOString().split("T")[0];

    const finalStartDate = startDate || defaultStartDate;
    const finalEndDate = endDate || defaultEndDate;

    const response = await fetch(
      `${BASE_URL}/dashboard/billing/usage?start_date=${finalStartDate}&end_date=${finalEndDate}`,
      {
        method: "GET",
        headers: getHeaders(apiKey),
      }
    );
    if (!response.ok) throw new Error("Failed to fetch token usage");
    return await response.json();
  } catch (error) {
    console.error("Error fetching token usage:", error);
    throw error;
  }
};

/**
 * Fetches OpenAI subscription details (credits and limits)
 * @param apiKey - OpenAI API Key
 */
export const getSubscriptionDetails = async (
  apiKey: string
): Promise<SubscriptionDetails> => {
  try {
    const response = await fetch(`${BASE_URL}/dashboard/billing/subscription`, {
      method: "GET",
      headers: getHeaders(apiKey),
    });
    if (!response.ok) throw new Error("Failed to fetch subscription details");
    return await response.json();
  } catch (error) {
    console.error("Error fetching subscription details:", error);
    throw error;
  }
};

/**
 * Fetches a chat completion response from OpenAI
 * @param apiKey - OpenAI API Key
 * @param messages - Array of messages (system, user, assistant)
 * @param model - OpenAI model (default: "gpt-4o")
 * @param temperature - Sampling temperature (default: 0.7)
 */
export const getChatCompletion = async (
  apiKey: string,
  messages: Message[],
  model: string = "gpt-4o",
  temperature: number = 0.7
): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: getHeaders(apiKey),
      body: JSON.stringify({ model, messages, temperature }),
    });
    if (!response.ok) throw new Error("Failed to fetch chat completion");
    const jsonResponse = await response.json();
    return jsonResponse?.choices?.length > 0
      ? jsonResponse?.choices[0]?.message
      : "";
  } catch (error) {
    console.error("Error fetching chat completion:", error);
    throw error;
  }
};
