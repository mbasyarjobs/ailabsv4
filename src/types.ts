/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StyleGuide {
  id: string;
  name: string;
  desc: string;
  prompt: string;
  negativePrompt: string;
  videoPrompt: string;
  category: string;
  imageUrl: string;
  placeholderUrl: string;
  creator: string;
  tags: string[];
}

export interface ToolItem {
  id: string;
  name: string;
  desc: string;
  btnText: string;
  url: string;
  category: "chat" | "animation" | "design" | "utility";
  status: "Online" | "Premium" | "Free Trial" | "AI Power";
  badgeColor: string;
  iconType: "chat" | "bot" | "canva" | "mail" | "leonardo" | "google";
}
