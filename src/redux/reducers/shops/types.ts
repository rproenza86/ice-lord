export interface Shop {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories: Category[];
    rating: number;
    coordinates: Coordinates;
    transactions: string[];
    price: string;
    location: ShopDetailsLocation | Location;
    phone: string;
    display_phone: string;
    distance: number;
    reviews: Review[];
}

export interface Category {
    alias: string;
    title: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Location {
    address1: string;
    address2: null;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
}

export interface Review {
    id: string;
    url: string;
    text: string;
    rating: number;
    time_created: string;
    user: User;
}

export interface User {
    id: string;
    profile_url: string;
    image_url: string;
    name: string;
}

export interface ShopDetails {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_claimed: boolean;
    is_closed: boolean;
    url: string;
    phone: string;
    display_phone: string;
    review_count: number;
    categories: Category[];
    rating: number;
    location: ShopDetailsLocation;
    coordinates: Coordinates;
    photos: string[];
    price: string;
    hours: Hour[];
    transactions: string[];
}

export interface Category {
    alias: string;
    title: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Hour {
    open: Open[];
    hours_type: string;
    is_open_now: boolean;
}

export interface Open {
    is_overnight: boolean;
    start: string;
    end: string;
    day: number;
}

export interface ShopDetailsLocation {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
    cross_streets: string;
}

export interface ReviewsResponse {
    reviews: Review[];
    total: number;
    businessId: string;
    possible_languages: string[];
}

export interface Review {
    id: string;
    url: string;
    text: string;
    rating: number;
    time_created: string;
    user: User;
}

export interface User {
    id: string;
    profile_url: string;
    image_url: string;
    name: string;
}

// Merging Interfaces
export interface Shop {
    reviews: Review[];
    total: number;
    businessId: string;
    possible_languages: string[];
}
export interface Shop {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_claimed: boolean;
    is_closed: boolean;
    url: string;
    phone: string;
    display_phone: string;
    review_count: number;
    categories: Category[];
    rating: number;
    location: ShopDetailsLocation | Location;
    coordinates: Coordinates;
    photos: string[];
    price: string;
    hours: Hour[];
    transactions: string[];
}

export type ShopsState = Shop[];
