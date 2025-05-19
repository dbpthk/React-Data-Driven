function Entry() {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDIwNjJ8MHwxfGFsbHx8fHx8fHx8fDE3MjMyMzUwNjR8&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Mount Fuji"
        />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src="./src/images/marker.png"
          alt="google maps marker"
        />
        <span className="country">Japan</span>
        <a
          href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          target="_blank"
        >
          View on Google Maps
        </a>
        <h2 className="entry-title">Mount Fuji</h2>
        <p className="trip-dates">12 June, 2025 - 24 June, 2025</p>
        <p className="entry-text">
          Mount Fuji, Japan’s highest peak at 3,776 meters, is an iconic and
          sacred volcano located on Honshu Island. Known for its near-perfect
          symmetrical cone, it is a symbol of beauty and spiritual significance
          in Japanese culture. Mount Fuji attracts millions of tourists and
          pilgrims each year, especially during the official climbing season in
          July and August. The mountain has inspired countless works of art,
          including Hokusai’s famous woodblock prints. Though still classified
          as an active volcano, it last erupted in 1707. Surrounded by lakes and
          forests, Mount Fuji is a UNESCO World Heritage site and a cherished
          national treasure of Japan.
        </p>
      </div>
    </article>
  );
}
export default Entry;
