import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface States {
  email: string | null;
}

interface Actions {
  setEmail: (email: string | null) => void;
}

const useAuthStore = create(
  persist<States & Actions>(
    (set) => ({
      email: null,
      setEmail: (email: string | null) => set({ email }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
