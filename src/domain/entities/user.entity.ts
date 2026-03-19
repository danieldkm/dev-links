export interface Link {
  id: string;
  label: string;
  url: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon?: string;
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  links: Link[];
  socialLinks: SocialLink[];
  footerText: string;
}
