export interface YelpBusinesses {
    businesses: Business[];
    total: number;
    region: Region;
}

export interface Business {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories: Category[];
    rating: number;
    coordinates: Center;
    transactions: Transaction[];
    price?: Price;
    location: Location;
    phone: string;
    display_phone: string;
    distance: number;
}

export interface Category {
    alias: string;
    title: string;
}

export interface Center {
    latitude: number;
    longitude: number;
}

export interface Location {
    address1: string;
    address2: null | string;
    address3: null | string;
    city: string;
    zip_code: string;
    country: Country;
    state: State;
    display_address: string[];
}

export enum Country {
    Us = 'US',
}

export enum State {
    Ga = 'GA',
}

export enum Price {
    Empty = '$$',
    Price = '$',
    Purple = '$$$',
}

export enum Transaction {
    Delivery = 'delivery',
    Pickup = 'pickup',
}

export interface Region {
    center: Center;
}
