export default function HomePage({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src="/soi.jpg"   
        alt="SOI pic"
      />
      <h1>{title}</h1>
      <h4>Start Your Tech Journey with #GreaterPossibilities</h4>
      <p>
        Gain the skills to create solutions that matter. At SOI, you will develop expertise that employers value and shape a future where you can thrive in high-growth tech roles.
      </p>
    </div>
  );
}