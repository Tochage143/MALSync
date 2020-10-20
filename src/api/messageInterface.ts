export interface xhrI {
  name: 'xhr';
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string | { url: string; data?: any; headers?: any };
}
export interface xhrResponseI {
  finalUrl: string;
  responseText: string;
  status: number;
}

export interface videoTime {
  name: 'videoTime';
  item: { current: number; duration: number; paused: boolean };
}

export interface content {
  name: 'content';
  item: any;
}

export interface videoTimeSet {
  name: 'videoTimeSet';
  time?: number;
  timeAdd?: number;
  sender?: chrome.runtime.MessageSender;
}

export interface iframeDone {
  name: 'iframeDone';
  id: string;
  epList: any;
  len?: number;
  error?: any;
}

export interface minimalWindow {
  name: 'minimalWindow';
  height: number;
  width: number;
  left: number;
}

export type sendMessageI = xhrI | iframeDone | videoTime | videoTimeSet | minimalWindow | content;

export type responseMessageI = xhrResponseI;
