import path from "path"
import { GatsbyNode } from "gatsby"
import tenantsData from "./src/data/tenants.json"

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions
  const tenantTemplate = path.resolve(`src/templates/tenant.tsx`)

  tenantsData.tenants.forEach((tenant) => {
    createPage({
      path: `/${tenant.slug}`,
      component: tenantTemplate,
      context: {
        name: tenant.name,
        slug: tenant.slug,
        logo: tenant.logo,
        applications: tenant.applications,
      },
    })
  })
}
