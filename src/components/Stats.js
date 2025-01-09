export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your list 🚀</em>
      </footer>
    );
  const numberOfItems = items.length;
  const packedLength = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedLength / numberOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything, Ready to go!!!"
          : `🧳 You have ${numberOfItems} items on your list, and you have already packed ${packedLength} (${percentage}%)`}
      </em>
    </footer>
  );
}
