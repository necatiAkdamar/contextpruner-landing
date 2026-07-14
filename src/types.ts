/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactFormState {
  fullName: string;
  companyName: string;
  offerAmount: string;
  message: string;
}

export interface BusinessIdea {
  id: string;
  title: string;
  iconName: "Zap" | "Brain" | "Database";
  description: string;
  metrics: string[];
}

export interface DomainMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export interface CalculationResult {
  volume: number;
  rawCost: number;
  compressedVolume: number;
  optimizedCost: number;
  monthlySavings: number;
  annualSavings: number;
}
