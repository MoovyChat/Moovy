export interface ThemeProps {
  background: string;
  chatText: string;
  chatBody: string;
  toggleBorder: string;
  headerBg: string;
  theme: string;
}

export const lightTheme: ThemeProps = {
  chatBody: "#ffffff",
  chatText: "#363537",
  toggleBorder: "#b8b7b7",
  background: "#1e1e1e",
  headerBg: "#e2e8f0",
  theme: "light",
};
export const darkTheme: ThemeProps = {
  chatBody: "#1e1e1e",
  chatText: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#1e1e1e",
  headerBg: "#4a5568",
  theme: "dark",
};
