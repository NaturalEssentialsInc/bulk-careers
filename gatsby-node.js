const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const fs = require('fs');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()));
    return Promise.reject(result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((edge) => {
    const { slug } = edge.node.fields;
    const { templateKey } = edge.node.frontmatter;
    const componentPath = path.resolve(`src/templates/${templateKey}.jsx`);

    if (fs.existsSync(componentPath)) {
      createPage({
        path: slug,
        component: componentPath,
        context: {
          id: edge.node.id,
        },
      });
    } else {
      console.error(`Component file not found: ${componentPath}`);
    }
  });
};
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
