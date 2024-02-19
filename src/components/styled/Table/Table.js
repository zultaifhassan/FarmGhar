import './style.css'

export function Table({ children,id }) {
  return <table className="global-table" id={id}>{children}</table>;
}

export function TableHead({ children }) {
  return <thead className="global-table-head">{children}</thead>;
}
export function TableHeadData({ children }) {
  return <th className="global-table-head-data">{children}</th>;
}
export function TableRow({ children }) {
  return <tr className="global-table-row">{children}</tr>;
}
export function TableBody({ children }) {
  return <tbody className="global-table-body">{children}</tbody>;
}
export function TableBodyData({ children }) {
  return <td className="global-table-body-data">{children}</td>;
}

export function TableText({ children, variant = "simple" }) {
  return (
    <span
      className={`table-simple-text ${
        variant === "simple" ? "table-simple-text" : "table-link-text"
      }`}
    >
      {children}
    </span>
  );
}
