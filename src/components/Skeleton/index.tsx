import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="27" y="1" rx="0" ry="0" width="180" height="297" /> 
  </ContentLoader>
)

export default MyLoader
