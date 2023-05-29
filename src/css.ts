import { css } from "@emotion/css";

export const StyledGridContainer = css`
  background: #fff;
  max-width: 80vw;
  margin: auto;
  padding: 0.5rem;
`;

export const StyledGridItemContainer = css`
  display: grid;
  height: 120px;
  align-items: center;
`;

export const StyledFormContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  gap: 30px;
  height: max-content;
  width: max-content;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const StyledErrorMessage = css`
  color: red;
`;

export const StyledSuccessMessage = css`
  background: green;
  color: white;
`;

export const StyledWhiteText = css`
  color: white;
`;

export const StyledContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 70px;
  min-height: 100vh;
`;

export const BtnContainer = css`
  justify-self: end;
  margin-bottom: 5px;
  margin-right: 5px;
  display: flex;
  gap: 3px;
`;
