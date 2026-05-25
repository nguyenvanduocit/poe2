/**
 * Path of Exile Trade API Client
 *
 * Provides comprehensive access to the official POE trade API:
 * - Item search with extensive filters
 * - Result fetching with whisper messages
 * - Rate limiting and request management
 * - League, item, and stat data retrieval
 */

// ============================================================================
// Types and Interfaces
// ============================================================================

export interface TradeConfig {
  poesessid: string;
  league: string;
  game?: 'poe1' | 'poe2';
  userAgent?: string;
  realm?: 'pc' | 'xbox' | 'sony';
  useRateLimitDelay?: boolean;
  cfClearance?: string;
  rateLimit?: {
    requestsPerMinute?: number;
    delayBetweenRequests?: number; // milliseconds
  };
}

export interface SearchQuery {
  // Item identification
  name?: string;
  type?: string | { option: string; discriminator?: string };
  term?: string; // General search term

  // Status filters
  status?: {
    option: 'online' | 'any' | 'securable' | 'available'; // 'online' = in-person only, 'securable' = instant only, 'available' = both, 'any' = all including offline
  };

  // Stats filters
  stats?: Array<{
    type: 'and' | 'if' | 'count' | 'not' | 'weight';
    filters: Array<{
      id: string;
      value?: {
        min?: number;
        max?: number;
        option?: string | number;
      };
      disabled?: boolean;
    }>;
    disabled?: boolean;
    value?: {
      min?: number;
      max?: number;
    };
  }>;

  // Trade filters
  filters?: {
    trade_filters?: {
      disabled?: boolean;
      filters?: {
        price?: {
          min?: number;
          max?: number;
          option?: string; // currency type
        };
        sale_type?: {
          option?: 'priced' | 'unpriced';
        };
        account?: {
          input?: string;
        };
        collapse?: boolean;
      };
    };
    socket_filters?: {
      disabled?: boolean;
      filters?: {
        sockets?: {
          min?: number;
          max?: number;
          r?: number; // red
          g?: number; // green
          b?: number; // blue
          w?: number; // white
        };
        links?: {
          min?: number;
          max?: number;
          r?: number;
          g?: number;
          b?: number;
          w?: number;
        };
      };
    };
    req_filters?: {
      disabled?: boolean;
      filters?: {
        lvl?: {
          min?: number;
          max?: number;
        };
        dex?: {
          min?: number;
          max?: number;
        };
        str?: {
          min?: number;
          max?: number;
        };
        int?: {
          min?: number;
          max?: number;
        };
      };
    };
    armour_filters?: {
      disabled?: boolean;
      filters?: {
        ar?: { min?: number; max?: number };
        es?: { min?: number; max?: number };
        ev?: { min?: number; max?: number };
        ward?: { min?: number; max?: number };
        block?: { min?: number; max?: number };
      };
    };
    weapon_filters?: {
      disabled?: boolean;
      filters?: {
        damage?: { min?: number; max?: number };
        aps?: { min?: number; max?: number };
        crit?: { min?: number; max?: number };
        dps?: { min?: number; max?: number };
        edps?: { min?: number; max?: number };
        pdps?: { min?: number; max?: number };
      };
    };
    map_filters?: {
      disabled?: boolean;
      filters?: {
        map_tier?: { min?: number; max?: number };
        map_iiq?: { min?: number; max?: number };
        map_iir?: { min?: number; max?: number };
        map_packsize?: { min?: number; max?: number };
      };
    };
    misc_filters?: {
      disabled?: boolean;
      filters?: {
        quality?: { min?: number; max?: number };
        ilvl?: { min?: number; max?: number };
        gem_level?: { min?: number; max?: number };
        corrupted?: { option?: 'true' | 'false' | 'any' };
        identified?: { option?: 'true' | 'false' | 'any' };
        crafted?: { option?: 'true' | 'false' | 'any' };
        enchanted?: { option?: 'true' | 'false' | 'any' };
        mirrored?: { option?: 'true' | 'false' | 'any' };
        shaper_item?: { option?: 'true' | 'false' | 'any' };
        elder_item?: { option?: 'true' | 'false' | 'any' };
        crusader_item?: { option?: 'true' | 'false' | 'any' };
        redeemer_item?: { option?: 'true' | 'false' | 'any' };
        hunter_item?: { option?: 'true' | 'false' | 'any' };
        warlord_item?: { option?: 'true' | 'false' | 'any' };
      };
    };
  };
}

