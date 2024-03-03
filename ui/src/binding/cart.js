import { connect } from 'react-redux';
import Home from '../page/Home';
import { addToCart, moveTocart } from '../redux/product';

const mapStateToProps = (state) => ({
    cart: state.cart.products,
    total:state.cart.total
});
const mapDispatchToProps = {
    addToCart,
    moveTocart,
};
console.log(addToCart);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
