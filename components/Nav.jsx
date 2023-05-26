"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const {data : session } = useSession()
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);
    
  useEffect(()=>{
  const setupProviders = async() => {
        const res = await getProviders();
        setProviders(res);
      }
      setupProviders();
    }, []);

  return (
    <nav className="flex-between w-full mb-16 p-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/heart.svg"
          width={60}
          height={60}
          alt="NK-logo"
          className="object-contain"
        />
        <p className="logo_text"> Nobody knows</p>
      </Link>
      {/* Desktop NAv */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-post" className="black_btn">
              Créer un post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Se Déconnecter
            </button>
            <Link href="/profile">
              <Image
                src="assets/images/profile.svg"
                width={60}
                height={60}
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  SignIn
                </button>
              ))}
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
            className="cursor-pointer"
              src="assets/images/profile.svg"
              width={60}
              height={60}
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profil"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Mon profil
                </Link>
                <Link
                  href="/create-post"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Créer un post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >Se déconnecter</button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  SignIn
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
