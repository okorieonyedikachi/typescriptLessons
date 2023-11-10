import Header from "../Components/Header"
import { useQuery } from "@apollo/client"
import { LOAD_EPISODES } from "../Graphql/Queries";
import EpisodeBody from "../Components/EpisodeBody";
import Footer from "../Components/Footer";

const Episodes = () => {
  const {data } = useQuery(LOAD_EPISODES);
  if (!data) {
    return null
  }
  const episodeData = data?.episodes?.results; 
  console.log(episodeData);
  
  return (
    <>
      <Header />
      <EpisodeBody data={episodeData} isHomescreen={false} />
      <Footer />
    </>
  );
}

export default Episodes