import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  books?: Maybe<Array<Maybe<Books>>>;
  created_at: Scalars['DateTime'];
  history?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  rating?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
};


export type AuthorBooksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type AuthorAggregator = {
  __typename?: 'AuthorAggregator';
  avg?: Maybe<AuthorAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<AuthorAggregatorMax>;
  min?: Maybe<AuthorAggregatorMin>;
  sum?: Maybe<AuthorAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AuthorAggregatorAvg = {
  __typename?: 'AuthorAggregatorAvg';
  rating?: Maybe<Scalars['Float']>;
};

export type AuthorAggregatorMax = {
  __typename?: 'AuthorAggregatorMax';
  rating?: Maybe<Scalars['Float']>;
};

export type AuthorAggregatorMin = {
  __typename?: 'AuthorAggregatorMin';
  rating?: Maybe<Scalars['Float']>;
};

export type AuthorAggregatorSum = {
  __typename?: 'AuthorAggregatorSum';
  rating?: Maybe<Scalars['Float']>;
};

export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  aggregate?: Maybe<AuthorAggregator>;
  groupBy?: Maybe<AuthorGroupBy>;
  values?: Maybe<Array<Maybe<Author>>>;
};

export type AuthorConnectionCreated_At = {
  __typename?: 'AuthorConnectionCreated_at';
  connection?: Maybe<AuthorConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AuthorConnectionHistory = {
  __typename?: 'AuthorConnectionHistory';
  connection?: Maybe<AuthorConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AuthorConnectionId = {
  __typename?: 'AuthorConnectionId';
  connection?: Maybe<AuthorConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AuthorConnectionName = {
  __typename?: 'AuthorConnectionName';
  connection?: Maybe<AuthorConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AuthorConnectionPublished_At = {
  __typename?: 'AuthorConnectionPublished_at';
  connection?: Maybe<AuthorConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AuthorConnectionRating = {
  __typename?: 'AuthorConnectionRating';
  connection?: Maybe<AuthorConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type AuthorConnectionUpdated_At = {
  __typename?: 'AuthorConnectionUpdated_at';
  connection?: Maybe<AuthorConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AuthorGroupBy = {
  __typename?: 'AuthorGroupBy';
  created_at?: Maybe<Array<Maybe<AuthorConnectionCreated_At>>>;
  history?: Maybe<Array<Maybe<AuthorConnectionHistory>>>;
  id?: Maybe<Array<Maybe<AuthorConnectionId>>>;
  name?: Maybe<Array<Maybe<AuthorConnectionName>>>;
  published_at?: Maybe<Array<Maybe<AuthorConnectionPublished_At>>>;
  rating?: Maybe<Array<Maybe<AuthorConnectionRating>>>;
  updated_at?: Maybe<Array<Maybe<AuthorConnectionUpdated_At>>>;
};

export type AuthorInput = {
  books?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  history?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type BookInput = {
  authors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  available_copies?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  currency?: InputMaybe<Enum_Books_Currency>;
  featured?: InputMaybe<Scalars['Boolean']>;
  full_description?: InputMaybe<Scalars['String']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image_url?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<Scalars['Int']>;
  number_of_purchases?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  publisher?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  release_date?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Books = {
  __typename?: 'Books';
  authors?: Maybe<Array<Maybe<Author>>>;
  available_copies?: Maybe<Scalars['Int']>;
  created_at: Scalars['DateTime'];
  currency?: Maybe<Enum_Books_Currency>;
  featured?: Maybe<Scalars['Boolean']>;
  full_description?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID'];
  image_url?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  number_of_purchases?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  published_at?: Maybe<Scalars['DateTime']>;
  publisher?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  release_date?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};


export type BooksAuthorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type BooksGenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type BooksTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type BooksAggregator = {
  __typename?: 'BooksAggregator';
  avg?: Maybe<BooksAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<BooksAggregatorMax>;
  min?: Maybe<BooksAggregatorMin>;
  sum?: Maybe<BooksAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BooksAggregatorAvg = {
  __typename?: 'BooksAggregatorAvg';
  available_copies?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  number_of_purchases?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type BooksAggregatorMax = {
  __typename?: 'BooksAggregatorMax';
  available_copies?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  number_of_purchases?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type BooksAggregatorMin = {
  __typename?: 'BooksAggregatorMin';
  available_copies?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  number_of_purchases?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type BooksAggregatorSum = {
  __typename?: 'BooksAggregatorSum';
  available_copies?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  number_of_purchases?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type BooksConnection = {
  __typename?: 'BooksConnection';
  aggregate?: Maybe<BooksAggregator>;
  groupBy?: Maybe<BooksGroupBy>;
  values?: Maybe<Array<Maybe<Books>>>;
};

export type BooksConnectionAvailable_Copies = {
  __typename?: 'BooksConnectionAvailable_copies';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type BooksConnectionCreated_At = {
  __typename?: 'BooksConnectionCreated_at';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BooksConnectionCurrency = {
  __typename?: 'BooksConnectionCurrency';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BooksConnectionFeatured = {
  __typename?: 'BooksConnectionFeatured';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type BooksConnectionFull_Description = {
  __typename?: 'BooksConnectionFull_description';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BooksConnectionId = {
  __typename?: 'BooksConnectionId';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BooksConnectionImage_Url = {
  __typename?: 'BooksConnectionImage_url';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BooksConnectionLikes = {
  __typename?: 'BooksConnectionLikes';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type BooksConnectionNumber_Of_Purchases = {
  __typename?: 'BooksConnectionNumber_of_purchases';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type BooksConnectionPrice = {
  __typename?: 'BooksConnectionPrice';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type BooksConnectionPublished_At = {
  __typename?: 'BooksConnectionPublished_at';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BooksConnectionPublisher = {
  __typename?: 'BooksConnectionPublisher';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BooksConnectionRating = {
  __typename?: 'BooksConnectionRating';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type BooksConnectionRelease_Date = {
  __typename?: 'BooksConnectionRelease_date';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BooksConnectionSubtitle = {
  __typename?: 'BooksConnectionSubtitle';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BooksConnectionTitle = {
  __typename?: 'BooksConnectionTitle';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BooksConnectionUpdated_At = {
  __typename?: 'BooksConnectionUpdated_at';
  connection?: Maybe<BooksConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BooksGroupBy = {
  __typename?: 'BooksGroupBy';
  available_copies?: Maybe<Array<Maybe<BooksConnectionAvailable_Copies>>>;
  created_at?: Maybe<Array<Maybe<BooksConnectionCreated_At>>>;
  currency?: Maybe<Array<Maybe<BooksConnectionCurrency>>>;
  featured?: Maybe<Array<Maybe<BooksConnectionFeatured>>>;
  full_description?: Maybe<Array<Maybe<BooksConnectionFull_Description>>>;
  id?: Maybe<Array<Maybe<BooksConnectionId>>>;
  image_url?: Maybe<Array<Maybe<BooksConnectionImage_Url>>>;
  likes?: Maybe<Array<Maybe<BooksConnectionLikes>>>;
  number_of_purchases?: Maybe<Array<Maybe<BooksConnectionNumber_Of_Purchases>>>;
  price?: Maybe<Array<Maybe<BooksConnectionPrice>>>;
  published_at?: Maybe<Array<Maybe<BooksConnectionPublished_At>>>;
  publisher?: Maybe<Array<Maybe<BooksConnectionPublisher>>>;
  rating?: Maybe<Array<Maybe<BooksConnectionRating>>>;
  release_date?: Maybe<Array<Maybe<BooksConnectionRelease_Date>>>;
  subtitle?: Maybe<Array<Maybe<BooksConnectionSubtitle>>>;
  title?: Maybe<Array<Maybe<BooksConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<BooksConnectionUpdated_At>>>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum Enum_Books_Currency {
  Ngn = 'NGN',
  Usd = 'USD'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Genre = {
  __typename?: 'Genre';
  books?: Maybe<Array<Maybe<Books>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type GenreBooksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type GenreAggregator = {
  __typename?: 'GenreAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GenreConnection = {
  __typename?: 'GenreConnection';
  aggregate?: Maybe<GenreAggregator>;
  groupBy?: Maybe<GenreGroupBy>;
  values?: Maybe<Array<Maybe<Genre>>>;
};

export type GenreConnectionCreated_At = {
  __typename?: 'GenreConnectionCreated_at';
  connection?: Maybe<GenreConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GenreConnectionId = {
  __typename?: 'GenreConnectionId';
  connection?: Maybe<GenreConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GenreConnectionName = {
  __typename?: 'GenreConnectionName';
  connection?: Maybe<GenreConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GenreConnectionPublished_At = {
  __typename?: 'GenreConnectionPublished_at';
  connection?: Maybe<GenreConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GenreConnectionUpdated_At = {
  __typename?: 'GenreConnectionUpdated_at';
  connection?: Maybe<GenreConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GenreGroupBy = {
  __typename?: 'GenreGroupBy';
  created_at?: Maybe<Array<Maybe<GenreConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<GenreConnectionId>>>;
  name?: Maybe<Array<Maybe<GenreConnectionName>>>;
  published_at?: Maybe<Array<Maybe<GenreConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<GenreConnectionUpdated_At>>>;
};

export type GenreInput = {
  books?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type Morph = Author | AuthorAggregator | AuthorAggregatorAvg | AuthorAggregatorMax | AuthorAggregatorMin | AuthorAggregatorSum | AuthorConnection | AuthorConnectionCreated_At | AuthorConnectionHistory | AuthorConnectionId | AuthorConnectionName | AuthorConnectionPublished_At | AuthorConnectionRating | AuthorConnectionUpdated_At | AuthorGroupBy | Books | BooksAggregator | BooksAggregatorAvg | BooksAggregatorMax | BooksAggregatorMin | BooksAggregatorSum | BooksConnection | BooksConnectionAvailable_Copies | BooksConnectionCreated_At | BooksConnectionCurrency | BooksConnectionFeatured | BooksConnectionFull_Description | BooksConnectionId | BooksConnectionImage_Url | BooksConnectionLikes | BooksConnectionNumber_Of_Purchases | BooksConnectionPrice | BooksConnectionPublished_At | BooksConnectionPublisher | BooksConnectionRating | BooksConnectionRelease_Date | BooksConnectionSubtitle | BooksConnectionTitle | BooksConnectionUpdated_At | BooksGroupBy | Genre | GenreAggregator | GenreConnection | GenreConnectionCreated_At | GenreConnectionId | GenreConnectionName | GenreConnectionPublished_At | GenreConnectionUpdated_At | GenreGroupBy | Tag | TagAggregator | TagConnection | TagConnectionCreated_At | TagConnectionId | TagConnectionName | TagConnectionPublished_At | TagConnectionUpdated_At | TagGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateAuthorPayload | CreateBookPayload | CreateGenrePayload | CreateRolePayload | CreateTagPayload | CreateUserPayload | DeleteAuthorPayload | DeleteBookPayload | DeleteFilePayload | DeleteGenrePayload | DeleteRolePayload | DeleteTagPayload | DeleteUserPayload | UpdateAuthorPayload | UpdateBookPayload | UpdateGenrePayload | UpdateRolePayload | UpdateTagPayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<CreateAuthorPayload>;
  createBook?: Maybe<CreateBookPayload>;
  createGenre?: Maybe<CreateGenrePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTag?: Maybe<CreateTagPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteAuthor?: Maybe<DeleteAuthorPayload>;
  deleteBook?: Maybe<DeleteBookPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGenre?: Maybe<DeleteGenrePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAuthor?: Maybe<UpdateAuthorPayload>;
  updateBook?: Maybe<UpdateBookPayload>;
  updateFileInfo: UploadFile;
  updateGenre?: Maybe<UpdateGenrePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateAuthorArgs = {
  input?: InputMaybe<CreateAuthorInput>;
};


export type MutationCreateBookArgs = {
  input?: InputMaybe<CreateBookInput>;
};


export type MutationCreateGenreArgs = {
  input?: InputMaybe<CreateGenreInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateTagArgs = {
  input?: InputMaybe<CreateTagInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteAuthorArgs = {
  input?: InputMaybe<DeleteAuthorInput>;
};


export type MutationDeleteBookArgs = {
  input?: InputMaybe<DeleteBookInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteGenreArgs = {
  input?: InputMaybe<DeleteGenreInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteTagArgs = {
  input?: InputMaybe<DeleteTagInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAuthorArgs = {
  input?: InputMaybe<UpdateAuthorInput>;
};


export type MutationUpdateBookArgs = {
  input?: InputMaybe<UpdateBookInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateGenreArgs = {
  input?: InputMaybe<UpdateGenreInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateTagArgs = {
  input?: InputMaybe<UpdateTagInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  authorsConnection?: Maybe<AuthorConnection>;
  book?: Maybe<Books>;
  books?: Maybe<Array<Maybe<Books>>>;
  booksConnection?: Maybe<BooksConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  genre?: Maybe<Genre>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  genresConnection?: Maybe<GenreConnection>;
  me?: Maybe<UsersPermissionsMe>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsConnection?: Maybe<TagConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAuthorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAuthorsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBooksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBooksConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGenreArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGenresConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Tag = {
  __typename?: 'Tag';
  books?: Maybe<Array<Maybe<Books>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type TagBooksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type TagAggregator = {
  __typename?: 'TagAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  aggregate?: Maybe<TagAggregator>;
  groupBy?: Maybe<TagGroupBy>;
  values?: Maybe<Array<Maybe<Tag>>>;
};

export type TagConnectionCreated_At = {
  __typename?: 'TagConnectionCreated_at';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagConnectionId = {
  __typename?: 'TagConnectionId';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagConnectionName = {
  __typename?: 'TagConnectionName';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagConnectionPublished_At = {
  __typename?: 'TagConnectionPublished_at';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagConnectionUpdated_At = {
  __typename?: 'TagConnectionUpdated_at';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  created_at?: Maybe<Array<Maybe<TagConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagConnectionId>>>;
  name?: Maybe<Array<Maybe<TagConnectionName>>>;
  published_at?: Maybe<Array<Maybe<TagConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<TagConnectionUpdated_At>>>;
};

export type TagInput = {
  books?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateAuthorInput = {
  data?: InputMaybe<AuthorInput>;
};

export type CreateAuthorPayload = {
  __typename?: 'createAuthorPayload';
  author?: Maybe<Author>;
};

export type CreateBookInput = {
  data?: InputMaybe<BookInput>;
};

export type CreateBookPayload = {
  __typename?: 'createBookPayload';
  book?: Maybe<Books>;
};

export type CreateGenreInput = {
  data?: InputMaybe<GenreInput>;
};

export type CreateGenrePayload = {
  __typename?: 'createGenrePayload';
  genre?: Maybe<Genre>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTagInput = {
  data?: InputMaybe<TagInput>;
};

export type CreateTagPayload = {
  __typename?: 'createTagPayload';
  tag?: Maybe<Tag>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAuthorInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAuthorPayload = {
  __typename?: 'deleteAuthorPayload';
  author?: Maybe<Author>;
};

export type DeleteBookInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteBookPayload = {
  __typename?: 'deleteBookPayload';
  book?: Maybe<Books>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGenreInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteGenrePayload = {
  __typename?: 'deleteGenrePayload';
  genre?: Maybe<Genre>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTagInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  tag?: Maybe<Tag>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditAuthorInput = {
  books?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  history?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditBookInput = {
  authors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  available_copies?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  currency?: InputMaybe<Enum_Books_Currency>;
  featured?: InputMaybe<Scalars['Boolean']>;
  full_description?: InputMaybe<Scalars['String']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image_url?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<Scalars['Int']>;
  number_of_purchases?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  publisher?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  release_date?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditGenreInput = {
  books?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditTagInput = {
  books?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateAuthorInput = {
  data?: InputMaybe<EditAuthorInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAuthorPayload = {
  __typename?: 'updateAuthorPayload';
  author?: Maybe<Author>;
};

export type UpdateBookInput = {
  data?: InputMaybe<EditBookInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateBookPayload = {
  __typename?: 'updateBookPayload';
  book?: Maybe<Books>;
};

export type UpdateGenreInput = {
  data?: InputMaybe<EditGenreInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateGenrePayload = {
  __typename?: 'updateGenrePayload';
  genre?: Maybe<Genre>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTagInput = {
  data?: InputMaybe<EditTagInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagPayload = {
  __typename?: 'updateTagPayload';
  tag?: Maybe<Tag>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type FeaturedBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Books', id: string, title?: string | null, publisher?: string | null, release_date?: any | null, number_of_purchases?: number | null, likes?: number | null, rating?: number | null, price?: number | null, currency?: Enum_Books_Currency | null, available_copies?: number | null, featured?: boolean | null, image_url?: string | null, published_at?: any | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name?: string | null } | null> | null, authors?: Array<{ __typename?: 'Author', id: string, name?: string | null } | null> | null } | null> | null };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Books', id: string, title?: string | null, subtitle?: string | null, publisher?: string | null, release_date?: any | null, number_of_purchases?: number | null, likes?: number | null, rating?: number | null, price?: number | null, currency?: Enum_Books_Currency | null, available_copies?: number | null, full_description?: string | null, image_url?: string | null, published_at?: any | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name?: string | null } | null> | null, authors?: Array<{ __typename?: 'Author', id: string, name?: string | null } | null> | null } | null> | null };

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = { __typename?: 'Query', book?: { __typename?: 'Books', id: string, created_at: any, updated_at: any, title?: string | null, subtitle?: string | null, publisher?: string | null, release_date?: any | null, number_of_purchases?: number | null, likes?: number | null, rating?: number | null, price?: number | null, currency?: Enum_Books_Currency | null, available_copies?: number | null, full_description?: string | null, featured?: boolean | null, image_url?: string | null, published_at?: any | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name?: string | null } | null> | null, authors?: Array<{ __typename?: 'Author', id: string, name?: string | null } | null> | null } | null };

export type SearchBooksQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
}>;


export type SearchBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Books', id: string, created_at: any, updated_at: any, title?: string | null, subtitle?: string | null, publisher?: string | null, release_date?: any | null, number_of_purchases?: number | null, likes?: number | null, rating?: number | null, price?: number | null, currency?: Enum_Books_Currency | null, available_copies?: number | null, full_description?: string | null, featured?: boolean | null, image_url?: string | null, published_at?: any | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name?: string | null } | null> | null, authors?: Array<{ __typename?: 'Author', id: string, name?: string | null } | null> | null } | null> | null };


export const FeaturedBooksDocument = gql`
    query FeaturedBooks {
  books(where: {featured: true}) {
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

/**
 * __useFeaturedBooksQuery__
 *
 * To run a query within a React component, call `useFeaturedBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeaturedBooksQuery(baseOptions?: Apollo.QueryHookOptions<FeaturedBooksQuery, FeaturedBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeaturedBooksQuery, FeaturedBooksQueryVariables>(FeaturedBooksDocument, options);
      }
export function useFeaturedBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturedBooksQuery, FeaturedBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeaturedBooksQuery, FeaturedBooksQueryVariables>(FeaturedBooksDocument, options);
        }
export type FeaturedBooksQueryHookResult = ReturnType<typeof useFeaturedBooksQuery>;
export type FeaturedBooksLazyQueryHookResult = ReturnType<typeof useFeaturedBooksLazyQuery>;
export type FeaturedBooksQueryResult = Apollo.QueryResult<FeaturedBooksQuery, FeaturedBooksQueryVariables>;
export const BooksDocument = gql`
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

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const BookDocument = gql`
    query Book($id: ID!) {
  book(id: $id) {
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

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, options);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const SearchBooksDocument = gql`
    query SearchBooks($search: String) {
  books(where: {title: $search}) {
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
    tags(where: {name: $search}) {
      id
      name
    }
    genres(where: {name: $search}) {
      id
      name
    }
    authors(where: {name: $search}) {
      id
      name
    }
  }
}
    `;

/**
 * __useSearchBooksQuery__
 *
 * To run a query within a React component, call `useSearchBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBooksQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchBooksQuery(baseOptions?: Apollo.QueryHookOptions<SearchBooksQuery, SearchBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchBooksQuery, SearchBooksQueryVariables>(SearchBooksDocument, options);
      }
export function useSearchBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchBooksQuery, SearchBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchBooksQuery, SearchBooksQueryVariables>(SearchBooksDocument, options);
        }
export type SearchBooksQueryHookResult = ReturnType<typeof useSearchBooksQuery>;
export type SearchBooksLazyQueryHookResult = ReturnType<typeof useSearchBooksLazyQuery>;
export type SearchBooksQueryResult = Apollo.QueryResult<SearchBooksQuery, SearchBooksQueryVariables>;