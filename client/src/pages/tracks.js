import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const TRACKS = gql`
  query FirstQuery {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      moduleCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data: track } = useQuery(TRACKS);

  //console.log(track);

  if (loading) return "LOADING....";

  if (error) return `ERROR ${error.message}`;
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={track}>
        {track.tracksForHome.map((track, index) => (
          <TrackCard track={track} key={index} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
