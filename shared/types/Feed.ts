export interface Feed {
  type: 'feed';
  // Unique ID of the feed, generated by server by the time the feed is added.
  _id: string;
  // User-facing label (name) of the feed.
  label: string;
  // URL of the feed.
  url: string;
  // Interval between checking the feed for new items.
  interval: number;
  // How many times rules have matched items of the feed.
  count?: number;
}

export interface Rule {
  type: 'rule';
  // Unique ID of the rule, generated by server by the time the automation is added.
  _id: string;
  // User-facing label (name) of the rule.
  label: string;
  // IDs of feeds of which this rule should apply to.
  // TODO: Multi feed support not implemented. Only feedIDs[0] is used at the moment.
  feedIDs: Array<string>;
  // Field of the feed item to be matched with rules. [default: 'title']
  field?: string;
  // Regular expression to match items.
  match: string;
  // Regular expression to exclude items.
  exclude: string;
  // Destination path where matched items are downloaded to.
  destination: string;
  // Tags to be added when items are queued for download.
  tags: Array<string>;
  // Start to download immediately after the items are queued.
  startOnLoad: boolean;
  // Whether the destination path should be used as base path.
  isBasePath?: boolean;
  // How many items this rule has matched.
  count?: number;
}

export interface MatchedTorrents {
  type: 'matchedTorrents';
  _id: string;
  // Previously queued URLs from matched feed items. So we don't queue them again.
  urls: Array<string>;
}

export interface Item {
  // Title of the feed item.
  title: string;
  // URLs extracted from the feed item.
  urls: Array<string>;
}
