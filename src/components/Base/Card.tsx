import "./Card.scss";

interface CardProps {
  header: string;
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">{props.header}</div>
      <div className="card-body">{props.children}</div>
    </div>
  );
};
