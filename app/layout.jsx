'use client'
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

const metadata = {
  title: "NK (Nobody knows) Ne le dites à personne",
  description:
    "Soulages ton coeur en partageant ce que tu ressens et tes secrets dans l'anonymat",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"/>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
