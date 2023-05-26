import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col ">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} un Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} et partagez votre secret avec le monde entier.
      </p>
      <form onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Votre Secret</span>
          <textarea 
          value={post.body}
          onchange={(e) => setPost({ ...post, body: e.target.value })}
          placeholder="Votre secret"
          required
          className="form_textarea"
          />

          </label>
          <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Tag{` `}
          <span className="font-normal">(#guerre #sexe #argent)</span>
          </span>
          <input 
          value={post.tag}
          onchange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="Donnez un tag à votre secret"
          required
          className="form_input"
          />
          </label>
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href={"/"} className="text-gray-500 text-sm">Annuler</Link>
          <button type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting ? `$(type)...` : "Envoyer"}
          </button>

          </div>
      </form>
    </section>
  );
};

export default Form;
