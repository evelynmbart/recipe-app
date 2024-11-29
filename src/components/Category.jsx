import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export function Category() {
  return (
    <List>
      <div>
        <NavLink to="/cuisine/Italian">
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to="/cuisine/American">
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to="/cuisine/Thai">
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to="/cuisine/Japanese">
          <GiChopsticks />
          <h4>Japanese</h4>
        </NavLink>
      </div>
    </List>
  );
}

const List = styled.div`
  display: flex;
  margin: 2rem 0rem;
  justify-content: center;
`;
