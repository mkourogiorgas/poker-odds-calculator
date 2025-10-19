type ValueProps = {
  value: string;
  className: string;
};

const Value = ({ value, className }: ValueProps) => <div className={className}>{value}</div>;

export default Value;
