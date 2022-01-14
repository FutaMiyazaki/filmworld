export function Links({ items, handleReduce }) {
  return (
    <div>
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => {
        return (
          <a key={item.description} href={item.href}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
