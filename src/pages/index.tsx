import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import logo from "../images/logo.svg"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <img src={logo} alt="Logo" className="max-h-40 w-auto object-contain" />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Accueil</title>
