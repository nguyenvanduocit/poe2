/**
 * Path of Exile Stash API Client
 *
 * Access stash tabs and inventory
 */

const BASE_URL = 'https://www.pathofexile.com';

export interface StashClientConfig {
  poesessid: string;
  accountName?: string;
}

export interface Item {
  id: string;
  name: string;
  typeLine: string;
  baseType: string;
  ilvl: number;
  corrupted?: boolean;
  identified?: boolean;
  requirements?: Array<{ name: string; values: string[][] }>;
  sockets?: Array<{ group: number; attr: string; sColour: string }>;
  properties?: Array<{ name: string; values: any[][] }>;
  explicitMods?: string[];
  implicitMods?: string[];
  craftedMods?: string[];
  enchantMods?: string[];
  frameType: number;
  x?: number;
  y?: number;
  inventoryId?: string;
  socketedItems?: Item[];
}

export interface StashTab {
  n: string; // name
  i: number; // index
  id: string;
  type: string;
  hidden?: boolean;
  selected?: boolean;
  colour?: { r: number; g: number; b: number };
}

export interface StashTabContents {
  numTabs: number;
  tabs: StashTab[];
  items: Item[];
}

export class StashClient {
  private config: StashClientConfig;
  private headers: Record<string, string>;

  constructor(config: StashClientConfig) {
    this.config = config;
    this.headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'Referer': config.accountName
        ? `${BASE_URL}/account/view-profile/${config.accountName}`
        : `${BASE_URL}/my-account`,
      'Origin': BASE_URL,
      'Cookie': `POESESSID=${config.poesessid}`,
    };
  }

  /**
   * Build POST body, omitting accountName if not set.
   * The POE API infers account from POESESSID when accountName is absent.
   * Sending accountName='' causes Forbidden.
   */
  private buildBody(extra: Record<string, string> = {}): string {
    const params: Record<string, string> = { realm: 'pc', ...extra };
    if (this.config.accountName) {
      params.accountName = this.config.accountName;
    }
    return new URLSearchParams(params).toString();
  }

  async getStashTabs(league: string, tabIndex = 0): Promise<StashTabContents> {
    const body = this.buildBody({
      league,
      tabIndex: tabIndex.toString(),
      tabs: '1',
    });

    const response = await fetch(`${BASE_URL}/character-window/get-stash-items`, {
      method: 'POST',
      headers: this.headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch stash: ${response.statusText}`);
    }

    // Add mandatory 1 second cooldown after each successful API call to POE servers
    await new Promise(resolve => setTimeout(resolve, 1000));

    return response.json();
  }

  async getAllStashTabs(league: string): Promise<StashTab[]> {
    const firstTab = await this.getStashTabs(league, 0);
    return firstTab.tabs;
  }

  async getStashTabByName(league: string, tabName: string): Promise<StashTabContents | null> {
    // First call: get all tab metadata (index 0 returns all tabs in the tabs array)
    const firstTab = await this.getStashTabs(league, 0);
    const tab = firstTab.tabs.find((t) => t.n === tabName);
    if (!tab) return null;
    if (tab.i === 0) return firstTab; // already have this tab's contents
    return this.getStashTabs(league, tab.i);
  }
}

export function createStashClient(config: StashClientConfig): StashClient {
  return new StashClient(config);
}
