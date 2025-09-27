import { AppStore } from "app/providers/storeProvider";
import { useStore } from "react-redux";

export const useAppStore = () => useStore<AppStore>()
