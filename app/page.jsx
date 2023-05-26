import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Dis-moi ton secret
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          Soulage ton coeur en restant anonyme
        </span>
      </h1>
      <p className="desc text-center font-bold text-white">
        "Libérez votre âme, partagez vos secrets dans l'anonymat bienveillant -
        un blog où les cœurs s'allègent et les secrets trouvent refuge."
      </p>
      <Feed />
    </section>
  );
};

export default Home;
