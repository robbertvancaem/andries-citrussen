import Loader from "../components/loader";
import PageWrapper from "../components/page-wrapper";

const Service = {
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
    loading: true
  }),
  render() {
    return (
      <PageWrapper>
        {this.loading && <Loader />}
        <p>Service</p>
      </PageWrapper>
    );
  }
};

export default Service;
