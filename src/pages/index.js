import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import linkedinIcon from '../images/linkedin.png';
import emailIcon from '../images/mail.png';
import githubIcon from '../images/github.png';
import {
  card,
  profile,
  about_container,
  socialIcon,
  about_name,
  about_title,
  socialItem
} from '../components/layout.module.css'

const IndexPage = ({ data }) => {

  const mdx = data.mdx
  const frontmatter = data.mdx.frontmatter
  const image = getImage(data.mdx.frontmatter.hero_image)
  const mailTo = 'mailto:' + frontmatter.email

  console.log(frontmatter.email);

  return (
    <Layout pageTitle="About Me">
      <div className={card}>
        {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}

        <GatsbyImage imgClassName={profile} image={image} alt="me" />

        <div className={about_container}>
          <h2 className={about_name}>{frontmatter.name}</h2>
          <p className={about_title}>{frontmatter.role}</p>
          <p>{frontmatter.shortDescription}</p>
          <p className={socialItem}>
            <img src={emailIcon} className={socialIcon} />
            <Link to={mailTo} target="_blank">{frontmatter.email}</Link>
          </p>
          <p className={socialItem}>
            <img src={linkedinIcon} className={socialIcon} />
            <Link to={frontmatter.linkedin} target="_blank">
              Linkedin
            </Link>
          </p>
          <p className={socialItem}>
            <img src={githubIcon} className={socialIcon} />
            <Link to={frontmatter.github}>
              Github
            </Link>
          </p>
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    mdx(frontmatter: {tag: {eq: "about"}}) {
      body
      excerpt
      frontmatter {
        slug
        tag
        linkedin
        name
        shortDescription
        github
        hero_image_credit_link
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 230, height: 230)
          }
        }
        email
        hero_image_alt
        role
      }
    }
  }
`

export const Head = () => <Seo title="Home Page" />

export default IndexPage