import { connect } from "react-redux";
import App from "./App";
import { fetchCategories } from "../../redux/modules/category.module";

export const mapDispatchToProps = {
  fetchCategories
};
export const mapStateToProps = state => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
