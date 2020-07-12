/**
 * Media to be shown across the app and save in the db.
 */
export interface Media {
  url: string;
  type: 'img' | 'gif' | 'vid' | 'emb';
  format: string;
  description?: string;
}
