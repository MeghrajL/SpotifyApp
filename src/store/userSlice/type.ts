export interface IUserProfile {
  display_name: string;
  email: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  type: string;
  uri: string;
}

export interface IInitialState {
  profile: IUserProfile | null;
  error: {} | null;
  isProfileLoading: boolean;
}
