import { gql } from '@apollo/client';

export const QUERY_FEATURED_BOOKS = gql`
  query FeaturedBooks {
    books (
      where: {
        featured: true
      }) {
      id
      title
      publisher
      release_date
      number_of_purchases
      likes
      rating
      price
      currency
      available_copies
      featured
      image_url
      published_at
      tags {
        id
        name
      }
      genres {
        id
        name
      }
      authors {
        id
        name
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query Books {
    books {
      id
      title
      subtitle
      publisher
      release_date
      number_of_purchases
      likes
      rating
      price
      currency
      available_copies
      full_description
      image_url
      published_at
      tags {
        id
        name
      }
      genres {
        id
        name
      }
      authors {
        id
        name
      }
    }
  }
`;

export const QUERY_BOOK = gql`
query Book($id: ID!) {
  book (id: $id) {
    id
    created_at
    updated_at
    title
    subtitle
    publisher
    release_date
    number_of_purchases
    likes
    rating
    price
    currency
    available_copies
    full_description
    featured
    image_url
    published_at
    tags {
      id
      name
    }
    genres {
      id
      name
    }
    authors {
      id
      name
    }
  }
}
`;

export const SEARCH_BOOKS = gql`
query SearchBooks(
  $search: String,
) {
  books (where: {
    _or: [
      {
        title: $search
      },
      {
        _or: {
          authors: { name: $search }
        }
      },
      {
        _or: {
          genres: { name: $search }
        }
      },
      {
        _or: {
          tags: { name: $search }
        }
      }
    ]
  }) {
    id
    created_at
    updated_at
    title
    subtitle
    publisher
    release_date
    number_of_purchases
    likes
    rating
    price
    currency
    available_copies
    full_description
    featured
    image_url
    published_at
    authors {
      name
    }
    genres {
      name
    }
    tags {
      name
    }
  }
}
`;
