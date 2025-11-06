type RemoveButtonProps = {
  className: string;
  onClick: () => void;
};

const RemoveButton = ({ className, onClick }: RemoveButtonProps) => (
  <div role="button" aria-label="Remove card" className={className} onClick={onClick}>
    X
  </div>
);

export default RemoveButton;
