import "./Card.scss";

interface CardProps {
  header: string;
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  // Introducing a bug: trying to access a non-existent property
  const headerText = props.headerTitle || props.header;

  return (
    <div className="card">
      <div className="card-header">{headerText}</div>
      <div className="card-body">{props.children}</div>
    </div>
  );
};
