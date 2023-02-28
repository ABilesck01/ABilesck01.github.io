import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ProjectPage = ({ data }) => {

  const [value, setValue] = React.useState('All');
  const [list, setList] = React.useState(data.allMdx.nodes);

  const handleChange = (event) => {

    setValue(event.target.value);

    if (event.target.value === 'All') {
      setList(data.allMdx.nodes);
    }
    else {
      setList(data.allMdx.nodes.filter(x =>
        x.frontmatter.category === event.target.value
      ));
    }

  };

  return (
    <Layout pageTitle="My projects">
      <p>Here are all my projects! I hope you like it</p>

      <p>
        <label>Filter: </label>
        <select value={value} onChange={handleChange}>

          <option value="All">All</option>

          <option value="Game">Game</option>

          <option value="3d print">3d print</option>

        </select>
      </p>

      {list.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/projects/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <b>Category: {node.frontmatter.category}</b>
          <p>{node.excerpt}</p>
        </article>
      ))}

    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {tag: {eq: "project"}}}
    ) {
      nodes {
        frontmatter {
          title
          category
          slug
        }
        id
        excerpt(pruneLength: 60)
      }
    }
  }
`

export const Head = () => <Seo title="My projects" />

export default ProjectPage