import { GlobalResponse, PageResponses } from "./types";

export const fetchGlobalContent = async (
  locale: string
): Promise<GlobalResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/global?locale=${locale}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch global content");
  }
  return await response.json();
};

export const fetchPageContent = async <T extends keyof PageResponses>(
  locale: string,
  pageName: T
): Promise<PageResponses[T]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/pages?locale=${locale}&page=${pageName}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch page content");
  }
  return await response.json();
};
