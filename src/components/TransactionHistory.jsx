import c from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  const itemsList = items.map((item) => (
    <tr key={item.id} className={c.row_transaction}>
      <td className={c.info_transaction}>{item.type}</td>
      <td className={c.info_transaction}>{item.amount}</td>
      <td className={c.info_transaction}>{item.currency}</td>
    </tr>
  ));
  return (
    <table className={c.table}>
      <thead className={c.tables_head}>
        <tr className={c.colomns_names}>
          <th className={c.colomns_name}>Type</th>
          <th className={c.colomns_name}>Amount</th>
          <th className={c.colomns_name}>Currency</th>
        </tr>
      </thead>

      <tbody>{itemsList}</tbody>
    </table>
  );
}
