import * as React from "react"
import {type HeadFC, PageProps} from "gatsby"
import Header from "../components/Header";

interface Application {
  url: string
  logo: string
  title: string
}

interface TenantContext {
  name: string
  slug: string
  logo: string
  applications: Application[]
}

const TenantTemplate: React.FC<PageProps<object, TenantContext>> = ({ pageContext }) => {
  const { applications, logo } = pageContext

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
        <div className="mb-8 md:mb-12">
          <img src={`/logos/${logo}`} alt="Logo" className="max-h-40 w-auto object-contain" />
        </div>
        <div className="applications-container">
          {applications.map((app, index) => (
            <div key={index} className="application-card">
              {app.logo && (
                <div className="logo-container">
                  <img
                    src={`/logos/${app.logo}`}
                    alt={app.title}
                    className="max-h-32 w-auto object-contain w-full"
                  />
                </div>
              )}
              {(!app.logo && app.title) && (
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {app.title}
                </h1>
              )}
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cxfirst-btn"
              >
                Accéder au portail
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default TenantTemplate

export const Head: HeadFC<object, TenantContext> = ({ pageContext }) => {
  return (
    <title>{pageContext.name}</title>
  )
}