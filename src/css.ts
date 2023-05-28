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