export interface SearchRequest {
  query: SearchQuery;
  sort?: {
    price?: 'asc' | 'desc';
    [key: string]: 'asc' | 'desc' | undefined;
  };
}

export interface SearchResult {
  id: string; // Search session ID
  result: string[]; // Array of item IDs
  total: number;
  complexity?: number;
}

export interface FetchedItem {
  id: string;
  listing: {
    indexed: string;
    method?: string; // e.g., "psapi"
    fee?: number; // Fee for instant trade
    account: {
      name: string;
      online?: {
        league?: string;
        status?: string;
      } | null;
      lastCharacterName?: string;
      language?: string;
    };
    price?: {
      type: string;
      amount: number;
      currency: string;
    };
    stash?: {
      name: string;
      x: number;
      y: number;
    };
    whisper?: string; // Pre-formatted whisper text (only without POESESSID auth, copy-paste only)
    whisper_token?: string; // Returned for online (in-person) trades. Use with sendWhisper().
    hideout_token?: string; // Returned for securable (instant buy) trades. Use with sendWhisper(). Player must be in town/hideout.
  };
  item: {
    verified: boolean;
    w: number;
    h: number;
    icon: string;
    league: string;
    name: string;
    typeLine: string;
    baseType?: string;
    identified: boolean;
    ilvl?: number;
    properties?: Array<{
      name: string;
      values: Array<[string, number]>;
      displayMode?: number;
      type?: number;
    }>;
    requirements?: Array<{
      name: string;
      values: Array<[string, number]>;
      displayMode?: number;
    }>;
    implicitMods?: string[];
    explicitMods?: string[];
    craftedMods?: string[];
    enchantMods?: string[];
    fracturedMods?: string[];
    corrupted?: boolean;
    cosmetic?: string[];
    sockets?: Array<{
      group: number;
      attr: string;
      sColour: string;
    }>;
    extended?: {
      category?: string;
      subcategories?: string[];
      prefixes?: number;
      suffixes?: number;
      mods?: {
        explicit?: Array<{
          name: string;
          tier: string;
          level: number;
          magnitudes?: Array<{
            hash: string;
            min: number;
            max: number;
          }>;
        }>;
        implicit?: Array<any>;
        crafted?: Array<any>;
        fractured?: Array<any>;
        enchant?: Array<any>;
      };
      hashes?: {
        explicit?: Array<[string, number[]]>;
        implicit?: Array<[string, number[]]>;
        crafted?: Array<[string, number[]]>;
      };
      text?: string;
    };
  };
}

export interface FetchResult {
  result: FetchedItem[];
}

export interface League {
  id: string;
  realm?: string;
  text: string;
}

export interface ItemCategory {
  id: string;
  label: string;
  entries?: Array<{
    name?: string;
    type?: string;
    text: string;
    flags?: {
      unique?: boolean;
    };
  }>;
}

export interface StatEntry {
  id: string;
  text: string;
  type?: string;
  option?: {
    options?: Array<{
      id: number;
      text: string;
    }>;
  };
}

export interface StatCategory {
  label: string;
  entries: StatEntry[];
}

// ============================================================================
// Trade Client Class
// ============================================================================

interface InternalTradeConfig {
  poesessid: string;
  league: string;
  game: 'poe1' | 'poe2';
  userAgent: string;
  realm: 'pc' | 'xbox' | 'sony';
  useRateLimitDelay: boolean;
  cfClearance: string;
  rateLimit: {
    requestsPerMinute: number;
    delayBetweenRequests: number;
  };
}

