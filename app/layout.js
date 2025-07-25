import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SparkleEffect from "@/app/components/SparkleEffect";
import PageTransition from "@/app/components/PageTransition";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-100">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&family=Raleway:wght@600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Kanakina Design Studio",
              "url": "https://your-website-url.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-website-url.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kanakina",
              "url": "https://your-website-url.com",
              "sameAs": [
                "https://www.instagram.com/music_kanako/",
                "https://note.com/kanakinaa"
              ]
            }),
          }}
        />
      </head>
      <body className="d-flex flex-column h-100">
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <SparkleEffect />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
