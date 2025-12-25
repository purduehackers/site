interface Thumbnail {
  width: number;
  url: string;
  height: number;
}

export default interface Attachment {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails?: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
}
