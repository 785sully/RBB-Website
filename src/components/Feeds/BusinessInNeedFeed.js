import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Box } from '@chakra-ui/core';

const SupportingOrgs = data => {
  return <Box as="pre">{JSON.stringify(data, null, 2)}</Box>;
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allAirtableBizInNeed {
          nodes {
            data {
              Category
              CreatedAt
              Donation_Website
              Email
              Impacted_Business_Name
              Name
            }
          }
        }
      }
    `}
    render={data => <SupportingOrgs data={data} {...props} />}
  />
);
