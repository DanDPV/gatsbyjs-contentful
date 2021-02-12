import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import PostCard from '../components/PostCard';

import MainLayout from '../components/layouts/MainLayout';

import '../static/styles/styles.scss';

type QueryDataType = {
  allContentfulBlogPost: {
    edges: {
      node: {
        title: string;
        header: string;
        slug: string;
        publishedDate: string;
      };
    }[];
  };
};

export default function Home() {
  const data = useStaticQuery<QueryDataType>(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            header
            slug
            publishedDate(formatString: "MMMM Do. YYYY")
          }
        }
      }
    }
  `);
  const { allContentfulBlogPost } = data;
  return (
    <MainLayout>
      <div className="my-20">
        <h1 className="text-3xl font-serif text-center">Post Menu</h1>
        <div className="my-6 flex flex-wrap justify-center">
          {allContentfulBlogPost.edges.map((edge) => (
            <Link to={`/post/${edge.node.slug}`} key={edge.node.slug}>
              <PostCard title={edge.node.title} date={edge.node.publishedDate} header={edge.node.header} />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
