export const sliceText = (text: string, textLimit: number) => {
  return text.length > textLimit ? `${text.slice(0, textLimit)}...` : text
}
