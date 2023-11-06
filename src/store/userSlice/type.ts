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

interface ExternalUrls {
  spotify: string;
}

interface Images {
  url: string;
  height: number;
  width: number;
}

interface Owner {
  external_urls: ExternalUrls;
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface Show {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Images[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface ShowsResponse {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Show[];
}

export interface IInitialState {
  profile: IUserProfile | null;
  error: {} | null;
  isProfileLoading: boolean;
  playlists: ShowsResponse | null;
  isError: boolean;
}
