export interface Comics {
    id:                 number;
    digitalId:          number;
    title:              string;
    issueNumber:        number;
    variantDescription: string;
    description:        string;
    modified:           string;
    isbn:               string;
    upc:                string;
    diamondCode:        string;
    ean:                string;
    issn:               string;
    format:             string;
    pageCount:          number;
    textObjects:        TextObject[];
    resourceURI:        string;
    urls:               URL[];
    series:             Series;
    variants:           Series[];
    collections:        any[];
    collectedIssues:    any[];
    dates:              DateElement[];
    prices:             Price[];
    thumbnail:          Thumbnail;
    images:             Thumbnail[];
    creators:           Creators;
    characters:         Characters;
    stories:            Stories;
    events:             Characters;
}

export interface Series {
    id:          number;
    title:       string;
    description: null;
    resourceURI: string;
    urls:        URL[];
    startYear:   number;
    endYear:     number;
    rating:      string;
    type:        string;
    modified:    string;
    thumbnail:   Thumbnail;
    creators:    Creators;
    characters:  Characters;
    stories:     Stories;
    comics:      Characters;
    events:      Characters;
    next:        null;
    previous:    null;
}

export interface Stories {
    id:            number;
    title:         string;
    description:   string;
    resourceURI:   string;
    type:          string;
    modified:      string;
    thumbnail:     null;
    creators:      Creators;
    characters:    Characters;
    series:        Characters;
    comics:        Characters;
    events:        Characters;
    originalIssue: OriginalIssue;
}

export interface Events {
    id:          number;
    title:       string;
    description: string;
    resourceURI: string;
    urls:        URL[];
    modified:    string;
    start:       Date;
    end:         Date;
    thumbnail:   Thumbnail;
    creators:    Creators;
    characters:  Characters;
    stories:     Stories;
    comics:      Characters;
    series:      Characters;
    next:        Next;
    previous:    Next;
}


export interface Characters {
    available:     number;
    collectionURI: string;
    items:         Series[];
    returned:      number;
}

export interface Series {
    resourceURI: string;
    name:        string;
}

export interface Creators {
    available:     number;
    collectionURI: string;
    items:         CreatorsItem[];
    returned:      number;
}

export interface CreatorsItem {
    resourceURI: string;
    name:        string;
    role:        string;
}

export interface DateElement {
    type: string;
    date: string;
}

export interface Next {
    resourceURI: string;
    name:        string;
}

export interface OriginalIssue {
    resourceURI: string;
    name:        string;
}

export interface Price {
    type:  string;
    price: number;
}

export interface Stories {
    available:     number;
    collectionURI: string;
    items:         StoriesItem[];
    returned:      number;
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        string;
}

export interface TextObject {
    type:     string;
    language: string;
    text:     string;
}

export interface Thumbnail {
    path:      string;
    extension: string;
}

export interface URL {
    type: string;
    url:  string;
}