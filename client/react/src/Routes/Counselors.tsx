import React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
//import CardContainer from "../Components/CardContainer";
import "../scss/Counselors.scss";

import defaultImg from '../assets/csprofile_ex.png';
import { graphql, QueryRenderer } from "react-relay";
import environment from "../_lib/environment";
import { CounselorsQuery } from "./__generated__/CounselorsQuery.graphql";

export function Counselors(props: RouteComponentProps) {
  return (
    <QueryRenderer<CounselorsQuery>
      environment={environment}
      variables={{}}
      query={graphql`
        query CounselorsQuery {
          counselors: users(isCounselor: true) {
            edges {
              node {
                id
                email
                imgUri
                nickname
                bio
              }
            }
          }
        }
      `}
      render={({ props, error, retry }) => (
        <div className="container">
          <div className="filter"></div>
          <div className="card-container">
            {props?.counselors?.edges.map((edge) => edge && (
              <Link to={"/counselor/" + edge.node?.id}>
                <div className="cscard">
                  <img src={edge.node?.imgUri === "" ? defaultImg : edge.node?.imgUri} alt="" />

                  <div className="info">
                    <div className="p name">{edge.node?.nickname}</div>
                    <div className="p intro">{edge.node?.bio}</div>
                    <div className="p likes">14 soldier likes</div> {/* TODO */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    />
  );
}
