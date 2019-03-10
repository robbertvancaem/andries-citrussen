import PageWrapper from "../components/page-wrapper";
import data from "../data/homepage";

const Home = {
  data: () => ({
    title: data.title
  }),
  render() {
    return (
      <PageWrapper title={this.title}>
        <p>Home</p>
      </PageWrapper>
    );
  }
};

export default Home;
