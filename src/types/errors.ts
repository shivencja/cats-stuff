export interface ApiError {
  errors: {
    message?: string;
    key: ApiErrorKey;
  }[];
}

export enum ApiErrorKey {
  UNAUTHORIZED = "UNAUTHORIZED",
  UNKNOWN_API_ERROR = "UNKNOWN_API_ERROR",
  NO_OFFERS_FOUND = "NO_OFFERS_FOUND",
  OFFER_NOT_FOUND = "OFFER_NOT_FOUND",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}
