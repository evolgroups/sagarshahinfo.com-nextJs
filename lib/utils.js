import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * @param  {...any} inputs - Class names to merge
 * @returns {string} - Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate years since a given year
 * @param {number} startYear - Starting year
 * @returns {number} - Number of years
 */
export function getYearsSince(startYear) {
  return new Date().getFullYear() - startYear;
}

/**
 * Format number with suffix (K, M, etc.)
 * @param {number} num - Number to format
 * @returns {string} - Formatted string
 */
export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 */
export function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80; // Header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

/**
 * Generate Google Drive thumbnail URL
 * @param {string} fileId - Google Drive file ID
 * @param {number} size - Image size (width)
 * @returns {string} - Thumbnail URL
 */
export function getGoogleDriveThumbnail(fileId, size = 1000) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
}
