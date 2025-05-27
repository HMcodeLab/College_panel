// /** DEV */
// export const BASE_URL = "http://localhost:3009/api";
// export const AUTH_BASE_URL = "http://localhost:3009/auth";

/** PROD */
export const BASE_URL = 'https://api.hopingminds.com/api';
// export const BASE_URL = 'http://localhost:3009/api';
export const AUTH_BASE_URL = 'https://api.hopingminds.com/auth';

export const BASE_URL_NSDC = "https://uatservices.ekaushal.com/api";

export function formatIndianCurrency(amount) {
  return amount.toLocaleString("en-IN", { style: "currency", currency: "INR" });
}

// export const BASE_URL = 'https://api.qa.hopingminds.in/api';
// export const AUTH_BASE_URL = 'https://api.qa.hopingminds.in/auth';
