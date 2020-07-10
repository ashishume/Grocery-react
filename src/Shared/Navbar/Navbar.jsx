import React, {  Component } from "react";
import "./Navbar.css";
import { Menu, Dropdown } from "semantic-ui-react";
import { showCategory } from "../../store/actions/category";
import { connect } from "react-redux";
import history from "../../history";

class Navbar extends Component {
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  // }, [counter]);
  componentDidMount() {
    this.props.showCategory();
  }
  handleItemClick = (e, { name }) => {
    console.log(name);
    if (name === "category") history.push("/add-category");
    else if (name === "product") history.push("/add-product");
  };
  render() {
    return (
      <Menu secondary>
        <Dropdown text="More" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Dropdown text="Categories">
                <Dropdown.Menu>
                  {this.props.categories.map((value, i) => {
                    return <Dropdown.Item key={i}>{value.name}</Dropdown.Item>;
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item name="product" onClick={this.handleItemClick}>
          Add Product
        </Menu.Item>

        <Menu.Item name="category" onClick={this.handleItemClick}>
          Add Category
        </Menu.Item>
      </Menu>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.category.category,
  };
};
export default connect(mapStateToProps, { showCategory })(Navbar);
