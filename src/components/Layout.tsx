import { StyledContainer } from "../css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <main className={StyledContainer}>{children}</main>;
}
