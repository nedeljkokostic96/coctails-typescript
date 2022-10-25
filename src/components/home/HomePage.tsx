import { Props } from "../model/IHomePage";

const HomePage: React.FC<Props> = ({ children }: Props) => {
  return <div className="home-page">{children}</div>;
};

export default HomePage;
