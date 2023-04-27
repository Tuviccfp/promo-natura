import Menu from "./components/Header";
import Products from "./components/Products";
import flores from "../src/components/shared/flores/roses-576064.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Flowers = styled.div`
  display: flex;
  justify-content: space-between;

  .img-left {
    width: 20em;
    height: 100vh;
    @media (max-width: 768px) {
      position: fixed;
      right: 200px;
    }
  }

  .img-right {
    width: 20em;
    height: 100vh;
    @media (max-width: 768px) {
      position: fixed;
      left: 200px;
      overflow: hidden;
    }
  }
`
const Categories = styled.div`
  z-index: 4;
  position: relative;
  top: 300px;
  background-color: #e5b6ec;
  width: 20vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 768px) {
    left: 115px;
    width: 40vw;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    margin-left: -23px;
    display: inline;
    list-style-type: none;
  }
`;

function App() {
  return (
    <Container>
      <Menu />
      <Flowers>
        <img
          className="img-left"
          src={flores}
          alt="flores decorativas aos lados."
        />
        <Categories>
          <ul role="list" style={{ display: "flex", flexDirection: "column" }}>
            <Link
              style={{ textDecoration: "none", color: "#f5f5f5" }}
              to="/hidratantes"
            >
              <li
                style={{
                  marginLeft: "-23px",
                  display: "inline",
                  listStyleType: "none",
                }}
              >
                Hidratantes
              </li>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "#f5f5f5" }}
              to="/sabonetes"
            >
              <li
                style={{
                  marginLeft: "-23px",
                  display: "inline",
                  listStyleType: "none",
                }}
              >
                Sabonetes
              </li>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "#f5f5f5" }}
              to="/cosmeticos"
            >
              <li
                style={{
                  marginLeft: "-23px",
                  display: "inline",
                  listStyleType: "none",
                }}
              >
                Cosmeticos
              </li>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "#f5f5f5" }}
              to="/perfumes"
            >
              <li
                style={{
                  marginLeft: "-23px",
                  display: "inline",
                  listStyleType: "none",
                }}
              >
                Perfumes
              </li>
            </Link>
          </ul>
        </Categories>
        <img
          className="img-right"
          src={flores}
          alt="flores decorativas aos lados."
        />
      </Flowers>
    </Container>
  );
}

export default App;
