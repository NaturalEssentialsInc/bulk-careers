const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
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
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {


      const id = edge.node.id;

if  (edge.node.frontmatter.templateKey != null) {

  createPage({
    path: edge.node.fields.slug,
    component: path.resolve(
      `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    });
    
    
  }

  else {
    console.log("no template key found: " + edge.node.fields.slug);
  }
  
      });
  
    })};

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
