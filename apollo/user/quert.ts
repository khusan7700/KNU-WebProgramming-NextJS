import { gql } from "@apollo/client";

/******************************
 *          PROPERT           *
 *****************************/

export const GET_PROPERTIES = gql`
  query GetProperties($input: PropertiesInquiry!) {
    getProperties(input: $input) {
      list {
        _id
        propertyType
        propertyStatus
        propertyLocation
        propertyAddress
        propertyTitle
        propertyPrice
        propertySquare
        propertyBeds
        propertyRooms
        propertyViews
        propertyLikes
        propertyComments
        propertyRank
        propertyImages
        propertyDesc
        propertyBarter
        propertyRent
        memberId
        soldAt
        deletedAt
        constructedAt
        createdAt
        updatedAt
        meLiked {
          memberId
          likeRefId
          myFavorite
        }
      }
      metaCounter {
        total
      }
    }
  }
`;

/******************************
 *          ARTICLE           *
 *****************************/
