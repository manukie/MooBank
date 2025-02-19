import { StyledContainer } from "../../styles/grid";
import { StyledBank, StyledMoo } from "../../styles/Typography";
import { StyledHeader } from "./styles";

export const Header = () => {
   return (
      <StyledHeader>
         <StyledContainer>
            <div className="flexBox">
               <StyledMoo>Moo</StyledMoo><StyledBank>Bank</StyledBank>
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};