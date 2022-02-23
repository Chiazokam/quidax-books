import { Maybe, Enum_Books_Currency } from '../generated/graphql';

export const getCurrency = (currency: Maybe<Enum_Books_Currency> | undefined) => {
  return currency === 'USD' ? '$' : '₦'
}