export class PoeTradeClient {
  private config: InternalTradeConfig;
  private baseUrl = 'https://www.pathofexile.com';
  private lastRequestTime = 0;
  private requestCount = 0;
  private requestWindow = 60000; // 1 minute in milliseconds
  private windowStartTime = 0;

  constructor(config: TradeConfig) {
    this.config = {
      poesessid: config.poesessid,
      league: config.league,
      game: config.game || 'poe1',
      userAgent: config.userAgent || 'poe-trade-client/1.0.0 (contact@example.com)',
      realm: config.realm || 'pc',
      useRateLimitDelay: config.useRateLimitDelay ?? true,
      cfClearance: config.cfClearance || '',
      rateLimit: {
        requestsPerMinute: config.rateLimit?.requestsPerMinute || 45,
        delayBetweenRequests: config.rateLimit?.delayBetweenRequests || 1500,
      },
    };
  }

  /**
   * Get API path prefix based on game version
   * POE1: /api/trade
   * POE2: /api/trade2
   */
  private get apiPath(): string {
    return this.config.game === 'poe2' ? '/api/trade2' : '/api/trade';
  }

  /**
   * Get league path for search/fetch endpoints
   * POE1: /{league}
   * POE2: /poe2/{league}
   */
  private get leaguePath(): string {
    return this.config.game === 'poe2'
      ? `/poe2/${encodeURIComponent(this.config.league)}`
      : `/${encodeURIComponent(this.config.league)}`;
  }

