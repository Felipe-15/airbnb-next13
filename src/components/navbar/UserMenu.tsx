"use client";

import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";

import { User } from "@prisma/client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

interface Props {
  currentUser?: User | null;
}

const UserMenu = ({ currentUser }: Props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className="
            relative
        "
    >
      <div
        className="
                flex
                flex-row
                items-center
                gap-3
            "
      >
        <div
          onClick={() => null}
          className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                transition
                cursor-pointer
                hover:bg-neutral-100
            "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
            "
        >
          <AiOutlineMenu />
          <div
            className="
            hidden
            md:block
          "
          >
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
        "
        >
          <div
            className="
                flex
                flex-col
                cursor-pointer
            "
          >
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={() => null} />
                <MenuItem label="My favorites" onClick={() => null} />
                <MenuItem label="My reservations" onClick={() => null} />
                <MenuItem label="My properties" onClick={() => null} />
                <MenuItem label="Airbnb my home" onClick={() => null} />
                <hr />
                <MenuItem label="Log out" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
