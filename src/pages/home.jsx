import Loader from "../components/loader";
import PageWrapper from "../components/page-wrapper";
import data from "../data/homepage";

const Home = {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      setTimeout(() => (vm.loading = false), 2000);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.loading = true;
    next();
  },
  data: () => ({
    title: data.title,
    loading: true
  }),
  render() {
    return (
      <PageWrapper title={this.title}>
        {this.loading && <Loader />}
        <p>Home</p>
      </PageWrapper>
    );
  }
};

export default Home;
