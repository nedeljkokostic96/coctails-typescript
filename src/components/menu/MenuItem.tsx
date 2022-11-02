import "./MenuItem.css";

interface Props {
  menuItemTitle: string;
  onMouseOver: any;
}

const MenuItem: React.FC<Props> = ({ menuItemTitle, onMouseOver }: Props) => {
  return (
    <h2 className="main-menu-item" onMouseOver={onMouseOver}>
      {menuItemTitle}
    </h2>
  );
};

export default MenuItem;
