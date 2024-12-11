import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/quert";
import Events from "@/libs/components/homepage/Events";
import TopPropertyCard from "@/libs/components/homepage/TopPropertyCard";

const Home: NextPage = () => {
  const device = useDeviceDetect();

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getrPropertiesError,
    refetch: getPropertiesRefrech,
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: 1,
        limit: 5,
        sort: "createdAt",
        direction: "DESC",
        search: {},
      },
    },
  });

  console.log("getPropertiesDate =>", getPropertiesData);

  if (device === "mobile") {
    return <Stack>HOMEPAGE MOBILE</Stack>;
  } else {
    return (
      <Stack className={"home-page"}>
        <Advertisement />
        {/* <Events /> */}
        <TopPropertyCard />
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
