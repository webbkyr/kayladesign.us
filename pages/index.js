import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>kayladesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          kayladesign
        </h1>
        <p className="description">
          publications | illustrations | graphics | digital printing
        </p>
        <p className="description">⚠️ Our site is currently under construction. ⚠️ </p>
        <img className="main-logo" src="/images/logo.png" />

        <div className="grid">
          <a href="https://kayladesign1.wixsite.com/kayladesign/about" className="card">
            <h3>Our Story &rarr;</h3>
            <p>We are a family-owned and operated business.</p>
          </a>

          <a href="https://kayladesign1.wixsite.com/kayladesign/new-page" className="card">
            <h3>Our Services &rarr;</h3>
            <p>Learn about what we can do for you.</p>
          </a>

          <a
            href="https://www.instagram.com/thehawaiikid/"
            className="card"
          >
            <h3>Our Portfolio &rarr;</h3>
            <p>See a few of our most recent projects.</p>
          </a>
          <a
            href="https://kayladesign1.wixsite.com/kayladesign/contact"
            className="card"
          >
            <h3>Contact Us &rarr;</h3>
            <p>We are happy to serve you.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="mailto:kayla@hey.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Kayla R. Webb ©️ 2021
        </a>
      </footer>

      <style jsx>{`
        .container {
          background-color: #E8F0F2;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .main-logo {
          max-width: 90%;
          border-radius: 8px;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #D62AD0;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
