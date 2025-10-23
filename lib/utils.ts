import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function generateId(): string {
  return Math.random().toString(36).slice(2);
}

export function encodeToHex(str: string): string {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    let hex = Array.from(data, (byte) => byte.toString(16).padStart(2, '0')).join('');
    return hex;
    
  } catch (e) {
    console.error("Encoding failed:", e);
    return "";
  }
}


export function decodeFromHex(hex: string): string {
  try {
    if (hex.length % 2 !== 0) {
      console.warn("Decoding failed: Hex string must have an even length.");
      throw new Error("Invalid hex string length.");
    }

    const bytes = new Uint8Array(hex.length / 2);

    for (let i = 0; i < hex.length; i += 2) {
      const hexByte = hex.substring(i, i + 2);
      const byteValue = parseInt(hexByte, 16);

      if (isNaN(byteValue)) {
        console.warn(`Decoding failed: Invalid hex character found at position ${i}: "${hexByte}"`);
        throw new Error("Invalid hex character found.");
      }
      
      bytes[i / 2] = byteValue;
    }

    const decoder = new TextDecoder();
    return decoder.decode(bytes);

  } catch (e) {
    return "";
  }
}