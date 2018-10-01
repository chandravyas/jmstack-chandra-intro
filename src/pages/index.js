import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>Hi people</h2>
    <p>This is Chandra.I currently work as a Software Engineer for Salesforce. I love learning new things and like to solve problems.</p>
    <p>I wanted to take this opportunity to attend the hackathon and learn new things and meet new people.</p>
    <p>I am passionate traveller, love listing to music and good at playing chess.</p>
    <Link to="/page-2/">More about me</Link>
  </Layout>
)

export default IndexPage