  /**
   * Rate limiting: Delay requests to avoid hitting API limits
   */
  private async rateLimit(): Promise<void> {
    if (!this.config.useRateLimitDelay) {
      return;
    }

    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;

    // Enforce minimum delay between requests
    if (timeSinceLastRequest < this.config.rateLimit.delayBetweenRequests) {
      const delay = this.config.rateLimit.delayBetweenRequests - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Track requests per minute using window start time
    if (now - this.windowStartTime > this.requestWindow) {
      this.requestCount = 0;
      this.windowStartTime = now;
    }

    this.requestCount++;
    this.lastRequestTime = Date.now();

    // If approaching rate limit, add extra delay
    if (this.requestCount >= this.config.rateLimit.requestsPerMinute - 5) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  /**
   * Make authenticated request to POE API
   */
  private async request<T>(
    method: 'GET' | 'POST',
    endpoint: string,
    body?: any
  ): Promise<T> {
    await this.rateLimit();

    const url = `${this.baseUrl}${endpoint}`;

    // Build cookie string, only include non-empty values
    const cookies: string[] = [];
    if (this.config.poesessid) {
      cookies.push(`POESESSID=${this.config.poesessid}`);
    }
    if (this.config.cfClearance) {
      cookies.push(`cf_clearance=${this.config.cfClearance}`);
    }

    const headers: HeadersInit = {
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'DNT': '1',
      'Pragma': 'no-cache',
      'User-Agent': this.config.userAgent,
      ...(cookies.length > 0 && { 'Cookie': cookies.join('; ') }),
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Referer': `https://www.pathofexile.com/trade/search/${this.config.league}`,
      'Origin': 'https://www.pathofexile.com',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    // Add mandatory 1 second cooldown after each API call to POE servers
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `POE API request failed: ${response.status} ${response.statusText}\n${errorText}`
      );
    }

    return response.json() as Promise<T>;
  }

  // ==========================================================================
  // Data API Methods
  // ==========================================================================

  /**
   * Get available leagues
   */
  async getLeagues(): Promise<{ result: League[] }> {
    return this.request<{ result: League[] }>('GET', `${this.apiPath}/data/leagues`);
  }

  /**
   * Get item categories and types
   */
  async getItems(): Promise<{ result: ItemCategory[] }> {
    return this.request<{ result: ItemCategory[] }>('GET', `${this.apiPath}/data/items`);
  }

  /**
   * Get available stat filters
   */
  async getStats(): Promise<{ result: StatCategory[] }> {
    return this.request<{ result: StatCategory[] }>('GET', `${this.apiPath}/data/stats`);
  }

  /**
   * Get static trade data (currencies, etc.)
   */
  async getStatic(): Promise<any> {
    return this.request('GET', `${this.apiPath}/data/static`);
  }

  // ==========================================================================
  // Search API Methods
  // ==========================================================================

  /**
   * Search for items with filters
   */
  async search(searchRequest: SearchRequest): Promise<SearchResult> {
    const endpoint = `${this.apiPath}/search${this.leaguePath}`;
    return this.request<SearchResult>('POST', endpoint, searchRequest);
  }

  /**
   * Fetch detailed results for item IDs
   * @param itemIds Array of item IDs from search results (max 10 at a time)
   * @param queryId Search session ID from search results
   */
  async fetch(itemIds: string[], queryId?: string): Promise<FetchResult> {
    // POE API allows max 10 items per fetch request
    const ids = itemIds.slice(0, 10).join(',');
    let endpoint = `${this.apiPath}/fetch/${ids}`;

    if (queryId) {
      endpoint += `?query=${queryId}`;
      // POE2 needs realm parameter
      if (this.config.game === 'poe2') {
        endpoint += '&realm=poe2';
      }
    } else if (this.config.game === 'poe2') {
      endpoint += '?realm=poe2';
    }

    return this.request<FetchResult>('GET', endpoint);
  }

  /**
   * Execute a complete search and fetch cycle
   * @param searchRequest Search parameters
   * @param maxResults Maximum number of results to fetch (default: 10, max: 100)
   */
  async searchAndFetch(
    searchRequest: SearchRequest,
    maxResults: number = 10
  ): Promise<{
    searchResult: SearchResult;
    items: FetchedItem[];
  }> {
    // Execute search
    const searchResult = await this.search(searchRequest);

    if (searchResult.result.length === 0) {
      return {
        searchResult,
        items: [],
      };
    }

    // Fetch results in batches of 10
    const items: FetchedItem[] = [];
    const fetchLimit = Math.min(maxResults, searchResult.result.length, 100);

    for (let i = 0; i < fetchLimit; i += 10) {
      const batch = searchResult.result.slice(i, i + 10);
      const fetchResult = await this.fetch(batch, searchResult.id);
      items.push(...fetchResult.result);
    }

    return {
      searchResult,
      items,
    };
  }

  // ==========================================================================
  // Helper Methods
  // ==========================================================================

  /**
   * Extract whisper messages from fetched items
   */
  extractWhispers(items: FetchedItem[]): Array<{
    whisper?: string;
    itemName: string;
    price?: string;
    seller: string;
  }> {
    return items.map(item => ({
      whisper: item.listing.whisper,
      itemName: item.item.name || item.item.typeLine,
      price: item.listing.price
        ? `${item.listing.price.amount} ${item.listing.price.currency}`
        : undefined,
      seller: item.listing.account.name,
    }));
  }

  /**
   * Create a simple search for an item by name/term
   * POE2 uses 'term' for searching, POE1 can use both 'name' (exact) or 'term' (fuzzy)
   */
  createSimpleSearch(
    itemName: string,
    options?: {
      onlineOnly?: boolean;
      tradeMode?: 'available' | 'securable' | 'online'; // 'available' = both, 'securable' = instant only, 'online' = in-person only
      minPrice?: number;
      maxPrice?: number;
      currency?: string;
      sortByPrice?: boolean;
      exactMatch?: boolean; // Use 'name' instead of 'term' for exact matching
    }
  ): SearchRequest {
    // tradeMode takes priority; fall back to onlineOnly for backwards compat
    const statusOption = options?.tradeMode
      ?? (options?.onlineOnly === false ? 'any' : 'available');
    const searchRequest: SearchRequest = {
      query: {
        // Use 'term' for fuzzy search (works for both POE1 and POE2)
        // Use 'name' only for exact matching in POE1
        ...(options?.exactMatch && this.config.game === 'poe1'
          ? { name: itemName }
          : { term: itemName }),
        status: {
          option: statusOption,
        },
      },
    };

    // Add price filter
    if (options?.minPrice !== undefined || options?.maxPrice !== undefined) {
      searchRequest.query.filters = {
        trade_filters: {
          filters: {
            price: {
              min: options?.minPrice,
              max: options?.maxPrice,
              option: options?.currency,
            },
          },
        },
      };
    }

    // Add sorting
    if (options?.sortByPrice) {
      searchRequest.sort = { price: 'asc' };
    }

    return searchRequest;
  }

  /**
   * Create a search by base type
   * Use this when searching for items by their base type (e.g., "Spirits Shield", "Jewelled Dagger")
   */
  createTypeSearch(
    baseType: string,
    options?: {
      onlineOnly?: boolean;
      tradeMode?: 'available' | 'securable' | 'online'; // 'available' = both, 'securable' = instant only, 'online' = in-person only
      minPrice?: number;
      maxPrice?: number;
      currency?: string;
      sortByPrice?: boolean;
    }
  ): SearchRequest {
    // tradeMode takes priority; fall back to onlineOnly for backwards compat
    const statusOption = options?.tradeMode
      ?? (options?.onlineOnly === false ? 'any' : 'available');
    const searchRequest: SearchRequest = {
      query: {
        type: baseType,
        status: {
          option: statusOption,
        },
      },
    };

    if (options?.minPrice !== undefined || options?.maxPrice !== undefined) {
      searchRequest.query.filters = {
        trade_filters: {
          filters: {
            price: {
              min: options?.minPrice,
              max: options?.maxPrice,
              option: options?.currency,
            },
          },
        },
      };
    }

    if (options?.sortByPrice) {
      searchRequest.sort = { price: 'asc' };
    }

    return searchRequest;
  }

  /**
   * Update the league
   */
  setLeague(league: string): void {
    this.config.league = league;
  }

  /**
   * Get current configuration (sensitive fields redacted)
   */
  getConfig(): Omit<InternalTradeConfig, 'poesessid' | 'cfClearance'> & { hasPoesessid: boolean; hasCfClearance: boolean } {
    const { poesessid, cfClearance, ...rest } = this.config;
    return {
      ...rest,
      hasPoesessid: !!poesessid,
      hasCfClearance: !!cfClearance,
    };
  }

  /**
   * Send whisper via API using hideout_token
   * Uses /api/trade/whisper for POE1 and /api/trade2/whisper for POE2
   * IMPORTANT: Use hideout_token (returned for ALL listings when authenticated with POESESSID)
   * Player must be in town or hideout in-game for this to work.
   * @param token The hideout_token from listing (primary), or whisper_token (legacy)
   * @returns Response with success status and any error details
   */
  async sendWhisper(token: string): Promise<{ success: boolean; error?: string }> {
    try {
      const result = await this.request<{ success?: boolean; error?: { code: number; message: string } }>(
        'POST',
        `${this.apiPath}/whisper`,
        { token }
      );
      return { success: result.success === true };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return { success: false, error: message };
    }
  }

  /**
   * Create a map search query
   * Maps use a special discriminator in the type filter
   */
  createMapSearch(
    mapNames: string | string[],
    options?: {
      onlineOnly?: boolean;
      instantTrade?: boolean; // Only show instant-buyable listings
      tier?: number;
      minPrice?: number;
      maxPrice?: number;
      currency?: string;
      sortByPrice?: boolean;
    }
  ): SearchRequest {
    const maps = Array.isArray(mapNames) ? mapNames : [mapNames];

    let statusOption: 'online' | 'any' | 'securable' = 'online';
    if (options?.instantTrade) {
      statusOption = 'securable';
    } else if (options?.onlineOnly === false) {
      statusOption = 'any';
    }

    // For maps, we need to use the type filter with discriminator
    // Format: "MapName Map" (e.g., "Pit Map", "Beach Map")
    const mapType = maps.length === 1
      ? (maps[0].endsWith(' Map') ? maps[0] : `${maps[0]} Map`)
      : undefined;

    const searchRequest: SearchRequest = {
      query: {
        status: {
          option: statusOption,
        },
        // Use type with discriminator for maps (War for the Atlas)
        type: mapType
          ? {
              option: mapType,
              discriminator: 'warfortheatlas',
            } as any
          : undefined,
        term: maps.length > 1 ? maps.join(' ') : undefined,
        filters: {},
      },
    };

    // Add map-specific discriminator (for War for the Atlas maps)
    if (!searchRequest.query.filters) {
      searchRequest.query.filters = {};
    }

    // Add map tier filter
    if (options?.tier !== undefined) {
      if (!searchRequest.query.filters.map_filters) {
        searchRequest.query.filters.map_filters = {
          disabled: false,
          filters: {},
        };
      }
      searchRequest.query.filters.map_filters.filters!.map_tier = {
        min: options.tier,
        max: options.tier,
      };
    }

    // Add price filter
    if (options?.minPrice !== undefined || options?.maxPrice !== undefined) {
      if (!searchRequest.query.filters.trade_filters) {
        searchRequest.query.filters.trade_filters = {
          disabled: false,
          filters: {},
        };
      }
      searchRequest.query.filters.trade_filters.filters!.price = {
        min: options?.minPrice,
        max: options?.maxPrice,
        option: options?.currency,
      };
    }

    // Add sorting
    if (options?.sortByPrice) {
      searchRequest.sort = { price: 'asc' };
    }

    return searchRequest;
  }
}

// ============================================================================
// Convenience Functions
// ============================================================================

/**
 * Create a new POE Trade Client instance
 */
export function createTradeClient(config: TradeConfig): PoeTradeClient {
  return new PoeTradeClient(config);
}

/**
 * Detect the current active softcore league
 * Returns the first non-hardcore, non-ruthless, non-SSF league
 */
export async function detectCurrentLeague(
  poesessid: string,
  game: 'poe1' | 'poe2' = 'poe1'
): Promise<string> {
  const client = createTradeClient({
    poesessid,
    league: 'Standard', // Temporary, just to fetch leagues
    game,
  });

  const { result: leagues } = await client.getLeagues();

  // Filter for current league (not Standard, not Hardcore variants)
  const currentLeague = leagues.find(league => {
    const id = league.id.toLowerCase();
    const text = league.text.toLowerCase();

    // Exclude these patterns
    const excluded = [
      'standard',
      'hardcore',
      'ruthless',
      'ssf',
      'solo self-found',
    ];

    // Check if any excluded pattern is in the league name
    const isExcluded = excluded.some(pattern =>
      id.includes(pattern) || text.includes(pattern)
    );

    // We want the main current league (not standard, not variants)
    return !isExcluded;
  });

  if (!currentLeague) {
    console.warn('Could not detect current league, falling back to Standard');
    return 'Standard';
  }

  return currentLeague.id;
}

/**
 * Quick search helper
 */
export async function quickSearch(
  poesessid: string,
  league: string,
  itemName: string,
  options?: {
    onlineOnly?: boolean;
    minPrice?: number;
    maxPrice?: number;
    maxResults?: number;
  }
): Promise<FetchedItem[]> {
  const client = createTradeClient({ poesessid, league });
  const searchRequest = client.createSimpleSearch(itemName, options);
  const { items } = await client.searchAndFetch(searchRequest, options?.maxResults);
  return items;
}
