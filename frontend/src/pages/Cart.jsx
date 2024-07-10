import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart (2)</TopText>
            <TopText>Your Wishlist (1)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cdn.shopify.com/s/files/1/0037/0658/5123/products/1_aa7d9520-a44d-4a15-9147-63cecf796e45_250x250@2x.jpg?v=1602342993" />
                <Details>
                  <ProductName>
                    <b>Product:</b>ORIGINAL SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93658542
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product:</b>ORIGINAL T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93658452
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
